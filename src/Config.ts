// const dotenv = require("dotenv");
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

interface IConfig {
  serviceName: string;
  PORT: string;
  OPENAI_API_KEY: string;
  PINECONE_API_KEY: string;
  PINECONE_ENVIRONMENT: string;
  PINECONE_INDEXE_NAME: string;
  QDRANT_ENDPOINT: string;
}

export const Config: IConfig = {
  serviceName: process.env.SERVICENAME || "DISCORD-GPT-QNA",
  PORT: process.env.PORT || "5000",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  PINECONE_API_KEY: process.env.PINECONE_API_KEY || "",
  PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT || "",
  PINECONE_INDEXE_NAME: process.env.PINECONE_INDEXE_NAME || "",
  QDRANT_ENDPOINT: process.env.QDRANT_ENDPOINT || "",
};
