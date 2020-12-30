import React from 'react';
import AphorismBlock from './aphorism';
import {connect} from 'react-redux';
import {compose} from 'redux';
// import {getCurrentQuestionSEL,getCurrentTestParamSEL} from '../../redux/test-selectors';
 import {getAphorism_TC
//     checkChoise_AC,
//     onInputAnswer_TC
 } from '../../redux/reducerAphorism';
import { AppStateType } from '../../redux/redux-store';
import {IAphorism} from "../../redux/interface";
// import { IQuestion, ITest } from '../../redux/interface';

type TypeStateProps={
    aphorism:IAphorism[]
    // tp:ITest|null
    // question:IQuestion|null
}

type TypeDispatchProps={
    getAphorism:()=>void
    // onInputAnswer:(data:string|null,send?:boolean)=>void
    // setUserChoiceAnswer:(qid:number, aid:number)=>void
    // chkChoice:()=>void
}

type TypeProps={}



type TAphorismBlock={
    aphorism:IAphorism[]
}

 class Aphorism extends React.Component<TAphorismBlock&TypeDispatchProps>{
     constructor(props:TAphorismBlock&TypeDispatchProps) {
         super(props);
     }
//
//     onSelectState=(qid:number,aid:number)=>{
//         this.props.setUserChoiceAnswer(qid,aid)
//         // if (this.props.tp&&this.props.tp.type_levelgame) {
//         //     this.props.chkChoise();
//         // }
//     }
//
    render(){
        return <> <AphorismBlock aphorism={this.props.aphorism} getAphorism={this.props.getAphorism}/></>
    }
//
 }
//
 let mapStateToProps=(state:AppStateType):TypeStateProps=>{
     return{
        aphorism:state.Aphorism
//         tp:getCurrentTestParamSEL(state),
//         question:getCurrentQuestionSEL(state),
     }
 }
//
 export default compose(
     connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>(mapStateToProps,{
         getAphorism:getAphorism_TC
//         onInputAnswer:onInputAnswer_TC,
//         setUserChoiceAnswer:setUserChoiseAnswer_TC,
//         chkChoice:checkChoise_AC
     }),
     //withAuthRedirect,
     //withPreloader
 )
 (Aphorism);