import TestCheck from './TestCheck';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { setCurrentEditQuestion_TC} from '../../../redux/reducerTestsEdit';
const mapStateToProps=(state)=>{
  return {
    check:state.TestsEdit.check
  }
}

export default compose (
    connect(mapStateToProps,{
        goToQuest:setCurrentEditQuestion_TC
    }),
)
(TestCheck)
