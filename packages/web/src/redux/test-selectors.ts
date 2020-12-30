import { AppStateType } from "./redux-store";
import { ITest, IQuestion, ITicket, IUserResult, IAnswer } from "./interface";

export const getCurrentEditTestParamSEL=(state:AppStateType):ITest|null=>{
  if(state.TestsEdit.testslistforedit){
  let id=state.TestsEdit.idTestEdit;
  let curTest=state.TestsEdit.testslistforedit.filter(t=>t.id===id);
  return curTest.length===1?curTest[0]:null;
} else return null;
}


export const getCurrentEditTestTypeIdParamSEL=(state:AppStateType):number=>{
  if(state.TestsEdit.testslistforedit){
  let id=state.TestsEdit.idTestEdit;
  let curTest=state.TestsEdit.testslistforedit.filter(t=>t.id===id);
  return curTest.length===1?curTest[0].typeid:-1;
} else return -1;
}


export const getCurrentEditTestSEL=(state:AppStateType):ITest|null=>{
  if(state.TestsEdit.testslistforedit){
  let id=state.TestsEdit.idTestEdit;
  return state.TestsEdit.testslistforedit.filter(t=>t.id===id)[0];
} else return null;
}

export const getCurrentEditQuestionSEL=(state:AppStateType):IQuestion|null=>{
  if(state.TestsEdit.listedit&&state.TestsEdit.currentQuestionEdit>-1){
    return state.TestsEdit.listedit[state.TestsEdit.currentQuestionEdit];
  } else return null;
}

export const getTicketEditListSEL=(state:AppStateType):Array<ITicket>|null=>{
//  debugger;
if(state.TestsEdit.testslistforedit&&state.TestsEdit.currTestEdit>-1){
  return state.TestsEdit.testslistforedit[state.TestsEdit.currTestEdit].tickets;
} else return null;
}







export const getCurrentTestParamSEL=(state:AppStateType):ITest|null=>{
  if(state.Tests.testslist){
  let id=state.Tests.idTest;
  let curTest=state.Tests.testslist.filter(t=>t.id===id);
  return curTest.length===1?curTest[0]:null;
} else return null;
}


export const getCurrentTestSEL=(state:AppStateType):ITest|null=>{
  if(state.Tests.testslist){
  let id=state.Tests.idTest;
  return state.Tests.testslist.filter(t=>t.id===id)[0];
} else return null;
}




export const getTicketListSEL=(state:AppStateType):Array<ITicket>|null=>{
if(state.Tests.testslist&&state.Tests.currTest>-1&&state.Tests.testslist[state.Tests.currTest].tickets){
  return state.Tests.testslist[state.Tests.currTest].tickets;
} else return null;
}


export const getCurrentQuestionSEL=(state:AppStateType):IQuestion|null=>{
  if(state.Tests.list&&state.Tests.currentQuestion>-1){
    return state.Tests.list[state.Tests.currentQuestion];
  } else return null;
}

export const getTestResultSEL=(state:AppStateType):IUserResult=>{
    return state.Tests.testresult;
}

export const getCurrentAnswerSEL=(state:AppStateType):IAnswer|null=>{
  if(state.Tests.list&&state.Tests.currentQuestion>-1){
     if (state.Tests.currentAnswer>-1) return state.Tests.list[state.Tests.currentQuestion].ans[state.Tests.currentAnswer];
  }
  return null;
}

export const getRightAnswerSEL=(state:AppStateType):IAnswer|null=>{
  if(state.Tests.list&&state.Tests.currentQuestion>-1){
     if (state.Tests.list[state.Tests.currentQuestion].ans.length>0) return state.Tests.list[state.Tests.currentQuestion].ans.filter((a)=>a.truth)[0];
  }
  return null;
}
