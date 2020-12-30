import NavPanel from './NavPanel';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {testIsDone_AC,
        nextQuestion_AC,prevQuestionAC} from '../../redux/reducerTests';
import {getCurrentTestParamSEL} from '../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
    tp:getCurrentTestParamSEL(state),
    allIsChecked:state.Tests.allIsChecked
  }
}

export default compose (
    connect(mapStateToProps,{
      onNext:nextQuestion_AC,
      onPrev:prevQuestionAC,
      testIsDone:testIsDone_AC,
    })
)
(NavPanel)
