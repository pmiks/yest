import {authTAPI} from '../api/api';
import { TypeMe } from './interface';
import { Dispatch } from 'redux';

let me:TypeMe={
  iduser:null,
  first_name:null,
  last_name:null,
  photo:null,
  access_token:null,
  isAuth:false,
  GMODERATOR:false,
  GSUPERUSER:false,
  GTESTGENERATOR:false
};

const SET_MY_AUTH_DATA="SET_MY_AUTH_DATA";
type ATsetMyAuthDataAC={type:typeof SET_MY_AUTH_DATA,mydata:TypeMe}
export const setMyAuthDataAC=(mydata:TypeMe):ATsetMyAuthDataAC=>({type:SET_MY_AUTH_DATA,mydata:mydata});

type TypesAction=ATsetMyAuthDataAC

export const getAuthInfoThunkCreator=()=>{
 return (dispatch:Dispatch<TypesAction>)=>{
    return authTAPI.getAuthInfo().then((response:any)=>
      {
        if (response.status===200)
           dispatch(setMyAuthDataAC({...response.data,isAuth:true}))
           console.log("11111")
           console.log(response.data)
        })
  }
}


export const logoutTC=()=>{
 return (dispatch:Dispatch<TypesAction>)=>{
    authTAPI.logout().then((response:any)=>
      {
        if (response.data.result===0) {
          dispatch(setMyAuthDataAC({access_token:null,first_name:null,iduser:null,last_name:null,photo:null,isAuth:false,GMODERATOR:false,GSUPERUSER:false,GTESTGENERATOR:false}));
      }
    });
  }
}


export let reducerAuthVK=(state:TypeMe=me,action:TypesAction):TypeMe=>{
  switch (action.type) {
    case SET_MY_AUTH_DATA:
        return{...state,
          ...action.mydata,
        };
    default:return state;

  }

}
