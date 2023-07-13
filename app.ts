import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

const response = chat.call([
    new HumanMessage(
      "Translate this sentence from English to French. I love programming."
    ),
]);
  
console.log(response);