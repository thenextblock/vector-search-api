import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { loadQAChain } from "langchain/chains";
import { Document } from "langchain/document";
import { Config } from "./Config";
import { qdrantVectorSearch } from "./QdrantSearch";
import _ from "lodash";
import { OpenAIModelID, OpenAIModels } from "./Models";

interface IRequest {
  message: any[];
  question: string;
  collection: string;
  filters: string[];
  maxdocs: number;
  model: OpenAIModelID;
}

interface IResponse {
  request?: IRequest;
  response?: any;
  vector?: Document[];
  debug?: any;
  report?: any;
}

interface IVectorresponse {
  request?: IRequest;
  response?: any;
  vector?: Document[];
  report?: any;
}

/**
 * Searchs vector database
 * @param request
 * @returns vector database docuemnts
 */

export async function searchVectorDatabase(
  request: IRequest
): Promise<IVectorresponse | null> {
  const { collection, question, filters, maxdocs, model } = request;

  console.log(`
  
  Search Vector Database ... !
    /-----------------------------------------------/
      collection: ${collection}
      question: ${question}
      filters: ${filters}
      maxdocs: ${maxdocs}
      model: ${model}
    /-----------------------------------------------/
  `);

  const maxTokens = OpenAIModels[model].tokenLimit * 0.87; // 80% of max tokens 10 % for response
  console.log(`Max Tokens: for Model ${model} ===  ${maxTokens} `);

  let docs = await qdrantVectorSearch({
    collectionName: collection,
    query: question,
    filters: filters,
    docsLimit: maxdocs.toString(),
    maxTokens: maxTokens,
  });

  const response: IResponse = {
    request: request,
    response: "qaChainResponse",
    vector: docs,
    debug: {},
    report: _.countBy(docs, "metadata.ch"),
  };

  return response;
}

export async function getQnaResponse(
  request: IRequest
): Promise<IResponse | null> {
  const { collection, question, filters, maxdocs } = request;

  console.log(`
    -------------- QNA SEARCH  ----------------
      collection: ${collection}
      question: ${question}
      filters: ${filters}
      maxdocs: ${maxdocs}
    -------------------------------------------

  `);
  // Search in Qdrant
  let docs = await qdrantVectorSearch({
    collectionName: collection,
    query: question,
    filters: filters,
    docsLimit: maxdocs.toString(),
    maxTokens: 6500,
  });

  console.log("Documents loaded : ", docs.length);

  const report = _.countBy(docs, "metadata.ch");

  const model = new OpenAI({
    temperature: 0,
    openAIApiKey: Config.OPENAI_API_KEY,
    modelName: "gpt-4",
    verbose: true,
  });

  const qaChain = loadQAChain(model);

  const qaChainResponse = await qaChain.call({
    input_documents: docs,
    question: request.question,
    verbose: true,
  });

  console.log(qaChainResponse);

  const response: IResponse = {
    request: request,
    response: qaChainResponse,
    vector: docs,
    debug: {},
    report: report,
  };

  return response;
}
