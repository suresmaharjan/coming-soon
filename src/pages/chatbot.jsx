import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "../styles/ChatBot.css";

import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.js";
import ActionProvider from "../bot/ActionProvider.js";

export default function ChatBot() {
  return (
    <div className="bot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
