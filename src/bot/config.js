import { createChatBotMessage } from "react-chatbot-kit";
import "../styles/ChatBot.css";

const config = {
  initialMessages: [createChatBotMessage(`Hello`)],
  botName: "Emma",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f15a29",
    },
    chatButton: {
      backgroundColor: "#333",
    },
  },
  customComponents: {
    //   // Replaces the default header
    //   header: () => (
    //     <div
    //       style={{ backgroundColor: "red", padding: "5px", borderRadius: "3px" }}
    //     >
    //       This is the header
    //     </div>
    //   ),
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ['gist'],
    },
    {
      widgetName: 'messageParser',
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
  ]
};

export default config;

const BotAvatar = (props) => {
  return <div className="botAvatar">Em</div>;
};
const UserAvatar = (props) => {
  return <div className="userAvatar">user</div>;
};
