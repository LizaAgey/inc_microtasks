import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FullInput from "./components/FullInput";
import Input from "./components/Input";
import Button from "./components/Button";

export type MessageType = {
    message: string
}


function App() {

    let [messages, setMessages] = useState([
        {message: "one"},
        {message: "two"},
        {message: "three"}
    ])

    //for a variant with separate components Input and Button
    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessages([newMessage, ...messages])
    };

    //for a variant with separate components Input and Button
    const callBackOnClickButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div className="App">
            {/*<FullInput*/}
            {/*    addMessage={addMessage}*/}
            {/*/>*/}

            {/*for a variant with separate components Input and Button*/}
            <Input
                setTitle={setTitle}
                title={title}
            />
            <Button
                name={"Send"}
                callBack={callBackOnClickButtonHandler}
            />



            {messages.map((element, index) => {
                return (
                    <div key={index}>{element.message}</div>
                )
            })}
        </div>
    );
}

export default App;
