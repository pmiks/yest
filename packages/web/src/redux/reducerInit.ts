import {getAuthInfoThunkCreator} from './reducerAuthVK';
import {getTestsList_TC} from './reducerTests';
import {getAphorism_TC} from './reducerAphorism';

const INITIALIZATION_SUCCESS='INITIALIZATION_SUCCESS';

type AinitializationAC={type:typeof INITIALIZATION_SUCCESS, isInit:boolean}
export const initializationAC=(isInit:boolean)=>({type:INITIALIZATION_SUCCESS,isInit:isInit});

export const initializeAppThunkCreator=()=>{
  return (dispatch:any)=>{
    let prAuth=dispatch(getAuthInfoThunkCreator());
    let prTL=dispatch(getTestsList_TC());
    let prAphorism=dispatch(getAphorism_TC());
    Promise.all([prTL,prAuth,prAphorism]).then(()=>{
      dispatch(initializationAC(true));
    });
  }
}

let init={
  initialized:false
};


export let reducerInit=(state=init,action:AinitializationAC)=>{
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
         return{
          ...state,
          initialized:action.isInit
        };
    default:return state;

  }

}
