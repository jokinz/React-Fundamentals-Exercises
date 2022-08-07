import { useState } from "react"

export default function MessageForm(props){
    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        setMessage(event.target.value)
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleNewMessage(props.username, message)
        setMessage("")
    }

    const isDisabled = () =>{
        return message === "" ? true : false
    }
    return(
        <div>
            <form className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                    onChange={handleChange}
                    value={message}
                />
                <div className="input-group-append">
                    <button className="btn submit-button" onClick={handleSubmit} disabled={isDisabled()}>
                    SEND
                    </button>
                </div>
            </form>
        </div>
    )
}