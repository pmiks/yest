import TestsEdit from './TestEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setTestParamAC,saveTestCoverImgTC,deleteTestCoverImgTC} from '../../../redux/reducerTestsEdit';
import {getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
import {withAuthRedirect} from '../../../common/myhocs';




const mapStateToProps=(state)=>{
  return {
    tp:getCurrentEditTestParamSEL(state),
  }
}

export default compose (
    connect(mapStateToProps,{
      setTP:setTestParamAC,
      saveTestCoverImg:saveTestCoverImgTC,
      deleteTestCoverImg:deleteTestCoverImgTC

    })
    ,withAuthRedirect
)
(TestsEdit)
