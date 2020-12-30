import {initState} from './init/initTest'
import {testAPI} from '../api/api';
import {idRandom,shuffle} from '../common/functions';
import {Dispatch} from 'redux'
import {IQuestion,IAnswer,ITest,IResult,IUserResult, IResUserResult, ITestState, ITicket} from './interface';
import { AppStateType } from './redux-store';



const USER_CHOISE_ANSWER="USER_CHOISE_ANSWER";
const LOAD_TEST="LOAD_TEST";

const SET_CURRENT_QUESTION='SET_CURRENT_QUESTION';
const SET_CURRENT_ANSWER='SET_CURRENT_ANSWER';

const CHECK_CHOICE='CHECK_CHOICE';

const TOGGLE_IS_SINCHRONIZING='TOGGLE_IS_SINCHRONIZING';

const NEXT_QUESTION='NEXT_QUESTION';
const PREV_QUESTION='PREV_QUESTION';

const GET_TESTS_LIST='GET_TESTS_LIST';
const SELECT_TEST='SELECT_TEST';

//const TEST_RESULT='TEST_RESULT';
const TEST_IS_DONE='TEST_IS_DONE';

type ATSetCurentQuestion={type:typeof SET_CURRENT_QUESTION; id:number}
export const setCurrentQuestion_AC=(id:number):ATSetCurentQuestion=>({type:SET_CURRENT_QUESTION,id:id});

type ATSetCurrentAnswer={type:typeof SET_CURRENT_ANSWER; id:number}
export const setCurrentAnswer_AC=(id:number):ATSetCurrentAnswer=>({type:SET_CURRENT_ANSWER,id:id});

type ATSetUserChoiseAnswer={type:typeof USER_CHOISE_ANSWER}
export const setUserChoiseAnswer_AC=():ATSetUserChoiseAnswer=>({type:USER_CHOISE_ANSWER});

type ATLoadTest={type:typeof LOAD_TEST; data:IQuestion[]}
export const loadTest_AC=(data:IQuestion[]):ATLoadTest=>({type:LOAD_TEST,data:data});

type ATGetTestsList={type:typeof GET_TESTS_LIST; data:ITest[]}
export const getTestsList_AC=(data:ITest[]):ATGetTestsList=>({type:GET_TESTS_LIST,data:data});

type ATCheckChoise={type:typeof CHECK_CHOICE}
export const checkChoise_AC=():ATCheckChoise=>({type:CHECK_CHOICE});

type ATNextQuestion={type:typeof NEXT_QUESTION}
export const nextQuestion_AC=():ATNextQuestion=>({type:NEXT_QUESTION});

type ATPrevQuestion={type:typeof PREV_QUESTION}
export const prevQuestionAC=():ATPrevQuestion=>({type:PREV_QUESTION});

type ATToggleIsSynchro={type:typeof TOGGLE_IS_SINCHRONIZING;isSynchro:boolean}
export const toggleIsSynchroAC=(isSynchro:boolean):ATToggleIsSynchro=>({type:TOGGLE_IS_SINCHRONIZING,isSynchro:isSynchro});

type ATSelectTest={type:typeof SELECT_TEST;testid:number}
export const selectTest_AC=(testid:number):ATSelectTest=>({type:SELECT_TEST,testid:testid});

type ATTestIsDone={type:typeof TEST_IS_DONE;isDone:boolean|undefined}
export const testIsDone_AC=(isDone:boolean|undefined=undefined):ATTestIsDone=>({type:TEST_IS_DONE,isDone:isDone});

const SET_TICKET_TEST='SET_TICKET_TEST';
type ATSetTicketTest={type:typeof SET_TICKET_TEST;id:number}
export const setTicketTest_AC=(id:number):ATSetTicketTest=>({type:SET_TICKET_TEST,id:id});

const ON_INPUT_ANSWER='ON_INPUT_ANSWER';
type ATOnInputAnswer={type:typeof ON_INPUT_ANSWER;data:string|null;send:boolean}
export const onInputAnswer_AC=(data:string|null=null,send:boolean=false):ATOnInputAnswer=>({type:ON_INPUT_ANSWER,data:data,send:send});

const SEND_STAT='SEND_STAT';
// type ATSendStat={type:typeof SEND_STAT;data:any[]}
// export const sendStat_AC=(data:any[]):ATSendStat=>({type:SEND_STAT,data:data});
 type ATSendStat={type:typeof SEND_STAT}
 export const sendStat_AC=():ATSendStat=>({type:SEND_STAT});


const SET_ALL_ANSWERS='SET_ALL_ANSWERS';
type ATSetAllAnswers={type:typeof SET_ALL_ANSWERS;data:IAnswer[]}
export const setAllAnswers_AC=(data:IAnswer[]):ATSetAllAnswers=>({type:SET_ALL_ANSWERS,data:data});

const ADD_USER_RESULT_QUESTION='ADD_USER_RESULT_QUESTION';
type ATAddUResultQ={type:typeof ADD_USER_RESULT_QUESTION}
export const addUResultQ_AC=():ATAddUResultQ=>({type:ADD_USER_RESULT_QUESTION});

const GET_TEST_RESULT='GET_TEST_RESULT';
type ATGetTestResult={type:typeof GET_TEST_RESULT;tr:IUserResult}
export const getTestResult_AC=(tr:IUserResult):ATGetTestResult=>({type:GET_TEST_RESULT,tr:tr});

const GET_ALL_TEST_RESULT='GET_ALL_TEST_RESULT';
type ATGetAllTestResult={type:typeof GET_ALL_TEST_RESULT;atr:IResult[]}
export const getAllTestResult_AC=(atr:IResult[]):ATGetAllTestResult=>({type:GET_ALL_TEST_RESULT,atr:atr});

const DELETE_TEST_RESULT='DELETE_TEST_RESULT';
type ATDeleteUserResult={type:typeof DELETE_TEST_RESULT;session:string}
export const deleteUserResult_AC=(session:string):ATDeleteUserResult=>({type:DELETE_TEST_RESULT,session:session});

const GET_RESULT='GET_RESULT';
type ATGetResult={type:typeof GET_RESULT;data:IResult[]}
export const getResult_AC=(data:IResult[]):ATGetResult=>({type:GET_RESULT,data:data});

type ATForReducerTests =
      ATGetResult|ATDeleteUserResult|ATGetAllTestResult|ATGetTestResult|ATAddUResultQ|ATSetAllAnswers|
      ATSendStat|ATOnInputAnswer|ATSetTicketTest|ATTestIsDone|ATSelectTest|ATToggleIsSynchro|ATPrevQuestion|ATNextQuestion
      |ATCheckChoise|ATGetTestsList|ATLoadTest|ATSetUserChoiseAnswer|ATSetCurrentAnswer|ATSetCurentQuestion|AThFiftyFifty
      |AThWrong|AThPhoneCall|AThReplace


const HELP_FIFITY_FIFTY="HELP_FIFITY_FIFTY";
type AThFiftyFifty={type:typeof HELP_FIFITY_FIFTY}
export const h_FiftyFifty_AC=():AThFiftyFifty=>({type:HELP_FIFITY_FIFTY})

const HELP_WRONG="HELP_WRONG";
type AThWrong={type:typeof HELP_WRONG}
export const h_Wrong_AC=():AThWrong=>({type:HELP_WRONG})

const HELP_PHONE_CALL="HELP_PHONE_CALL";
type AThPhoneCall={type:typeof HELP_PHONE_CALL}
export const h_PhoneCall_AC=():AThPhoneCall=>({type:HELP_PHONE_CALL})

const HELP_REPLACE="HELP_REPLACE";
type AThReplace={type:typeof HELP_REPLACE}
export const h_Replace_AC=():AThReplace=>({type:HELP_REPLACE})


// export const selectTest_TC=(idTest:number)=>
// async (dispatch:any)=>{
// dispatch(toggleIsSynchroAC(true));
//     let response= await testAPI.getTestsList()
//     if (response.status===200){
// //        console.log("testselected");
//         dispatch(selectTest_AC(idTest));
//         dispatch(loadTest_TC(idTest));
//       }
//     dispatch(toggleIsSynchroAC(false));
// }


export const loadTest_TC=(id=0)=>
async (dispatch:Dispatch<ATForReducerTests>,getState:()=>AppStateType)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.sendStat({testid:id});
  let response = await testAPI.getAllAnswers(id)
  if (response.status===200){
          dispatch(setAllAnswers_AC(response.data));
          let test=getState().Tests.testslist.find((t)=>t.id===id)
          let hl=""
          if (id==17) {hl="5,6,6"}
          //@ts-ignore
          let response2 = await testAPI.loadTestHL(id,(id==17?test.limit_quest+4:test.limit_quest),test.shuffleQuestion,hl)
              if (response2.status===200){
                //dispatch(testIsDone_AC(false));
                dispatch(selectTest_AC(id));//Добавленно после рефакторинга
                dispatch(loadTest_AC(response2.data));
             }
          }
  dispatch(toggleIsSynchroAC(false));
}





export const getResult_TC=(idtest:number)=>
async (dispatch:Dispatch<ATForReducerTests>)=>{
    dispatch(toggleIsSynchroAC(true));
    let response = await testAPI.getResult(idtest);
      if (response.status===200)   dispatch(getResult_AC(response.data));
      dispatch(toggleIsSynchroAC(false));
}

export const onInputAnswer_TC=(data:string|null=null,send:boolean=false)=>
  (dispatch:Dispatch<ATForReducerTests>)=>{
      dispatch(onInputAnswer_AC(data,send));
      dispatch(checkChoise_AC());
      if (send) {
        dispatch(setCurrentAnswer_AC(-1));
        dispatch(sendStat_AC());
        dispatch(addUResultQ_AC());
      }
}

export const getTestsList_TC=(find:string|null=null)=>
async (dispatch:Dispatch<ATForReducerTests>)=>{
  //alert(find);
//  console.log(find);
//  console.log("Nhfnfnfnfnf");
  dispatch(toggleIsSynchroAC(true));
  let response = await testAPI.getTestsList(find,"selectcounter DESC")
  if (response.status===200) dispatch(getTestsList_AC(response.data));
    dispatch(toggleIsSynchroAC(false));
}


export const deleteUserResult_TC=(session:string)=>
async (dispatch:Dispatch<ATForReducerTests>)=>{
  if (window.confirm("Вы уверены что хотите удалить результат теста?!")){
    dispatch(toggleIsSynchroAC(true));
     let response = await testAPI.deleteUserResult(session)
     if (response.status===200)
        dispatch(deleteUserResult_AC(session));
        dispatch(toggleIsSynchroAC(false));
    }
}


export const getTestResult_TC=(session:string)=>
async (dispatch:Dispatch<ATForReducerTests>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response= await testAPI.gettestresult(session)
     if (response.status===200)
          dispatch(getTestResult_AC(response.data));
          dispatch(toggleIsSynchroAC(false));
}


export const getAllTestResult_TC=()=>
async (dispatch:Dispatch<ATForReducerTests>)=>{
  dispatch(toggleIsSynchroAC(true));
  console.log("getAllTestResult_TC");

  let response = await testAPI.getAllTestResult()
     if (response.status===200) dispatch(getAllTestResult_AC(response.data));
     console.log(response.data);
  dispatch(toggleIsSynchroAC(false));
}

export const setUserChoiseAnswer_TC=(idQ:number,idA:number)=>{
return (dispatch:Dispatch<ATForReducerTests>,getState:()=>AppStateType)=>{
  dispatch(setCurrentQuestion_AC(idQ));
  dispatch(setCurrentAnswer_AC(idA));
  let t=getState().Tests
  if (t.list[t.currentQuestion].ans[t.currentAnswer].nonactiv) return
  dispatch(setUserChoiseAnswer_AC());
  dispatch(checkChoise_AC());
  dispatch(sendStat_AC());
  dispatch(addUResultQ_AC());
  }
}

const analizeInputAnswer=(answer:string,rightanswer:string,upper:boolean=true):boolean=>{
  if (!answer) return false
  let ans=(upper?answer.toUpperCase():answer).replace(/\s/g, '');
  let right=(upper?rightanswer.toUpperCase():rightanswer).replace(/\s/g, '');
  let rightArray=right.split("/");
  return rightArray.some(a=>a===ans)
}



const addAlterAnswer=(test:IQuestion[],answer:IAnswer[],add:number=0)=>{
    return test.map((q:any)=>{if (q.addalter===0&&add===0) return q;
         let ansbuff=q.ans;
         let altanswer=answer.map((alt:IAnswer)=>({id:idRandom(),img:alt.img,anstext:alt.anstext,uch:false,truth:false}));//
          ansbuff.forEach((item:IAnswer) => {
              altanswer=altanswer.filter(a=>(a.anstext+a.img).toUpperCase().replace(/\s/g, '')!==(item.anstext+item.img).toUpperCase().replace(/\s/g, ''))
          });

         return {...q, ans:q.ans.concat(shuffle(altanswer,q.addalter+add+1-q.ans.length))}
       })

}

const getRandomInt=(max:number,except:number):number=> {
  let n=Math.floor(Math.random() * Math.floor(max));
  return n!==except?n:getRandomInt(max,except)
}

const sayPhone=["Я не уверен..., но мне кажеться что это: ","Думаю что это: ","Я бы выбрал вариант: ","Я считаю что правильный ответ: "];

export const reducerTests=(state:ITestState=initState,action:ATForReducerTests):ITestState=>{
  switch (action.type) {
  case SET_CURRENT_QUESTION:
    return {...state, questionID:action.id,currentQuestion:state.list.findIndex((q:IQuestion)=>q.id===action.id)}
  case SET_CURRENT_ANSWER:
    return {...state, answerID:action.id,currentAnswer:state.list[state.currentQuestion].ans.findIndex((q:IAnswer)=>q.id==action.id) }

  // case TEST_RESULT:
  //   return{...state,
  //     testresult:{...state.testresult,
  //        allIsChecked:!state.list.some(id=>(!id.ans.some(ida=>ida.uch))),
  //        isDoneTest:false
  //     }
  //   }
    case TEST_IS_DONE:
    let done=action.isDone
    if (done==undefined) done=state.testresult.allIsChecked||(state.testslist[state.currTest].endOnWrong&&!state.list[state.currentQuestion].win)
    if (done) testAPI.testdone(state.testresult.sessionID);
    if (state.testresult.isDoneTest===done) return state;
      return{...state,
        testresult:{...state.testresult,isDoneTest:done}
      }

  case CHECK_CHOICE:
    debugger;
    let listnew=state.list.map((q:IQuestion)=>({...q,
      isChecked:q.istextanswer?q.isChecked:q.ans.some((ida:IAnswer)=>ida.uch), win:q.istextanswer?q.win:!q.ans.some((a:IAnswer)=>a.truth!==a.uch)}))
    let wt=state.wrongattempt
    if (wt>0){
        if (!listnew[state.currentQuestion].win) {
            listnew[state.currentQuestion].isChecked=false;
            listnew[state.currentQuestion].ans[state.currentAnswer].uch=false;
            listnew[state.currentQuestion].ans[state.currentAnswer].nonactiv=true
          }
        wt=wt-1;
    }
    return {...state,
          testresult:{...state.testresult,allIsChecked:!listnew.some((a:IQuestion)=>!a.isChecked)},
//           allIsChecked:!listnew.some(a=>!a.isChecked),
          list:listnew,
          wrongattempt:wt,
          showprompt:""
       }
  case LOAD_TEST:

    let reserv=[]
    let mainQ=action.data;
    let cT=state.testslist[state.currTest];
   if (cT.id==17){
//      {hl="5,6,6"}
       reserv.push(action.data[4]);
       reserv.push(action.data[10]);
       reserv.push(action.data[16]);
       reserv.push(action.data[18]);
       mainQ.splice(18,1);
       mainQ.splice(16,1);
       mainQ.splice(10,1);
       mainQ.splice(4,1);
    }
    let addAnsw=addAlterAnswer(mainQ,state.allAnswers,cT.addalter);
    //let shuffleTest=cT.shuffleQuestion?shuffle(addAnsw,cT.limit_quest):addAnsw;
    //let shuffleTest=cT.shuffleQuestion?shuffle(addAnsw,0):addAnsw;
    let shuffleTest=addAnsw;
    return {...state,
       list:shuffleTest.map((q:IQuestion,i:number)=>{
         return{...q,num:i+1,inputAnswer:"",ans:(cT.shuffleAnswer?shuffle(q.ans):q.ans).map((a:IAnswer,j:number)=>{return{...a,score:a.truth?1:(a.score?a.score:0),num:j+1}})}}),
       currentQuestion:shuffleTest.length>0?0:-1,
       questionID:shuffleTest.length>0?shuffleTest[0].id:null,
       reservlist:reserv,
//questionID:state.list[cQ1].id
       currentAnswer:-1,
       testresult:{...state.testresult,testname:cT.testname,testcover:cT.coverimg,hashtag:cT.hashtag,discription:cT.discription?cT.discription:"",allIsChecked:false, isDoneTest:false}
     }
  case SELECT_TEST:
      return {...state,
          idTest:action.testid,
          currTest:state.testslist.findIndex((q:ITest)=>q.id==action.testid),
          testresult:{
            ...state.testresult,
            allIsChecked:false,
            isDoneTest:false,
            sessionID:"T"+action.testid+"t"+Date.now()+"r"+Math.abs(idRandom()),
            resquestion:[]
          }
        }
  case GET_TESTS_LIST:
       return {...state,
          idTest:-1,
          list:[],
          testslist:[...action.data],
        }
  case TOGGLE_IS_SINCHRONIZING:
    if (state.isSynchronizing===action.isSynchro) return state;
    return {...state,
      isSynchronizing:action.isSynchro}
  case NEXT_QUESTION:
    let cQ1=state.currentQuestion==state.list.length-1?state.currentQuestion:state.currentQuestion+1;
    return {...state,
      currentQuestion:cQ1,
      questionID:state.list[cQ1].id
    }

  case PREV_QUESTION:
    let cQ2=state.currentQuestion==0?0:state.currentQuestion-1;
    return {...state,
      currentQuestion:cQ2,
      questionID:state.list[cQ2].id
    }
  case USER_CHOISE_ANSWER:
    let newState={...state,
    list:state.list.map( (q:IQuestion,j:number) =>{
      if(state.currentQuestion===j) {
         return {...q,question:q.question,
                   ans:q.ans.map((a:IAnswer,i:number)=>{if(state.currentAnswer==i){return {...a,uch:true} } return  {...a,uch:false}  })
                }
          }
         return q })
        };
    return newState
    case ON_INPUT_ANSWER:
      console.log(action.data);
      console.log(action.send);
      return {...state,
          list:state.list.map((q:IQuestion,i:number)=>i===state.currentQuestion?
                 {...q,isChecked:action.send,win:action.send?analizeInputAnswer(q.inputAnswer,q.textanswer):false,inputAnswer:action.data!=null?action.data:q.inputAnswer}
                 :q)
      }
    case SET_TICKET_TEST:
      // if (!state.currTest) return state;
      // if (!state.testslist[state.currTest]) return state;
      // if (state.testslist[state.currTest].tickets) return state;
      //@ts-ignore
      let cTik=state.testslist[state.currTest].tickets.findIndex((t:ITicket)=>t.id==action.id)
      return {...state,
          currentTicket:action.id,
          //@ts-ignore
          list:state.list.filter((l:IQuestion)=>state.testslist[state.currTest].tickets[cTik].questions.some((t:number)=>t==l.id)).map((q:IQuestion,i:number)=>({...q, num:i+1})),
          testslist:state.testslist.map((t:ITest,i:number)=>i==state.currTest?{...t,tickets:[]}:t)
      }
    case SEND_STAT:
      let cQm=state.list[state.currentQuestion];
      if (cQm.isChecked&&cQm.id>0) {
           testAPI.sendStat({questionid:state.questionID});
          if (cQm.istextanswer&&cQm.win)  testAPI.sendStat({inputid:state.questionID})
          if (!cQm.istextanswer)  testAPI.sendStat({answerid:state.answerID})
          }
      return state;
    case GET_TEST_RESULT:return{...state,
      testresult:action.tr
    }
     case GET_ALL_TEST_RESULT:return{...state,
       alltestresult:action.atr,
     }
    case ADD_USER_RESULT_QUESTION:
    let currQ:IQuestion=state.list[state.currentQuestion]
    let ra=currQ.ans.filter((a:IAnswer)=>a.truth)
    console.log(ra);
    console.log(currQ);
    let resQ:IResUserResult={
      idtest:state.idTest,
      idquestion:state.questionID,
      idanswer:state.answerID,
      idticket:state.currentTicket,
      inputtext:currQ.inputAnswer,
      time_session:0,
      result:currQ.win,
      session:state.testresult.sessionID,
      score:state.currentAnswer>-1?currQ.ans[state.currentAnswer].score:(currQ.win?1:0),
      resFill:state.currentAnswer!=-1?{
                 imgQ:currQ.img,
                 question:currQ.question,
                 imgAR:ra[0]?ra[0].img:"",
                 anstextR:ra[0]?ra[0].anstext:"",
                 imgAU:currQ.ans[state.currentAnswer].img,
                 anstextU:currQ.ans[state.currentAnswer].anstext,
                 statT:currQ.selectcounter,
                 statU:currQ.ans[state.currentAnswer].selectcounter,
                 statR:ra[0]?ra[0].selectcounter:0
               }:
              {imgQ:currQ.img,question:currQ.question,imgAR:"",anstextR:(currQ.textanswer.split('/'))[0],imgAU:"",anstextU:currQ.inputAnswer,
                  statT:currQ.selectcounter,
                  statU:currQ.selectcounter-currQ.answerinputcounter,
                  statR:currQ.answerinputcounter
                  }
    };
//    console.log(resQ);
    testAPI.sendUResultQ(resQ);
    return { ...state,
      testresult:{...state.testresult,id:state.idTest,anscol:state.list.length,resquestion:[...state.testresult.resquestion,resQ]}
    }
    case GET_RESULT:return {...state,result:action.data}
    // case DELETE_TEST_RESULT:return {...state
    //   ,alltestresult:state.alltestresult.filter((tr:any)=>tr.session!=action.session)
    //    }
    case SET_ALL_ANSWERS:return {...state,allAnswers:action.data}
//    case SET_CURRENT_TEST_ID:return {...state,idTest:action.id}
    case HELP_FIFITY_FIFTY:
    let stay=getRandomInt(3,state.list[state.currentQuestion].ans.findIndex((t)=>t.truth));
    return{...state,
      list:state.list.map((q:IQuestion,i)=>state.currentQuestion==i?{...q,ans:q.ans.map((a,i)=>a.truth||stay==i?a:{...a,nonactiv:true})}:q)
    }
    case HELP_WRONG:return{...state,wrongattempt:1}
    case HELP_REPLACE:return{...state,list:state.list.map((q:IQuestion,i)=>state.currentQuestion==i?state.reservlist[q.hardlevel-1]:q)}
    case HELP_PHONE_CALL:
      let showvar=getRandomInt(10,11);
      showvar=showvar>3?state.list[state.currentQuestion].ans.findIndex((t)=>t.truth):showvar;
    return{...state,showprompt:sayPhone[getRandomInt(sayPhone.length-1,sayPhone.length)]+'"'+state.list[state.currentQuestion].ans[showvar].anstext+'"'}
  default:return state;

    }
}
