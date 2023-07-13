const { ChatOpenAI } = require("langchain/chat_models/openai");
const { PromptTemplate } = require("langchain/prompts");
const { HumanMessage, SystemMessage } = require("langchain/schema");
const { LLMChain } = require("langchain/chains");
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

const model = new ChatOpenAI({ openAIApiKey: apiKey, temperature: 0.9 });
const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a helpful assistant that translates {input_language} to {output_language}."
    ),
    HumanMessagePromptTemplate.fromTemplate("{text}"),
  ]);

const chain = new LLMChain({ llm: model, prompt: prompt });

const main = async () => {
    const res = await chain.call({ product: "colorful socks" });
    console.log(res);
}

main();