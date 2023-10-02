import { QdrantClient } from "@qdrant/js-client-rest";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Document } from "langchain/document";
import { calculateTokensNew } from "./tikToken";
import { Config } from "./Config";

/**
 * Searches for documents in a Qdrant collection based on a query and filters.
 * @param {Object} options - The options object.
 * @param {string} options.collectionName - The name of the Qdrant collection to search in.
 * @param {string} options.query - The query to search for.
 * @param {string[]} options.filters - The filters to apply to the search.
 * @param {string} options.docsLimit - The maximum number of documents to return.
 * @param {number} options.maxTokens - The maximum number of tokens allowed in the returned documents.
 * @returns {Promise<Document[]>} - A promise that resolves to an array of Document objects.
 */
export async function qdrantVectorSearch({
  collectionName,
  query,
  filters,
  docsLimit,
  maxTokens,
}: {
  collectionName: string;
  query: string;
  filters: string[];
  docsLimit: string;
  maxTokens: number;
}): Promise<Document[]> {
  console.log(`
  -------- QDRANT Start Search --------  
    collection: ${collectionName}
    query: ${query}
    filter: ${filters}
    limit: ${docsLimit}
    maxTokens: ${maxTokens}
  `);

  interface IFilter {
    should?: object[];
  }

  let filter: IFilter = { should: [] };

  filters.forEach((channel) => {
    filter.should?.push({ key: "metadata.ch", match: { value: channel } });
  });

  const client = new QdrantClient({ url: Config.QDRANT_ENDPOINT });
  let docs: Document[] = [];

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: Config.OPENAI_API_KEY,
  });

  let queryEmbedding = await embeddings.embedDocuments([query]);

  const searchResult = await client.search(collectionName, {
    vector: queryEmbedding[0],
    limit: parseInt(docsLimit),
    filter: filter,
  });

  let tokensCount = 0;

  console.log("-------------------------------------");
  console.log("Search Result docs count: ", searchResult.length);
  console.log("Start Calculating max tokens ... !");

  let tempContent = "";

  for (let item of searchResult) {
    if (item.payload) {
      // const metaData = item.payload["metadata"] as { ch: string };
      tempContent += item.payload["page_content"];
      const doc = new Document({
        pageContent: item.payload["page_content"] as string,
        metadata: item.payload["metadata"] as object,
      });

      docs.push(doc);
    }
    if (item.score < 0.77) break;
  }

  console.log("Final Docs Count : ", docs.length);

  tokensCount = await calculateTokensNew(tempContent);

  console.log("Tokens calculated ===> ", tokensCount);
  if (tokensCount > maxTokens) {
    console.log("!!! Documents exceed token limit : ", maxTokens / tokensCount);
    const ratio = Math.ceil(docs.length * (maxTokens / tokensCount - 1));
    console.log("Ratio : ", ratio);
    docs.splice(ratio * 1.2);
  }

  console.log("Final Docs Count : ", docs.length);
  return docs;
}

async function processItem(item: any) {
  const { payload } = item;
  if (!payload) return { tokens: 0, doc: null };

  const pageContent = payload["page_content"];
  const tokens = await calculateTokensNew(pageContent);
  const metaData = payload["metadata"];

  const doc = new Document({
    pageContent: pageContent,
    metadata: metaData,
  });

  return { tokens, doc };
}
