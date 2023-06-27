import React from 'react';
import {Button} from "../Button/Button";
import {RootReducerType, Store} from "../reduce/Store";
import {addValueCounterAC, resetCounterAC, StateType} from "../reduce/counterReducer";
import {useDispatch, useSelector} from "react-redux";

export type MenuCounterPropsType = {
    callbackShow: () => void
}


export const MenuCounter = (props: MenuCounterPropsType) => {
    let {callbackShow} = props
    const dispatch = useDispatch()
    const counter = useSelector<RootReducerType, StateType>(Store => Store.counter)

    const incCallback = () => {
        dispatch(addValueCounterAC())
    }
    const resetCallback = () => {
        dispatch(resetCounterAC())
    }

    const callbackMenuButtonSettings = () => {
        callbackShow()

    }
    return (
        <div>
            <span>{counter.counter}</span>
            <Button callback={incCallback} title={"INC"} statusDisable={counter.counterMax <= counter.counter}/>
            <Button callback={resetCallback} title={"RESET"} statusDisable={counter.counterMin >= counter.counter}/>
            <Button callback={callbackMenuButtonSettings} title={"SETTINGS"} statusDisable={false}/>
        </div>
    );
};

