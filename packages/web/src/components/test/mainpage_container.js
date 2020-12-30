import TestsList from './mainpage';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getTestsList_TC} from '../../redux/reducerTests';

const mapStateToProps=(state)=>{
  return {
    testslist:state.Tests.testslist,
    isAuth:state.me.isAuth,
    idTest:state.Tests.idTest,
  }
}

export default compose (
    connect(mapStateToProps,{
      getTestsList:getTestsList_TC
  })
)
(TestsList)
