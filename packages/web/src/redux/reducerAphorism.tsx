import {IAphorism, IQuestion} from "./interface";
import {initState} from "./init/initAphorism";
import {Dispatch} from "redux";
import {testAPI} from "../api/api";
import {getTestsList_AC, toggleIsSynchroAC} from "./reducerTests";

const SET_APHORISM='SET_APHORISM';
type ATSetAphorism={type:typeof SET_APHORISM,data:IAphorism[]}
export const setAphorism_AC=(data:IAphorism[]):ATSetAphorism=>({type:SET_APHORISM,data:data});

type ATForReducerAphorism = ATSetAphorism

export const getAphorism_TC=()=>
    async (dispatch:Dispatch<ATForReducerAphorism>)=>{
//        window.alert("Ntcn");
//        dispatch(toggleIsSynchroAC(true));
        let response = await testAPI.getAphorism(null,true,null,null)
        if (response.status===200) dispatch(setAphorism_AC(response.data));
//        dispatch(toggleIsSynchroAC(false));
    }

export const reducerAphorism=(state:IAphorism[]=initState,action:ATForReducerAphorism):IAphorism[]=> {
    switch (action.type) {
        case SET_APHORISM: return {...action.data}
            break;
        default: return state
            break;
    }
}