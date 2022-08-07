export default function MessageList(props){
    const messages = props.messages
    const username = props.username
    return(
        <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>
    )
}