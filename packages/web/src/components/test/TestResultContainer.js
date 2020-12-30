import './testslist.css';
import TestResult from "../test/TestResult";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

import {getTestResult_TC,getResult_TC} from '../../redux/reducerTests';



//  // interface TypeStateProps extends RouteComponentProps<{session:string}>{
//  //   result:Array<IResult>
//  //   tr:IUserResult
//  // }
//
// type TypeStateProps={
//   result:Array<IResult>
//   tr:IUserResult
// }
//
//
// type TypeDispatchProps={
//   getTestResult:(session:string)=>void
//   getResult:(id:number)=>void
// }
//
//   // type TypeProps={
//   //
//   // }
//
//
//
// let mapStateToProps=(state:AppStateType):TypeStateProps=>{
// return{
//         result:state.Tests.result,
//         tr:state.Tests.testresult,
//       }
// }
//
//
// export default compose(
//     connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>
//     (mapStateToProps,{
//       getTestResult:getTestResult_TC,
//       getResult:getResult_TC
//     }),
// //    withAuthRedirect
//     withRouter
//   )
//   (TestResult);


// interface TypeStateProps extends RouteComponentProps<{session:string}>{
//   result:Array<IResult>
//   tr:IUserResult
// }

// type TypeStateProps={
//  result:Array<IResult>
//  tr:IUserResult
// }
//
//
// type TypeDispatchProps={
//  getTestResult:(session:string)=>void
//  getResult:(id:number)=>void
// }

 // type TypeProps={
 //
 // }



let mapStateToProps=(state)=>{
return{
       result:state.Tests.result,
       tr:state.Tests.testresult,
     }
}


export default compose(
   connect (mapStateToProps,{
     getTestResult:getTestResult_TC,
     getResult:getResult_TC
   }),
//    withAuthRedirect
   withRouter
 )
 (TestResult);
