import TestsList from './TestsEditList';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getTestsListForEditTC,deleteTestTC,addTestTC} from '../../../redux/reducerTestsEdit';


const mapStateToProps=(state:any)=>{
  return {
    testlist:state.TestsEdit.testslistforedit,
    isAuth:state.me.isAuth,
    idTest:state.TestsEdit.idTestEdit,
  }
}

export default compose (
    connect(mapStateToProps,{
      getTestsListForEdit:getTestsListForEditTC,
      deleteTest:deleteTestTC,
      addTest:addTestTC
    })
)
(TestsList)
