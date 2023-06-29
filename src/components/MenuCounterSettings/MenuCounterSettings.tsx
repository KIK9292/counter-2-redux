import React from 'react';
import {Button} from "../Button/Button";
import {InputNumber} from "../InputNubmer/InputNumber";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../reduce/Store";
import "./../../App.css"
import {
    addLocalStorageAC, addLocalStorageCounterAC,
    addNewValueMaxAC,
    addNewValueMinAC,
    newCounterValueAC,
    StateType
} from "../reduce/counterReducer";


export type MenuCounterSettingsPropsType={
    callbackShow:()=>void
}

export const MenuCounterSettings = (props:MenuCounterSettingsPropsType) => {
    const {callbackShow}=props
    const dispatch = useDispatch()
    const counter = useSelector<RootReducerType, StateType>(Store => Store.counter)
    let disableButton = (counter.counterMax <= 0) || (counter.counterMin < 0) || (counter.counterMax < counter.counterMin) || (counter.counterMax === counter.counterMin)

    const callbackValueMin = (value: number) => {
        dispatch(addNewValueMinAC(value))
    }
    const callbackValueMax = (value: number) => {
        dispatch(addNewValueMaxAC(value))
    }


    const callbackMenuButtonSettings = () => {
        callbackShow()
        if (counter.counterMin>counter.counter){
            dispatch(newCounterValueAC())
            dispatch(addLocalStorageCounterAC())
        }
dispatch(addLocalStorageAC())
    }
    return (
        <div className={"settingsMenuWrapper"}>
            <div className={"settingsMenuInput"}><span>MIN</span>
                <InputNumber callback={callbackValueMin} startValue={counter.counterMin} classValue={counter.counterMax < counter.counterMin || counter.counterMin < 0 ? "error_counter" : "default_counter"}/>
                <span>MAX</span>
                <InputNumber callback={callbackValueMax} startValue={counter.counterMax} classValue={counter.counterMax < counter.counterMin  || counter.counterMax < 0 ? "error_counter" : "default_counter"}/></div>
            <Button callback={callbackMenuButtonSettings} title={"SET"} statusDisable={disableButton}/>
        </div>
    );
};

