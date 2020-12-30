import TestResult from './TestResultEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setResultItemAC,addResultItemAC,deleteResultItemAC} from '../../../redux/reducerTestsEdit';
import { AppStateType } from '../../../redux/redux-store';
import { IResult} from '../../../redux/interface';
import { getCurrentEditTestTypeIdParamSEL } from '../../../redux/test-selectors';



export type TypeStateProps={
  result:Array<IResult>
  typeid:number
}

export type TypeDispatchProps={
   setResultItem:(data:IResult)=>void
   addResultItem:()=>void
   deleteResultItem:(id:number)=>void
 }


export type ITestResult=TypeDispatchProps & TypeStateProps

let mapStateToProps=(state:AppStateType):TypeStateProps=>{
  return {
    result:state.TestsEdit.result,
    typeid:getCurrentEditTestTypeIdParamSEL(state)
  }
}

export default compose (
    connect
     <TypeStateProps,TypeDispatchProps,void,AppStateType>
    (
      mapStateToProps,
      {
      addResultItem:addResultItemAC,
      setResultItem:setResultItemAC,
      deleteResultItem:deleteResultItemAC,
    }
  )
)
(TestResult)
