import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../App";

type FullInputType = {
    addMessage: (title: string) => void
}

const FullInput: React.FC<FullInputType> = (props) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    };

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")

    };


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>Send</button>
        </div>
    );
};

export default FullInput;