import React from 'react';
import QuestionItem from './QuestionItem';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCurrentQuestionSEL,getCurrentTestParamSEL} from '../../redux/test-selectors';
import {setUserChoiseAnswer_TC,
        checkChoise_AC,
        onInputAnswer_TC
       } from '../../redux/reducerTests';
import { AppStateType } from '../../redux/redux-store';
import { IQuestion, ITest } from '../../redux/interface';

type TypeStateProps={
  tp:ITest|null
  question:IQuestion|null
}

type TypeDispatchProps={
  onInputAnswer:(data:string|null,send?:boolean)=>void
  setUserChoiceAnswer:(qid:number, aid:number)=>void
  chkChoice:()=>void
}

type TypeProps={}

type TQuestionItem={
  question:IQuestion|null
  tp:ITest|null
  onInputAnswer:(data:string|null,send?:boolean)=>void
}

class Question extends React.Component<TQuestionItem&TypeDispatchProps>{
  constructor(props:TQuestionItem&TypeDispatchProps) {
    super(props);
  }

onSelectState=(qid:number,aid:number)=>{
    this.props.setUserChoiceAnswer(qid,aid)
    // if (this.props.tp&&this.props.tp.type_levelgame) {
    //     this.props.chkChoise();
    // }
 }

render(){
      return <> <QuestionItem checkChoice={this.onSelectState} {...this.props} /></>
  }

}

let mapStateToProps=(state:AppStateType):TypeStateProps=>{
      return{
        tp:getCurrentTestParamSEL(state),
        question:getCurrentQuestionSEL(state),
      }
}

export default compose(
    connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>(mapStateToProps,{
      onInputAnswer:onInputAnswer_TC,
      setUserChoiceAnswer:setUserChoiseAnswer_TC,
      chkChoice:checkChoise_AC
    }),
  //withAuthRedirect,
  //withPreloader
  )
  (Question);