import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGpt!",
      sender: "ChatGpt"
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...message, newMessage]


    setMessages(newMessages)
  }
  return (
    <div className="App">
      <div style={{position: "absolute" , height: "100%" , width: "100%" , right : '0'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {
                messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })
              }
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
