import Tickets from './TicketTest';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setTicketTest_AC} from '../../redux/reducerTests';
import {getTicketListSEL} from '../../redux/test-selectors';
import { AppStateType } from '../../redux/redux-store';
import { ITicket } from '../../redux/interface';

type TypeStateProps={
  ticketlist:Array<ITicket>|null
}

type TypeDispatchProps={
  setTicketTest:(id:number)=>void
}

type TypeProps={}

const mapStateToProps=(state:AppStateType):TypeStateProps=>{
  return {
      ticketlist:getTicketListSEL(state),
  }
}

export default compose (
    connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>(mapStateToProps,{
    setTicketTest:setTicketTest_AC
    }),
)
(Tickets)
