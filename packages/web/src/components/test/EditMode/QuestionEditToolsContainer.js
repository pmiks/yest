import QuestionEditTools from "./QuestionEditTools";
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCurrentEditTestSEL,getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
import {
   addNewQuestion_TC,
   deleteQuestionThunkCreator,
   nextEditQuestion_TC,
   prevEditQuestion_TC,
   addNewAnswerAC,
   saveAllTC,
   addTicketAC,
   checkTestAC,
   publicateTC,
   selectTestEditAC
} from '../../../redux/reducerTestsEdit';

import {withAuthShow} from '../../../common/myhocs';

class QuestionEditToolsContainer extends React.Component{

SaveAll=()=>{
    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
}

onCancel=()=>{
    this.props.onCancel(this.props.list[this.props.currentQuestion]);
}

// onPublicate=()=>{
//     this.props.publicate();
// //    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
// }

render(){
   return <div>
            <QuestionEditTools
                 onSave={this.SaveAll}
                 onCancel={this.Cancel}
                 // onPublicate={this.onPublicate}
                 {...this.props}
            />
          </div>
   }

}

let mapStateToProps=(state)=>{
      return{
         ticketlist:getCurrentEditTestSEL(state),
         currentTest:getCurrentEditTestParamSEL(state),
         currentQuestion:state.TestsEdit.currentQuestionEdit,
         idTest:state.TestsEdit.idTestEdit,
         list:state.TestsEdit.listedit,
         dataIsChanged:state.TestsEdit.dataIsChanged
      }
}

export default compose(
    connect(mapStateToProps,{
       onPublicate:publicateTC,
       addTicket:addTicketAC,
       addQuest:addNewQuestion_TC,
       onNext:nextEditQuestion_TC,
       onPrev:prevEditQuestion_TC,
       addNewAnswer:addNewAnswerAC,
       deleteQuestion:deleteQuestionThunkCreator,
       saveAllQuestions:saveAllTC,
       checkTest:checkTestAC,
       selectTestEdit:selectTestEditAC
    }),
  withAuthShow,
  )
  (QuestionEditToolsContainer);
