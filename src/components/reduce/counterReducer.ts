


export type StateType={
    counter:number
    counterMin:number
    counterMax:number
}

const stateCounter={
    counter:0,
    counterMin:0,
    counterMax:5,
}






export const counterReducer=(state:StateType=stateCounter,action:ROOTType):StateType=>{
    switch (action.type) {
        case "ADD-VALUE-COUNTER":{
            let newValueCounter=state.counter+1
            return {...state,counter:newValueCounter}
        }
        case "RESET-COUNTER":{
            return {...state,counter:0}
        }
        case "ADD-NEW-VALUE-MIN":{
            return {...state,counterMin:action.payload.newValueMin}
        }
        case "ADD-NEW-VALUE-MAX":{
            return {...state,counterMax:action.payload.newValueMax}
        }
        case "NEW-COUNTER-VALUE":{
            return {...state,counter:state.counterMin}
        }

        default:return state

    }
}


export type ROOTType=AddValueCounterACType|ResetCounterAC|AddNewValueMinACType|AddNewValueMaxACType|NewCounterValueACType
export type AddValueCounterACType=ReturnType<typeof addValueCounterAC>
export const addValueCounterAC=()=>{
    return{
        type:"ADD-VALUE-COUNTER"
    }as const
}
export type ResetCounterAC =ReturnType<typeof resetCounterAC>
export const resetCounterAC=()=>{
    return{
        type:"RESET-COUNTER"
    }as const
}

export type AddNewValueMinACType=ReturnType<typeof addNewValueMinAC>
export const addNewValueMinAC=(newValueMin:number)=>{
    return{
        type:"ADD-NEW-VALUE-MIN",
        payload:{newValueMin}
    }as const
}

export type AddNewValueMaxACType=ReturnType<typeof addNewValueMaxAC>
export const addNewValueMaxAC=(newValueMax:number)=>{
    return{
        type:"ADD-NEW-VALUE-MAX",
        payload:{newValueMax}
    }as const
}
export type NewCounterValueACType=ReturnType<typeof newCounterValueAC>
export const newCounterValueAC=()=>{
    return{
        type:"NEW-COUNTER-VALUE",
    }as const
}