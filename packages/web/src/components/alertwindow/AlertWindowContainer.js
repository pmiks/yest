import AlertWindow from './AlertWindow';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {showAlertWindowAC} from '../../redux/reducerTestsEdit';


const mapStateToProps=(state)=>{
  return {
    showWindow:state.TestsEdit.flugShowAlertWindow,
    message:state.TestsEdit.messageAlertWindow,
    error:state.TestsEdit.errorAlertWindow
  }
}

export default compose (
    connect(mapStateToProps,{
     showAlertWindow:showAlertWindowAC,
    })
)
(AlertWindow)
