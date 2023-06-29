import React from 'react';
import {Button} from "../Button/Button";
import {RootReducerType, Store} from "../reduce/Store";
import {addLocalStorageCounterAC, addValueCounterAC, resetCounterAC, StateType} from "../reduce/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import "./../../App.css"

export type MenuCounterPropsType = {
    callbackShow: () => void
}


export const MenuCounter = (props: MenuCounterPropsType) => {
    let {callbackShow} = props
    const dispatch = useDispatch()
    const counter = useSelector<RootReducerType, StateType>(Store => Store.counter)

    const incCallback = () => {
        dispatch(addValueCounterAC())
        dispatch(addLocalStorageCounterAC())
    }
    const resetCallback = () => {
        dispatch(resetCounterAC())
    }

    const callbackMenuButtonSettings = () => {
        callbackShow()

    }
    return (
        <div className={"CounterWrapper"}>
            <span className={"CounterNumberWrapper"+" "+(counter.counter===counter.counterMax?"error_counter":"default_counter")}>{counter.counter}</span>
            <div className={"CounterButtonWrapper"}><Button callback={incCallback} title={"INC"} statusDisable={counter.counterMax <= counter.counter}/>
                <Button callback={resetCallback} title={"RESET"} statusDisable={counter.counterMin >= counter.counter}/>
                <Button callback={callbackMenuButtonSettings} title={"SETTINGS"} statusDisable={false}/></div>
        </div>
    );
};

