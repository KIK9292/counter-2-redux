


export type StateType={
    counter:number
    counterMin:number
    counterMax:number
}

const stateCounter={
    counter:Number(localStorage.getItem('ValueCounter')) || Number(localStorage.getItem('ValueCounterMin'))||0,
    counterMin:Number(localStorage.getItem('ValueCounterMin')) || 0,
    counterMax:Number(localStorage.getItem('ValueCounterMax')) || 5,
}






export const counterReducer=(state:StateType=stateCounter,action:ROOTType):StateType=>{
    switch (action.type) {
        case "ADD-VALUE-COUNTER":{
            let newValueCounter=state.counter+1
            return {...state,counter:newValueCounter}
        }
        case "RESET-COUNTER":{
            return {...state,counter:state.counterMin}
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
        case "ADD-LOCAL_STORAGE":{
            localStorage.setItem("ValueCounterMin", JSON.stringify(state.counterMin));
            localStorage.setItem("ValueCounterMax", JSON.stringify(state.counterMax));
            return state
        }
        case "ADD-LOCAL_STORAGE-COUNTER":{
            localStorage.setItem("ValueCounter", JSON.stringify(state.counter));
            return state
        }


        default:return state

    }
}


export type ROOTType=AddValueCounterACType|ResetCounterAC|AddNewValueMinACType|AddNewValueMaxACType|NewCounterValueACType|AddLocalStorageACType|AddLocalStorageCounterACType
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
export type AddLocalStorageACType=ReturnType<typeof addLocalStorageAC>
export const addLocalStorageAC=()=>{
    return{
        type:"ADD-LOCAL_STORAGE"
    }as const
}
export type AddLocalStorageCounterACType=ReturnType<typeof addLocalStorageCounterAC>
export const addLocalStorageCounterAC=()=>{
    return{
        type:"ADD-LOCAL_STORAGE-COUNTER"
    }as const
}
// export type GetLocalStorageACType=ReturnType<typeof getLocalStorageAC>
// export const getLocalStorageAC=(min:number,max:number,value:number)=>{
//     return{
//         type:"GET-LOCAL-STORAGE",
//         payload:{min,max,value}
//     }
// }