import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle: (title: string) => void
    title: string
}

const Input: React.FC<InputType> = (props) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    };


    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

export default Input;