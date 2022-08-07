import { useState } from "react"
import { messages } from "../Mesagges"
import { users } from "../Users"
import MessageForm from "./MessageForm"
import MessageList from "./MessageList"
export default function ChatWindow(props){
    const username = props.username

    return(
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
                <MessageList 
                    messages={props.messagesArray} 
                    username={username}
                />
                <MessageForm 
                    username={username} 
                    handleNewMessage={props.handleNewMessage}
                />
        </div>
    )
}