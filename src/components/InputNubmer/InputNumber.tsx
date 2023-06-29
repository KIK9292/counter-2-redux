import React, {ChangeEvent, useState} from 'react';

export type InputNumberPropsType={
    callback:(newValue:number)=>void
    startValue:number
    classValue:string
}



export const InputNumber = (props:InputNumberPropsType) => {
    let {callback,startValue,classValue}=props
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        callback(e.currentTarget.valueAsNumber)
    }

    return (
        <input type="number" onChange={onChangeHandler} value={startValue} className={classValue}/>
    );
};

