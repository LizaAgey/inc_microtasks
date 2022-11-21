import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void

}

const Button: React.FC<ButtonType> = (props) => {
    const onClickButtonHandler = () => {
        props.callBack()
    };

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button;