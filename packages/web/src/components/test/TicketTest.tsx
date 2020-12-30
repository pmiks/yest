import React, { FC } from 'react';
import './TicketTest.css';
import { ITicket } from '../../redux/interface';

type TTickets={
  ticketlist:Array<ITicket>|null
  setTicketTest:(id:number)=>void
}

const Tickets:FC<TTickets>=({ticketlist,setTicketTest})=>{

  return <div className="TicketsListDefault">
          {ticketlist&&ticketlist.map((tl:ITicket,key:number)=>{
                return <div className="TicketsListItem" onClick={()=>{setTicketTest(tl.id)}} key={key}> <div>{tl.ticketname}</div>  </div>})}
          </div>
  }


export default Tickets;
