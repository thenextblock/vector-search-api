import { QdrantClient } from "@qdrant/js-client-rest";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Document } from "langchain/document";
import { calculateTokensNew } from "./tikToken";
import { Config } from "./Config";

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
  console.log(`-----------------  Start Search ---------------  
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

  // TODO: refactor this, make faster
  for (let item of searchResult) {
    const { payload } = item;
    if (payload) {
      const pageContent = payload["page_content"] as string;

      tokensCount += await calculateTokensNew(pageContent);

      const metaData = payload["metadata"] as object;

      const doc = new Document({
        pageContent: pageContent,
        metadata: metaData,
      });

      docs.push(doc);

      if (tokensCount > maxTokens) {
        console.log("!!! Documents exceed token limit : ", tokensCount);
        break;
      }
    }
  }

  console.log("Max Tokens calculated ... ");
  console.log("Tonkens Count ==> ", tokensCount);
  console.log("Documents loaded : ", docs.length);
  console.log("-------------------------------------------");
  return docs;
}
