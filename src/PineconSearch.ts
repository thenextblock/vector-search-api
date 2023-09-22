// Depricated ...

import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import {
  loadQAStuffChain,
  loadQAMapReduceChain,
  loadQARefineChain,
  ConversationalRetrievalQAChain,
} from "langchain/chains";
import { Document } from "langchain/document";
import { Config } from "./Config";

/**
 *
 * Vecrtor Database search ...
 *
 * @param question
 * @returns Document[]
 *
 *
 */
export async function vectorSearch(
  question: string,
  maxResults: number,
  metafilters?: object
): Promise<Document[]> {
  const { OPENAI_API_KEY, PINECONE_API_KEY, PINECONE_INDEXE_NAME } = Config;

  console.log(
    `
        - OpenAI_API_KEY: ${OPENAI_API_KEY} 
        - PINECONE_API_KEY: ${PINECONE_API_KEY} 
        - PINECONE_INDEXE_NAME: ${PINECONE_INDEXE_NAME}
    `
  );

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: Config.OPENAI_API_KEY,
  });

  const client = new PineconeClient();

  await client.init({
    apiKey: Config.PINECONE_API_KEY,
    environment: Config.PINECONE_ENVIRONMENT,
  });

  const pineconeIndex = client.Index(Config.PINECONE_INDEXE_NAME);

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
  });

  const results = await vectorStore.similaritySearch(
    question,
    maxResults,
    metafilters
  );

  return results;
}
