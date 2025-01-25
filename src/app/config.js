import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Recipe Creator',
    initialMessages: [
        createChatBotMessage("Hello I'm a recipe creator, how can I help you")
    ]
}

export default config;