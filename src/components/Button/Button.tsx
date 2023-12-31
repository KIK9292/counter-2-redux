import React from 'react';
import "./../../App.css"

type ButtonTypeProps={
    callback:()=>void
    title:string
    statusDisable:boolean
}




export const Button = (props:ButtonTypeProps) => {
    let  {callback,title,statusDisable}=props

    const onClickHandler=()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler} disabled={statusDisable} className={statusDisable?"disabledButtonStyle":""}>{title}</button>
    );
};

