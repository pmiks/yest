import QuestionResult from './QuestionResult';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {testIsDone_AC,nextQuestion_AC} from '../../redux/reducerTests';
import {getCurrentTestParamSEL,getCurrentQuestionSEL,getTestResultSEL,getCurrentAnswerSEL
  ,getRightAnswerSEL} from '../../redux/test-selectors';
import { ITest, IQuestion, IAnswer, IUserResult } from '../../redux/interface';
import { AppStateType } from '../../redux/redux-store';

// type TypeStateProps={
// }
//
// type TypeDispatchProps={
// }
//
// type TypeProps={}
//
// connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>

 type TypeStateProps={
   tp:ITest|null
   tR:IUserResult
   currQuest:IQuestion|null
   userAnswer:IAnswer|null
   rightAnswer:IAnswer|null
 }


 type TypeDispatchProps={
   onNext:()=>void
   testIsDone:()=>void
}

 type TypeProps={
   result:string|null
   cQ:number}


const mapStateToProps=(state:AppStateType):TypeStateProps=>{
  return {
    tp:getCurrentTestParamSEL(state),
    currQuest:getCurrentQuestionSEL(state),
    userAnswer:getCurrentAnswerSEL(state),
    tR:getTestResultSEL(state),
    rightAnswer:getRightAnswerSEL(state)
  }
}

export default compose (
    connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>(mapStateToProps,{
      testIsDone:testIsDone_AC,
      onNext:nextQuestion_AC,
    })
)
(QuestionResult)

