//import React from 'react';
import QuestionItemEdit from './QuestionItemEdit';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {getCurrentEditQuestionSEL,getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
import {
        addNewQuestion_TC,
        deleteQuestionThunkCreator,
        editQuestionTC,
        checkForKHSM_AC,
        editAnswerTC,
        deleteAnswerThunkCreator,
        addNewAnswerThunkCreator,
        prevEditQuestion_TC,
        nextEditQuestion_TC,
        saveQuestionPhotoThunkCreator,
        saveAnswerPhotoThunkCreator,
        deleteAnswerPhotoThunkCreator,
        deleteQuestionPhotoThunkCreator,
} from '../../../redux/reducerTestsEdit';
import {withPreloader} from '../../../common/myhocs';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps=(state:AppStateType)=>{
      return{
        tp:getCurrentEditTestParamSEL(state),
        question:getCurrentEditQuestionSEL(state),
        list:state.Tests.list,
        idTest:state.TestsEdit.idTestEdit
      }
}


export default compose(
    connect(mapStateToProps,{
      addNewQuestion:addNewQuestion_TC,
      deleteQuestion:deleteQuestionThunkCreator,
      editQuestion:editQuestionTC,
      editAnswer:editAnswerTC,
      deleteAnswer:deleteAnswerThunkCreator,
      addNewAnswer:addNewAnswerThunkCreator,
      onPrev:prevEditQuestion_TC,
      onNext:nextEditQuestion_TC,
      saveQPhoto:saveQuestionPhotoThunkCreator,
      saveAPhoto:saveAnswerPhotoThunkCreator,
      deleteAnswerPhoto:deleteAnswerPhotoThunkCreator,
      deleteQuestionPhoto:deleteQuestionPhotoThunkCreator,
      checkForKHSM:checkForKHSM_AC
    }),
  withPreloader
  )
  (QuestionItemEdit);
