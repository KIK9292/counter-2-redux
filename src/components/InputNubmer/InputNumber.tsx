import React, {ChangeEvent, useState} from 'react';

export type InputNumberPropsType={
    callback:(newValue:number)=>void
    startValue:number

}



export const InputNumber = (props:InputNumberPropsType) => {
    let {callback,startValue}=props
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        callback(e.currentTarget.valueAsNumber)
    }

    return (
        <input type="number" onChange={onChangeHandler} value={startValue}/>
    );
};

