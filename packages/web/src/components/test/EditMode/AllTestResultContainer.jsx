import AllTestResult from './AllTestResult';
import {connect} from 'react-redux';
import {compose} from 'redux';
//import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../common/myhocs';
import {getAllTestResult_TC,
  deleteUserResult_TC} from '../../../redux/reducerTests';



let mapStateToProps=(state)=>{
      return{
        atr:state.Tests.alltestresult
      }
}


export default compose(
    connect(mapStateToProps,{
      getAllTestResult:getAllTestResult_TC,
      deleteUserResult:deleteUserResult_TC
    }),
    withAuthRedirect,
//    withRouter
  )
  (AllTestResult);
