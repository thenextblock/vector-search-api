const { Tiktoken } = require("@dqbd/tiktoken/lite");
const cl100k_base = require("@dqbd/tiktoken/encoders/cl100k_base.json");
const { load } = require("tiktoken/load");
const registry = require("tiktoken/registry.json");
const models = require("tiktoken/model_to_encoding.json");

let model: any = null;

(async () => {
  console.log("Loading model...");
  model = await load(registry[models["gpt-3.5-turbo-16k"]]);
  console.log("Model loaded ...", model.bpe_ranks.length);
})();

export function calculateTokens(text: string): number {
  const encoding = new Tiktoken(
    cl100k_base.bpe_ranks,
    cl100k_base.special_tokens,
    cl100k_base.pat_str
  );
  const tokens = encoding.encode(text);
  encoding.free();
  return tokens.length;
}

export async function calculateTokensNew(text: string): Promise<number> {
  const encoder = new Tiktoken(
    model.bpe_ranks,
    model.special_tokens,
    model.pat_str
  );
  const tokens = encoder.encode(text);
  encoder.free();
  return tokens.length;
}
