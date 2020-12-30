import TicketsEdit from './TicketTestEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../common/myhocs';
import {editTicketAC,
        setCurrentEditQuestion_TC,
        addTicketAC,
        addQuestionToTicket_TC,
        deleteTicketAC} from '../../../redux/reducerTestsEdit';
import {
   getTicketEditListSEL,
   getCurrentEditQuestionSEL,
   getCurrentEditTestSEL,
} from '../../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
      ticketlist:getTicketEditListSEL(state),
      currentQuestion:getCurrentEditQuestionSEL(state),
      currentTest:getCurrentEditTestSEL(state),
  }
}

export default compose (
    connect(mapStateToProps,{
      addTicket:addTicketAC,
      addQuestionToTicket:addQuestionToTicket_TC,
      deleteTicket:deleteTicketAC,
      editTicket:editTicketAC,
      goToQuest:setCurrentEditQuestion_TC
    }),
    withAuthRedirect
)
(TicketsEdit)
