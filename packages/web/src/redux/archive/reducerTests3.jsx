import {initState} from './init/initTest.js'
import {testAPI} from '../../api/api';
import {idRandom,shuffle,uniqueArray} from '../../common/functions';

const USER_CHOISE_ANSWER="USER_CHOISE_ANSWER";
const LOAD_TEST="LOAD_TEST";
const SAVE_TEST="SAVE_TEST";
const SET_CURRENT_QUESTION='SET_CURRENT_QUESTION';
const SET_CURRENT_ANSWER='SET_CURRENT_ANSWER';
const SET_CURRENT_TEST_ID='SET_CURRENT_TEST_ID';
const CHECK_CHOICE='CHECK_CHOICE';
const TOGGLE_IS_SINCHRONIZING='TOGGLE_IS_SINCHRONIZING';
const NEXT_QUESTION='NEXT_QUESTION';
const PREV_QUESTION='PREV_QUESTION';
const GET_TESTS_LIST='GET_TESTS_LIST';
const SELECT_TEST='SELECT_TEST';
const TEST_RESULT='TEST_RESULT';
const TEST_IS_DONE='TEST_IS_DONE';

export const setCurrentQuestion_AC=(id)=>({type:SET_CURRENT_QUESTION,id:id});
export const setCurrentAnswer_AC=(id)=>({type:SET_CURRENT_ANSWER,id:id});
export const setUserChoiseAnswer_AC=()=>({type:USER_CHOISE_ANSWER});
export const loadTest_AC=(data)=>({type:LOAD_TEST,data:data});
export const getTestsList_AC=(data)=>({type:GET_TESTS_LIST,data:data});
export const checkChoise_AC=()=>({type:CHECK_CHOICE});
export const nextQuestion_AC=()=>({type:NEXT_QUESTION});
export const prevQuestionAC=()=>({type:PREV_QUESTION});
export const toggleIsSynchroAC=(isSynchro)=>({type:TOGGLE_IS_SINCHRONIZING,isSynchro:isSynchro});
export const selectTest_AC=(testid)=>({type:SELECT_TEST,testid:testid});
export const testIsDone_AC=(isDone=true)=>({type:TEST_IS_DONE,isDone:isDone});

const SET_TICKET_TEST='SET_TICKET_TEST';
export const setTicketTest_AC=(id)=>({type:SET_TICKET_TEST,id:id});

const ON_INPUT_ANSWER='ON_INPUT_ANSWER';
export const onInputAnswer_AC=(data=null,send=false)=>({type:ON_INPUT_ANSWER,data:data,send:send});

const SEND_STAT='SEND_STAT';
export const sendStat_AC=(data)=>({type:SEND_STAT,data:data});

const SET_ALL_ANSWERS='SET_ALL_ANSWERS';
export const setAllAnswers_AC=(data)=>({type:SET_ALL_ANSWERS,data:data});

const ADD_USER_RESULT_QUESTION='ADD_USER_RESULT_QUESTION';
export const addUResultQ_AC=()=>({type:ADD_USER_RESULT_QUESTION});

const GET_TEST_RESULT='GET_TEST_RESULT';
export const getTestResult_AC=(tr)=>({type:GET_TEST_RESULT,tr:tr});

const GET_ALL_TEST_RESULT='GET_ALL_TEST_RESULT';
export const getAllTestResult_AC=(atr)=>({type:GET_ALL_TEST_RESULT,atr:atr});

const DELETE_TEST_RESULT='DELETE_TEST_RESULT';
export const deleteUserResult_AC=(session)=>({type:DELETE_TEST_RESULT,session:session});

const GET_RESULT='GET_RESULT';
export const getResult_AC=(data)=>({type:GET_RESULT,data:data});

export const selectTest_TC=(idTest)=>
async (dispatch)=>{
dispatch(toggleIsSynchroAC(true));
    let response= await testAPI.getTestsList()
    if (response.status===200){
        console.log("testselected");
        dispatch(selectTest_AC(idTest));
        dispatch(loadTest_TC(idTest));
      }
    dispatch(toggleIsSynchroAC(false));
}

export const loadTest_TC=(id=0)=>
async (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.sendStat({testid:id});
  let response = await testAPI.getAllAnswers(id)
  if (response.status===200){
          dispatch(setAllAnswers_AC(response.data));
          let response2 = await testAPI.loadTest(id)
              if (response2.status===200){
                dispatch(testIsDone_AC(false));
                dispatch(loadTest_AC(response2.data));
                console.log("---------------------------------");
                console.log(response2.data);
             }
          }
  dispatch(toggleIsSynchroAC(false));
}

export const getResult_TC=(idtest)=>
async (dispatch)=>{
    dispatch(toggleIsSynchroAC(true));
    let response = await testAPI.getResult(idtest);
      if (response.status===200)   dispatch(getResult_AC(response.data));
      dispatch(toggleIsSynchroAC(false));
}

export const onInputAnswer_TC=(data=null,send=false)=>
  (dispatch)=>{
      dispatch(onInputAnswer_AC(data,send));
      dispatch(checkChoise_AC());
      if (send) {
        dispatch(setCurrentAnswer_AC(-1));
        dispatch(sendStat_AC());
        dispatch(addUResultQ_AC());
      }
}

export const getTestsList_TC=(id=0)=>
async (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  let response = await testAPI.getTestsList(id)
  if (response.status===200) dispatch(getTestsList_AC(response.data));
    dispatch(toggleIsSynchroAC(false));
}

export const deleteUserResult_TC=(session)=>
async (dispatch)=>{
  if (window.confirm("Вы уверены что хотите удалить результат теста?!")){
    dispatch(toggleIsSynchroAC(true));
     let response = await testAPI.deleteUserResult(session)
     if (response.status===200)
        dispatch(deleteUserResult_AC(session));
        dispatch(toggleIsSynchroAC(false));
    }
}

export const getTestResult_TC=(session)=>
    async (dispatch)=>{
      dispatch(toggleIsSynchroAC(true));
      let response= await testAPI.gettestresult(session)
         if (response.status===200)
              dispatch(getTestResult_AC(response.data));
              dispatch(toggleIsSynchroAC(false));
}

export const getAllTestResult_TC=(session)=>
    async (dispatch)=>{
      dispatch(toggleIsSynchroAC(true));
      let response = await testAPI.getAllTestResult()
         if (response.status===200) dispatch(getAllTestResult_AC(response.data));
      dispatch(toggleIsSynchroAC(false));
}

export const setUserChoiseAnswer_TC=(idQ,idA)=>{
return (dispatch)=>{
  dispatch(setCurrentQuestion_AC(idQ));
  dispatch(setCurrentAnswer_AC(idA));
  dispatch(setUserChoiseAnswer_AC());
  dispatch(checkChoise_AC());
  dispatch(sendStat_AC());
  dispatch(addUResultQ_AC());
  }
}

const analizeInputAnswer=(answer,rightanswer,upper=true)=>{
  if (!answer) return false
  let ans=(upper?answer.toUpperCase():answer).replace(/\s/g, '');
  let right=(upper?rightanswer.toUpperCase():rightanswer).replace(/\s/g, '');
  let rightArray=right.split("/");
  return rightArray.some(a=>a===ans)
}

const addAlterAnswer=(test,answer,add=0)=>{
    return test.map(q=>{if (q.addalter==0&&add==0) return q;
         let ansbuff=q.ans;
         let altanswer=answer.map(alt=>({id:idRandom(),img:alt.img,anstext:alt.anstext,uch:false,truth:false}));//
          ansbuff.forEach((item, i) => {
              altanswer=altanswer.filter(a=>(a.anstext+a.img).toUpperCase().replace(/\s/g, '')!=(item.anstext+item.img).toUpperCase().replace(/\s/g, ''))
          });
         return {...q, ans:q.ans.concat(shuffle(altanswer,q.addalter+add+1-q.ans.length))}
       })

}


export const reducerTests=(state=initState,action)=>{
  switch (action.type) {
      case SET_CURRENT_QUESTION:
        return {...state, questionID:action.id,currentQuestion:state.list.findIndex((q,i)=>q.id==action.id)}
      case SET_CURRENT_ANSWER:
        return {...state, answerID:action.id,currentAnswer:state.list[state.currentQuestion].ans.findIndex((q,i)=>q.id==action.id) }
      case TEST_RESULT:
        return{...state,
            testresult:{...state.testresult,
            allIsChecked:!state.list.some(id=>(!id.ans.some(ida=>ida.uch))),
            isDoneTest:false
          }
        }
      case TEST_IS_DONE:
        console.log(action.isDone);
        if (action.isDone) testAPI.testdone(state.testresult.sessionID);
          return{...state,
            testresult:{...state.testresult,//sessionID:state.sessionID,
                          isDoneTest:action.isDone
                       }
          }
      case CHECK_CHOICE:
        let listnew=state.list.map(q=>({...q,isChecked:q.istextanswer?q.isChecked:q.ans.some(ida=>ida.uch),win:q.istextanswer?q.win:!q.ans.some(a=>a.truth!==a.uch)}))
        return {...state,
              testresult:{...state.testresult,allIsChecked:!listnew.some(a=>!a.isChecked)},
    //           allIsChecked:!listnew.some(a=>!a.isChecked),
               list:listnew
           }
      case LOAD_TEST:
        let cT=state.testslist[state.currTest];
        let addAnsw=addAlterAnswer(action.data,state.allAnswers,cT.addalter);
        let shuffleTest=cT.shuffleQuestion?shuffle(addAnsw,cT.limit_quest):addAnsw;
        return {...state,
           list:shuffleTest.map((q,i)=>{
             return{...q,num:i+1,inputAnswer:"",ans:(cT.shuffleAnswer&&!state.editMode?shuffle(q.ans):q.ans).map((a,j)=>{return{...a,score:a.truth?1:(a.score?a.score:0),num:j+1}})}}),
           currentQuestion:shuffleTest.length>0?0:-1,
           questionID:shuffleTest.length>0?shuffleTest[0].id:null,
    //questionID:state.list[cQ1].id
           currentAnswer:-1,
           testresult:{...state.testresult,testname:cT.testname,testcover:cT.coverimg,allIsChecked:false}
         }
      case SELECT_TEST:
          return {...state,
              idTest:action.testid,
              currTest:state.testslist.findIndex((q,i)=>q.id==action.testid),
              testresult:{
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
        list:state.list.map( (q,i) =>{
          if(state.currentQuestion===i) {
             return {...q,question:q.question,
                       ans:q.ans.map((a,i)=>{if(state.currentAnswer==i){return {...a,uch:true} } if (state.multichoise) {return a} return  {...a,uch:false}  })
                    }
              }
             return q })
            };
        return newState
      case ON_INPUT_ANSWER:
          return {...state,
              list:state.list.map((q,i)=>i===state.currentQuestion?
                     {...q,isChecked:action.send,win:action.send?analizeInputAnswer(q.inputAnswer,q.textanswer):false,inputAnswer:action.data!=null?action.data:q.inputAnswer}
                     :q)
          }
      case SET_TICKET_TEST:
          let cTik=state.testslist[state.currTest].tickets.findIndex(t=>t.id==action.id)
          return {...state,
              currentTicket:action.id,
              list:state.list.filter(l=>state.testslist[state.currTest].tickets[cTik].questions.some(t=>t==l.id)),
              testslist:state.testslist.map((t,i)=>i==state.currTest?{...t,tickets:[]}:t)
          }
      case SEND_STAT:
          let cQm=state.list[state.currentQuestion];
          if (cQm.isChecked&&cQm.id>0) {
               testAPI.sendStat({questionid:state.questionID});
              if (cQm.istextanswer&&cQm.win)  testAPI.sendStat({inputid:state.questionID})
              if (!cQm.istextanswer)  testAPI.sendStat({answerid:state.answerID})
              }
          return state;
      case GET_TEST_RESULT:
          return{...state,
                    testresult:action.tr
                }
      case GET_ALL_TEST_RESULT:
          return{...state,
                  alltestresult:action.atr
                }
      case ADD_USER_RESULT_QUESTION:
        let currQ=state.list[state.currentQuestion]
        let ra=currQ.ans.filter(a=>a.truth)
        console.log(ra);
        console.log(currQ);
        let resQ={
          idtest:state.idTest,
          idquestion:state.questionID,
          idanswer:state.answerID,
          idticket:state.currentTicket,
          inputtext:currQ.inputAnswer,
          time_session:"",
          result:currQ.win,
          session:state.testresult.sessionID,
          score:state.currentAnswer>-1?currQ.ans[state.currentAnswer].score:(currQ.win?1:0),
          resFill:state.currentAnswer!=-1?{imgQ:currQ.img,question:currQ.question,
                     imgAR:ra[0]?ra[0].img:null,
                     anstextR:ra[0]?ra[0].anstext:null,
                     imgAU:currQ.ans[state.currentAnswer].img,
                     anstextU:currQ.ans[state.currentAnswer].anstext,
                     statT:currQ.selectcounter,
                     statU:currQ.ans[state.currentAnswer].selectcounter,
                     statR:ra[0]?ra[0].selectcounter:null
                   }:
                  {imgQ:currQ.img,question:currQ.question,imgAR:null,anstextR:(currQ.textanswer.split('/'))[0],imgAU:null,anstextU:currQ.inputAnswer,
                      statT:currQ.selectcounter,
                      statU:currQ.selectcounter-currQ.answerinputcounter,
                      statR:currQ.answerinputcounter
                      }
        };
        console.log(resQ);
        testAPI.sendUResultQ(resQ);
        return { ...state,
          testresult:{...state.testresult,id:state.idTest,resquestion:[...state.testresult.resquestion,resQ]}
        }
      case GET_RESULT:
          return {...state,result:action.data}
      case DELETE_TEST_RESULT:
          return {...state
                  ,alltestresult:state.alltestresult.filter(tr=>tr.session!=action.session)
                 }
      case SET_ALL_ANSWERS:
          return {...state,allAnswers:action.data}
      case SET_CURRENT_TEST_ID:
          return {...state,idTest:action.id}
      default:return state;
    }

}
