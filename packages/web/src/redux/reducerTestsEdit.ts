import {initState, initNewTest} from './init/initTestEdit'
import {testAPI} from '../api/api';
import {toNumLimMinMax,idRandom,uniqueArray} from '../common/functions';
import {Dispatch} from 'redux'
import {IQuestion,IAnswer,ITest,IResult, ITestEditState, ITicket, ICheckList} from './interface';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SAVE_TEST="SAVE_TEST";
const SET_CURRENT_EDIT_QUESTION='SET_CURRENT_EDIT_QUESTION';
const SET_CURRENT_EDIT_ANSWER='SET_CURRENT_EDIT_ANSWER';
const SET_CURRENT_EDIT_TEST_ID='SET_CURRENT_EDIT_TEST_ID';
const ADD_NEW_QUESTION='ADD_NEW_QUESTION';
const DELETE_QUESTION='DELETE_QUESTION';
const ADD_NEW_ANSWER='ADD_NEW_ANSWER';
const DELETE_ANSWER='DELETE_ANSWER';
const EDIT_ANSWER='EDIT_ANSWER';
const TOGGLE_IS_SINCHRONIZING='TOGGLE_IS_SINCHRONIZING';
const NEXT_EDIT_QUESTION='NEXT_EDIT_QUESTION';
const PREV_EDIT_QUESTION='PREV_EDIT_QUESTION';
const SET_QUESTION_IMAGE='SET_QUESTION_IMAGE';
const SET_ANSWER_IMAGE='SET_ANSWER_IMAGE';

type ATsetCurrentEditQuestion={type:typeof SET_CURRENT_EDIT_QUESTION;id:number}
export const setCurrentEditQuestion_AC=(id:number):ATsetCurrentEditQuestion=>({type:SET_CURRENT_EDIT_QUESTION,id:id});

type ATsetCurrentEditAnswer={type:typeof SET_CURRENT_EDIT_ANSWER;id:number}
export const setCurrentEditAnswerAC=(id:number):ATsetCurrentEditAnswer=>({type:SET_CURRENT_EDIT_ANSWER,id:id});

type ATsetCurrentEditTestId={type:typeof SET_CURRENT_EDIT_TEST_ID;id:number}
export const setCurrentEditTestIdAC=(id:number):ATsetCurrentEditTestId=>({type:SET_CURRENT_EDIT_TEST_ID,id:id});

type ATaddNewQuestion={type:typeof ADD_NEW_QUESTION;id:number,text:string,img:string|null}
export const addNewQuestion_AC=(id:number,text:string,img:string|null=null):ATaddNewQuestion=>({type:ADD_NEW_QUESTION,id:id,text:text,img:img});

type ATdeleteQuestion={type:typeof DELETE_QUESTION}
export const deleteQuestionAC=():ATdeleteQuestion=>({type:DELETE_QUESTION});

const EDIT_QUESTION_='EDIT_QUESTION_';
type AT_editQuestion={type:typeof EDIT_QUESTION_;quest:IQuestion}
  export const editQuestion_AC=(quest:IQuestion):AT_editQuestion=>
        ({type:EDIT_QUESTION_,quest:quest});

type ATaddNewAnswer={type:typeof ADD_NEW_ANSWER;id:number,text:string,img:string|null,isTrue:boolean}
export const addNewAnswerAC=(id:number,text:string='Вариант',img:string|null=null,isTrue:boolean=false):ATaddNewAnswer=>({type:ADD_NEW_ANSWER,id:id,text:text,img:img,isTrue:isTrue});

type ATdeleteAnswer={type:typeof DELETE_ANSWER,id:number}
export const deleteAnswerAC=(id:number):ATdeleteAnswer=>({type:DELETE_ANSWER,id:id});

type ATeditAnswer={type:typeof EDIT_ANSWER;text:string|null,img:string|null,isTrue:boolean|null}
export const editAnswerAC=(text:string|null=null,img:string|null=null,isTrue:boolean|null=false):ATeditAnswer=>({type:EDIT_ANSWER,text:text,img:img,isTrue:isTrue});

const EDIT_ANSWER_="EDIT_ANSWER_";
type AT_editAnswer={type:typeof EDIT_ANSWER_;ans:IAnswer}
export const editAnswer_AC=(ans:IAnswer):AT_editAnswer=>({type:EDIT_ANSWER_,ans:ans});

const LOAD_TEST_EDIT="LOAD_TEST_EDIT";
type ATloadTestEdit={type:typeof LOAD_TEST_EDIT,data:IQuestion[]}
export const loadTestEditAC=(data:IQuestion[]):ATloadTestEdit=>({type:LOAD_TEST_EDIT,data:data});

const DELETE_TEST="DELETE_TEST";
type ATdeleteTest={type:typeof DELETE_TEST,id:number}
export const deleteTestAC=(id:number):ATdeleteTest=>({type:DELETE_TEST,id:id});

const ADD_NEW_TEST="ADD_NEW_TEST";
type ATaddTest={type:typeof ADD_NEW_TEST,data:ITest}
export const addTestAC=(data:ITest):ATaddTest=>({type:ADD_NEW_TEST,data:data});

const GET_TESTS_LIST_FOR_EDIT="GET_TESTS_LIST_FOR_EDIT";
type ATgetTestsListForEdit={type:typeof GET_TESTS_LIST_FOR_EDIT,data:ITest[]}
export const getTestsListForEditAC=(data:ITest[]):ATgetTestsListForEdit=>({type:GET_TESTS_LIST_FOR_EDIT,data:data});

const SET_IS_SAVED="SET_IS_SAVED";
type ATsetIsSaved={type:typeof SET_IS_SAVED}
export const setIsSavedAC=():ATsetIsSaved=>({type:SET_IS_SAVED});

type ATsaveTest={type:typeof SAVE_TEST}
export const saveTestAC=():ATsaveTest=>({type:SAVE_TEST});

type ATnextEditQuestion={type:typeof NEXT_EDIT_QUESTION}
export const nextEditQuestion_AC=():ATnextEditQuestion=>({type:NEXT_EDIT_QUESTION});

type ATprevEditQuestion={type:typeof PREV_EDIT_QUESTION}
export const prevEditQuestion_AC=():ATprevEditQuestion=>({type:PREV_EDIT_QUESTION});


type ATtoggleIsSynchro={type:typeof TOGGLE_IS_SINCHRONIZING,isSynchro:boolean}
export const toggleIsSynchroAC=(isSynchro:boolean):ATtoggleIsSynchro=>({type:TOGGLE_IS_SINCHRONIZING,isSynchro:isSynchro});

const SELECT_EDIT_TEST='SELECT_EDIT_TEST';
type ATselectTestEdit={type:typeof SELECT_EDIT_TEST,testid:number}
export const selectTestEditAC=(testid:number):ATselectTestEdit=>({type:SELECT_EDIT_TEST,testid:testid});

type ATsetQImg={type:typeof SET_QUESTION_IMAGE,filename:any}
export const setQImgAC=(filename:any):ATsetQImg=>({type:SET_QUESTION_IMAGE,filename:filename});

type ATsetAImg={type:typeof SET_ANSWER_IMAGE,filename:any}
export const setAImgAC=(filename:any):ATsetAImg=>({type:SET_ANSWER_IMAGE,filename:filename});

const SHOW_TICKET='SHOW_TICKET';
type ATshowTicketList={type:typeof SHOW_TICKET}
export const showTicketListAC=():ATshowTicketList=>({type:SHOW_TICKET});

const ADD_QUESTION_TO_TICKET='ADD_QUESTION_TO_TICKET';
type ATaddQuestionToTicket={type:typeof ADD_QUESTION_TO_TICKET,add:number,id:number}
export const addQuestionToTicket_AC=(add:number,id:number):ATaddQuestionToTicket=>({type:ADD_QUESTION_TO_TICKET,add:add,id:id});

const ADD_TICKET='ADD_TICKET';
type ATaddTicket={type:typeof ADD_TICKET,name:string}
export const addTicketAC=(name:string="ticket"):ATaddTicket=>({type:ADD_TICKET,name:name});

const DELETE_TICKET='DELETE_TICKET';
type ATdeleteTicket={type:typeof DELETE_TICKET,id:number}
export const deleteTicketAC=(id:number):ATdeleteTicket=>({type:DELETE_TICKET,id:id});

const EDIT_TICKET='EDIT_TICKET';
type ATeditTicket={type:typeof EDIT_TICKET,id:number,name:string}
export const editTicketAC=(id:number,name:string):ATeditTicket=>({type:EDIT_TICKET,id:id,name:name});

const SET_TEST_PARAM='SET_TEST_PARAM';
type ATsetTestParam={type:typeof SET_TEST_PARAM,data:ITest}
export const setTestParamAC=(data:ITest):ATsetTestParam=>({type:SET_TEST_PARAM,data:data});

const UNLOAD_FLUG_ON='UNLOAD_FLUG_ON';
type ATunloadFlugON={type:typeof UNLOAD_FLUG_ON}
export const unloadFlugON=():ATunloadFlugON=>({type:UNLOAD_FLUG_ON});

const UNLOAD_TEST='UNLOAD_TEST';
type ATunloadTest={type:typeof UNLOAD_TEST}
export const unloadTestAC=():ATunloadTest=>({type:UNLOAD_TEST});

const CHECK_TEST='CHECK_TEST';
type ATcheckTest={type:typeof CHECK_TEST}
export const checkTestAC=():ATcheckTest=>({type:CHECK_TEST});

const PUBLICATE_TEST='PUBLICATE_TEST';
type ATpublicate={type:typeof PUBLICATE_TEST}
export const publicateAC=():ATpublicate=>({type:PUBLICATE_TEST});

const SHOW_ALERT_WINDOW='SHOW_ALERT_WINDOW';
type ATshowAlertWindow={type:typeof SHOW_ALERT_WINDOW,show:boolean}
export const showAlertWindowAC=(show:boolean=false):ATshowAlertWindow=>({type:SHOW_ALERT_WINDOW,show:show});

const SET_TEST_COVER_IMG='SET_TEST_COVER_IMG';
type ATsetTestCoverImage={type:typeof SET_TEST_COVER_IMG,img:string}
export const setTestCoverImageAC=(img:string):ATsetTestCoverImage=>({type:SET_TEST_COVER_IMG,img:img});

const GET_RESULT_EDIT='GET_RESULT_EDIT';
type ATgetResultEdit={type:typeof GET_RESULT_EDIT,data:IResult[]}
export const getResultEditAC=(data:IResult[]):ATgetResultEdit=>({type:GET_RESULT_EDIT,data:data});

const SET_RESULT_ITEM='SET_RESULT_ITEM';
export type ATsetResultItem={type:typeof SET_RESULT_ITEM,data:IResult}
export const setResultItemAC=(data:IResult):ATsetResultItem=>({type:SET_RESULT_ITEM,data:data});

const ADD_RESULT_ITEM='ADD_RESULT_ITEM';
export type ATaddResultItem={type:typeof ADD_RESULT_ITEM}
export const addResultItemAC=():ATaddResultItem=>({type:ADD_RESULT_ITEM});

const DELETE_RESULT_ITEM='DELETE_RESULT_ITEM';
export type ATdeleteResultItem={type:typeof DELETE_RESULT_ITEM,id:number}
export const deleteResultItemAC=(id:number):ATdeleteResultItem=>({type:DELETE_RESULT_ITEM,id:id});

const CURRENT_QUESTION_CHECKED_TICKETS='CURRENT_QUESTION_CHECKED_TICKETS';
type ATsetCurrentQuestionCheckedTickets={type:typeof CURRENT_QUESTION_CHECKED_TICKETS}
export const setCurrentQuestionCheckedTickets_AC=():ATsetCurrentQuestionCheckedTickets=>({type:CURRENT_QUESTION_CHECKED_TICKETS});

const SET_RESULT_AS_SAVED='SET_RESULT_AS_SAVED';
type ATsetResultsAsSaved={type:typeof SET_RESULT_AS_SAVED}
export const setResultsAsSaved=():ATsetResultsAsSaved=>({type:SET_RESULT_AS_SAVED});

type ATForReducerTestsEdit =
  ATsetCurrentEditQuestion|ATsetCurrentEditAnswer|ATsetCurrentEditTestId|ATaddNewQuestion|ATdeleteQuestion|AT_editQuestion| //|ATeditQuestion
  ATaddNewAnswer|ATdeleteAnswer|ATeditAnswer|AT_editAnswer|ATloadTestEdit|ATdeleteTest|ATaddTest|ATgetTestsListForEdit|ATsetIsSaved|
  ATsaveTest|ATnextEditQuestion|ATprevEditQuestion|ATtoggleIsSynchro|ATselectTestEdit|ATsetQImg|ATsetAImg|ATshowTicketList
  |ATaddQuestionToTicket|ATaddTicket|ATdeleteTicket|ATeditTicket|ATsetTestParam|ATunloadFlugON|ATunloadTest|ATcheckTest|
  ATpublicate|ATshowAlertWindow|ATsetTestCoverImage|ATgetResultEdit|ATsetResultItem|ATaddResultItem|ATdeleteResultItem|
  ATsetResultsAsSaved|ATsetNewIdQuestion|ATsetNewIdAnswer|ATsetAsSaved|ATsetNewIdTiket|ATsetNewIdResult|ATsetCurrentQuestionCheckedTickets|ATcheckForKHSM

export const publicateTC=()=>{
  return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
    dispatch(checkTestAC());
    dispatch(publicateAC());
    }
}

export const addQuestionToTicket_TC=(add:number,id:number)=>{
  return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(addQuestionToTicket_AC(add,id))
  dispatch(setCurrentQuestionCheckedTickets_AC())
  }
}

export const setCurrentEditQuestion_TC=(id:number)=>{
  return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(setCurrentEditQuestion_AC(id))
  dispatch(setCurrentQuestionCheckedTickets_AC())
  }
}

export const nextEditQuestion_TC=()=>{
  return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(nextEditQuestion_AC())
  dispatch(setCurrentQuestionCheckedTickets_AC())
  }
}

export const prevEditQuestion_TC=()=>{
  return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(prevEditQuestion_AC())
  dispatch(setCurrentQuestionCheckedTickets_AC())
  }
}

export const selectTestEditTC=(idTest:number)=> async (dispatch:any)=>{
    dispatch(toggleIsSynchroAC(true));
    let response = await testAPI.getTestsListForEdit()
    if (response.status===200){
        dispatch(getTestsListForEditAC(response.data));
        dispatch(selectTestEditAC(idTest));
        dispatch(loadTestEditTC(idTest));
      }
    dispatch(toggleIsSynchroAC(false));
}

export const deleteAnswerPhotoThunkCreator=(idA:number)=> async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
    dispatch(toggleIsSynchroAC(true));
//    let response =
    await testAPI.deleteAnswerPhoto(idA)
     dispatch(setCurrentEditAnswerAC(idA));
     dispatch(editAnswerAC(null,""));
     dispatch(toggleIsSynchroAC(false));
}

export const deleteQuestionPhotoThunkCreator=(idQ:number)=> async (dispatch:Dispatch<ATForReducerTestsEdit>,getState:()=>AppStateType)=>{
    dispatch(toggleIsSynchroAC(true));
    await testAPI.deleteQuestionPhoto(idQ)
    dispatch(setCurrentEditQuestion_AC(idQ));
    dispatch(editQuestion_AC({...getState().TestsEdit.listedit[getState().TestsEdit.currentQuestionEdit],img:""}));
    dispatch(toggleIsSynchroAC(false));
}

export const saveTestCoverImgTC=(idT:number,file:any)=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response = await testAPI.saveTestCoverImg(idT,file)
  if (response.status===200) { dispatch(setTestCoverImageAC(response.data.filename)); }
      dispatch(toggleIsSynchroAC(false));
}

export const deleteTestCoverImgTC=(idT:number)=>  async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
    dispatch(toggleIsSynchroAC(true));
    //let response=
    await testAPI.deleteTestCoverImg(idT)
        dispatch(setTestCoverImageAC(""));
        dispatch(toggleIsSynchroAC(false));
}

export const saveAnswerPhotoThunkCreator=(idA:number,file:any)=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response = await testAPI.saveAnswerPhoto(idA,file)
  if (response.status===200) {
      dispatch(setCurrentEditAnswerAC(idA));
      dispatch(setAImgAC(response.data.filename));
    }
  dispatch(toggleIsSynchroAC(false));
}

export const saveQuestionPhotoThunkCreator=(idQ:number,file:any)=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response = await testAPI.saveQuestionPhoto(idQ,file)
  if (response.status===200) dispatch(setQImgAC(response.data.filename));
      dispatch(toggleIsSynchroAC(false));
}

export const getResultEditTC=(idtest:number)=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
    dispatch(toggleIsSynchroAC(true));
    let response=await testAPI.getResult(idtest)
      if (response.status===200) dispatch(getResultEditAC(response.data));
        dispatch(toggleIsSynchroAC(false));
}

export const deleteTestTC=(id:number)=> async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  if (window.confirm("Вы уверены что хотите удалить тест?!")){
    dispatch(toggleIsSynchroAC(true));
    let response=await testAPI.deleteTest(id)
      if (response.status===200) dispatch(deleteTestAC(id));
        dispatch(toggleIsSynchroAC(false));
    }
}

export const addTestTC=()=> async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
    dispatch(toggleIsSynchroAC(true));
    let response=await testAPI.addTest(initNewTest)
      if (response.status===200)    dispatch(addTestAC(response.data[0]));
        dispatch(toggleIsSynchroAC(false));
}

export const getTestsListForEditTC=()=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response=await testAPI.getTestsListForEdit()
    if (response.status===200) dispatch(getTestsListForEditAC(response.data));
      dispatch(toggleIsSynchroAC(false));
}

export const loadTestEditTC=(id:number=0)=>async (dispatch:any)=>{
  dispatch(toggleIsSynchroAC(true));
  let response=await testAPI.loadTest(id)
      if (response.status===200){
                dispatch(loadTestEditAC(response.data));
                dispatch(setCurrentQuestionCheckedTickets_AC())
                dispatch(getResultEditAC([]));
                dispatch(getResultEditTC(id));
              }
      dispatch(toggleIsSynchroAC(false));
}

export const addNewQuestion_TC=(text:string='Новый вопрос',img:string|null=null)=>(dispatch:Dispatch<ATForReducerTestsEdit>,getState:()=>AppStateType)=>{
            dispatch(addNewQuestion_AC(idRandom(),text,img));
            let cCT=getState().TestsEdit.currentCheckedTest;
            cCT&&cCT.map(x=>dispatch(addQuestionToTicket_AC(getState().TestsEdit.currentQuestionEdit,x)));
        }



export const deleteQuestionThunkCreator=(id:number=-1)=>async (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
  dispatch(toggleIsSynchroAC(true));
  let response= await testAPI.deleteQuestion(id)
        if (response.status===200){
            dispatch(setCurrentEditQuestion_AC(id));
            dispatch(deleteQuestionAC());
        }
        dispatch(toggleIsSynchroAC(false));
}

// export const editQuestionThunkCreator=(id:number,text:string|null=null,img:string|null=null,comment:string|null=null,istextanswer:boolean|null=null,textanswer:string|null=null,addalter:number|null=null)=>{
// return (dispatch:any)=>{
//       dispatch(setCurrentEditQuestion_TC(id));
//       dispatch(editQuestionAC(text,img,comment,istextanswer,textanswer,addalter));
//   }
// }

export const editQuestionTC=(quest:IQuestion)=>{
return (dispatch:any)=>{
      dispatch(setCurrentEditQuestion_TC(quest.id));
      dispatch(editQuestion_AC(quest));
  }
}

export const editAnswerThunkCreator=(idQ:number,idA:number,text:string|null=null,img:string|null=null,truth:boolean|null=null)=>{
return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
      dispatch(setCurrentEditQuestion_AC(idQ));
      dispatch(setCurrentEditAnswerAC(idA));
      dispatch(editAnswerAC(text,img,truth));
  }
 }

 export const editAnswerTC=(idQ:number,ans:IAnswer)=>{
 return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
       dispatch(setCurrentEditQuestion_AC(idQ));
       dispatch(setCurrentEditAnswerAC(ans.id));
       dispatch(editAnswer_AC(ans));
   }
  }

const SET_NEW_ID_QUESTION='SET_NEW_ID_QUESTION';
type ATsetNewIdQuestion={type:typeof SET_NEW_ID_QUESTION,idQOld:number,idQNew:number}
export const setNewIdQuestionAC=(idQOld:number,idQNew:number):ATsetNewIdQuestion=>({type:SET_NEW_ID_QUESTION,idQOld:idQOld,idQNew:idQNew})

const SET_NEW_ID_ANSWER='SET_NEW_ID_ANSWER';
type ATsetNewIdAnswer={type:typeof SET_NEW_ID_ANSWER,idQ:number,idAOld:number,idANew:number}
export const setNewIdAnswerAC=(idQ:number,idAOld:number,idANew:number):ATsetNewIdAnswer=>({type:SET_NEW_ID_ANSWER,idQ:idQ,idAOld:idAOld,idANew:idANew})

const SET_AS_SAVED='SET_AS_SAVED';
type ATsetAsSaved={type:typeof SET_AS_SAVED,idQ:number}
export const setAsSavedAC=(idQ:number):ATsetAsSaved=>({type:SET_AS_SAVED,idQ:idQ})

const SET_NEW_TICKET_ID='SET_NEW_TICKET_ID';
type ATsetNewIdTiket={type:typeof SET_NEW_TICKET_ID,idTest:number,idTikOld:number,idTikNew:number}
export const setNewIdTiket=(idTest:number,idTikOld:number,idTikNew:number):ATsetNewIdTiket=>({type:SET_NEW_TICKET_ID,idTest:idTest,idTikOld:idTikOld,idTikNew:idTikNew})

const SET_NEW_RESULT_ID='SET_NEW_RESULT_ID';
type ATsetNewIdResult={type:typeof SET_NEW_RESULT_ID,idResultOld:number,idResultNew:number}
export const setNewIdResult=(idResultOld:number,idResultNew:number):ATsetNewIdResult=>({type:SET_NEW_RESULT_ID,idResultOld:idResultOld,idResultNew:idResultNew})

const CHECK_FOR_KHSM='CHECK_FOR_KHSM';
type ATcheckForKHSM={type:typeof CHECK_FOR_KHSM,idQ:number,value:boolean}
export const checkForKHSM_AC=(idQ:number,value:boolean):ATcheckForKHSM=>({type:CHECK_FOR_KHSM,idQ:idQ,value:value})

export const saveAllTC=(data:IQuestion[],testParam:ITest[])=>{
return (dispatch:any,getState:()=>AppStateType)=>{
let resultQ:any=[];
let res:any=[];
let itarationAnswer=(idQ:number,quest:IQuestion)=>{
          quest.ans.forEach((itemA:IAnswer)=>{
            if (itemA.deleted) {res.push(testAPI.deleteAnswer(itemA.id)); //console.log("Пытаюсь удалить ",itemA.id);
          }
             else{ if(itemA.added) res.push(testAPI.addAnswer(idQ,itemA).then((responseA:any)=>{
                  if (responseA.status===201) //itemA.id=responseA.data.id
                    dispatch(setNewIdAnswerAC(idQ,itemA.id,responseA.data.id));
                  })
                );
               else {if(itemA.edited) {res.push(testAPI.editAnswer(itemA.id,{...itemA,idquestion:idQ}));console.log("Пытаюсь сохранить idquestion"+idQ); console.log(itemA);
               }
             }
             }
          });
    return Promise.all(res).then(()=>{
    dispatch(setAsSavedAC(idQ))});
}
// Сохранение вопросов
    dispatch(toggleIsSynchroAC(true));
    let copyTP=JSON.parse(JSON.stringify(testParam));
  //  console.log("Start saving with data:",data);
    data.forEach((itemQ:IQuestion) => {
          let resQ=null;
  //        console.log("Iterate itemQ:",itemQ);
          if (itemQ.deleted) resQ=testAPI.deleteQuestion(itemQ.id);
          else {
            if (itemQ.added) resQ=testAPI.addQuestion(itemQ)
                        .then ((response:any)=>{
                             if (response.status===201) {//item.id=response.data.id
                             dispatch(setNewIdQuestionAC(itemQ.id,response.data.id));
                             copyTP=replaceNumQuestionInTicket(copyTP,itemQ.id,response.data.id)
                             return response.data.id}
                          });
              else {if (itemQ.edited) {resQ=testAPI.editQuestion(itemQ.id,itemQ); return itemQ.id}
              }
          resultQ.push(resQ);
          let resA:any=[];
          if (resQ) resQ.then((idQ:number)=>{//console.log("Answer with promise");
                resA=itarationAnswer(idQ,itemQ)})
          else {//console.log("Answer without promise",itemQ.id,itemQ);
              resA=itarationAnswer(itemQ.id,itemQ)}
    }});


//    console.log("copyTP.id,copyTP:",copyTP.id,copyTP);
    let resTP=testAPI.editTest(copyTP.id,copyTP)

    let itarationTicket=()=>{
        let resTik:any=[];
  //      console.log("Все промисы param и question завершены");
        copyTP.tickets.forEach((itemTik:ITicket)=>{
            if (itemTik.deleted) {resTik=testAPI.deleteTicket(itemTik.id)}
              else{
                if (itemTik.added) {resTik=testAPI.addTicket(itemTik)
                    .then((responseT:any)=>{
                      console.log("Add ticket");
                      if (responseT.status===201) {//item.id=response.data.id
                        dispatch(setNewIdTiket(copyTP.id,itemTik.id,responseT.data.id));
                    }});
                  }
                  else{
                    if (itemTik.edited) {resTik=testAPI.editTicket(itemTik.id,itemTik)}
                  }
              }
        })

    }

    Promise.all(resultQ.concat(resTP).concat(res))
    .then(itarationTicket)
    .finally(()=>{
         dispatch(setIsSavedAC());
         dispatch(toggleIsSynchroAC(false));
     })
     dispatch(saveResultTC(getState().TestsEdit.result));
  }
}

export type TypeThunkVoid=ThunkAction<void,AppStateType,unknown,ATForReducerTestsEdit>
export const saveResultTC=(resulttest:IResult[]):TypeThunkVoid=>{
 return (dispatch)=>{
    let resResult:any=null;
    resulttest.forEach((item:IResult)=>{
        if (item.deleted) {resResult=testAPI.deleteResult(item.id)}
          else{
            if (item.added) {resResult=testAPI.addResult(item)
                .then((responseT:any)=>{
                  if (responseT.status===201) {//item.id=response.data.id
                    dispatch(setNewIdResult(item.id,responseT.data.id));
                }});
              }
              else{
                if (item.edited) {resResult=testAPI.editResult(item.id,item)}
              }
          }
    })
    resResult&&resResult.then(()=>{
      dispatch(setResultsAsSaved())
    });
  }
}

export const addNewAnswerThunkCreator=(idQ:number,text:string="NA",img:string|null=null)=>{
return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
            dispatch(setCurrentEditQuestion_AC(idQ));
            dispatch(addNewAnswerAC(idRandom(),text,img,false));
  }
}

export const deleteAnswerThunkCreator=(idQ:number=-1,idA:number=-1)=>{
return (dispatch:Dispatch<ATForReducerTestsEdit>)=>{
            dispatch(setCurrentEditQuestion_AC(idQ));
            dispatch(setCurrentEditAnswerAC(idA));
            dispatch(deleteAnswerAC(idA));
  }
}

const replaceNumQuestionInTicket=(test:any,idQOld:number,idQNew:number)=>{
   return {...test,tickets:test.tickets.map((cT:ITicket)=>({...cT,questions:cT.questions.map(q=>q==idQOld?idQNew:q)}))}
}

export const reducerTestsEdit=(state:ITestEditState=initState,action:ATForReducerTestsEdit):ITestEditState=>{
  switch (action.type) {
    case CURRENT_QUESTION_CHECKED_TICKETS:
          let cTed:Array<ITicket>|null=state.testslistforedit[state.currTestEdit].tickets;
        return {...state,
          currentCheckedTest:cTed&&cTed.filter((tik:ITicket)=>tik.questions.some(x=>x==state.listedit[state.currentQuestionEdit].id)).map(tid=>{//console.log(tid);
                  return tid.id}),
        }
    case SET_CURRENT_EDIT_QUESTION:
        return {...state,
          currentQuestionEdit:state.listedit.findIndex((q)=>q.id==action.id)}
    case SET_CURRENT_EDIT_ANSWER:
        return {...state, currentAnswerEdit:state.listedit[state.currentQuestionEdit].ans.findIndex((q)=>q.id==action.id) }
    case LOAD_TEST_EDIT:
           return {...state,listedit:action.data,
              currentQuestionEdit:action.data.length>0?0:-1,
              currentAnswerEdit:-1,
          }
    case SET_TEST_PARAM:
        return {...state,
          dataIsChanged:true,
          testslistforedit:state.testslistforedit.map((t:ITest,i:number)=>{if (i==state.currTestEdit) return action.data; return {...t} })
          }
    case SET_TEST_COVER_IMG:
          return {...state,
              dataIsChanged:true,
              testslistforedit:state.testslistforedit.map((t:ITest,i:number)=>{if (i==state.currTestEdit) return {...t, coverimg:action.img}; return {...t} })
              }
    case SELECT_EDIT_TEST:
          return {...state,
              idTestEdit:action.testid,
              currTestEdit:state.testslistforedit.findIndex((q:ITest)=>q.id==action.testid)
              }
    case ADD_NEW_TEST:
          return {...state,
              idTestEdit:action.data.id,
              testslistforedit:[...state.testslistforedit,action.data],
            }
    case GET_TESTS_LIST_FOR_EDIT:
                 return {...state,
                    idTestEdit:-1,
                    listedit:[],
                    testslistforedit:[...action.data],
                  }
    case ADD_NEW_QUESTION:
          let answers:IAnswer[]=[];
          let numAnsw=(state.testslistforedit[state.currTestEdit].defaultAnswerCol<1)?(1):(state.testslistforedit[state.currTestEdit].defaultAnswerCol*1)+1;
          for (let i=1;i<numAnsw;i++)
              answers.push({id:idRandom(),idquestion:action.id,anstext:state.testslistforedit[state.currTestEdit].defaultAnswer,num:i,truth:i==1?false:false,uch:false,added:true,img:"",score:0,selectcounter:0})
          return {...state,
            dataIsChanged:true,
            listedit:[...state.listedit,
                              {id:action.id,
                               idtest:state.idTestEdit,
                               num:state.listedit.length+1,
                               question:state.testslistforedit[state.currTestEdit].defaultQuestion,
                               istextanswer:false,
                               textanswer:"",
                               img:"",
                               ans:answers,
                               added:true,
                               addalter:0,
                               inputAnswer:"",
                               answerinputcounter:0,
                               comment:"",
                               selectcounter:0,
                               score:0,
                               hardlevel:0,
                               transcompilation:"",
                               addtomillion:false
                             }
                  ],
            currentQuestionEdit:state.listedit.length,
          }
    case DELETE_TEST:{
        return {...state,
                  dataIsChanged:true,
                  testslistforedit:state.testslistforedit.filter((q,id:number)=>id!=action.id),
                }
      }
    case DELETE_QUESTION:
         return {...state,
                   dataIsChanged:true,
                   currentQuestionEdit:state.currentQuestionEdit===state.listedit.length-1?state.currentQuestionEdit-1:state.currentQuestionEdit,
                   listedit:state.listedit.filter((q,id)=>id!=state.currentQuestionEdit)
                 }
    case SET_QUESTION_IMAGE:
      return {...state,
               dataIsChanged:true,
               listedit:state.listedit.map((q,id)=>{
                   if (id!=state.currentQuestionEdit) return q;
                              return {...q,
                                    img:action.filename,
                                    edited:true
                                  }
                 })
      }
    case SET_ANSWER_IMAGE:
          return {...state,
                   dataIsChanged:true,
                   listedit:state.listedit.map((q,id)=>{
                       if (id!=state.currentQuestionEdit) return q;
                                  return {...q,
                                        ans:q.ans.map((a,i)=>{if (i!=state.currentAnswerEdit) return a;return{...a,img:action.filename,edited:true}})
                                      }
                     })
          }
    case EDIT_QUESTION_:
        return {...state,
                 dataIsChanged:true,
                 listedit:state.listedit.map((q:IQuestion,id)=>{ if (id!=state.currentQuestionEdit) return q;  return {...action.quest,edited:true} })
        }
    case SET_NEW_ID_QUESTION:
        return {...state,
            listedit:state.listedit.map(q=>q.id==action.idQOld?{...q,id:action.idQNew}:q),
            testslistforedit:state.testslistforedit.map(tl=>tl.id==state.idTestEdit?replaceNumQuestionInTicket(tl,action.idQOld,action.idQNew):tl)
         }
    case SET_NEW_ID_ANSWER:
     return {...state,
         listedit:state.listedit.map(q=>q.id==action.idQ?{...q,ans:q.ans.map(a=>a.id==action.idAOld?{...a,id:action.idANew}:a)}:q)
      }
    case SET_NEW_TICKET_ID:

    return {...state,
        testslistforedit:state.testslistforedit.map((tl:ITest)=>
            tl.id==action.idTest?
                {...tl,tickets:
                  tl.tickets&&tl.tickets.map((tik:ITicket)=>tik.id==action.idTikOld?({...tik,id:action.idTikNew}):tik)
                }
            :tl)
     }
    case SET_IS_SAVED:
        return {...state, dataIsChanged:false, }
    case SET_AS_SAVED:
        return {...state,
          dataIsChanged:false,
          listedit:state.listedit.filter(dq=>!dq.deleted).map(q=>q.id==action.idQ?{...q,added:false,edited:false,ans:q.ans.filter(da=>!da.deleted).map(a=>({...a,added:false,edited:false}))}:q),
          testslistforedit:state.testslistforedit.map((tl:ITest,i:number)=>
              i==state.currTestEdit?{...tl,tickets:tl.tickets&&tl.tickets.filter((dtl:ITicket)=>!dtl.deleted).map((tik:ITicket)=>({...tik,added:false,edited:false}))}
         :tl)
        }
    case DELETE_ANSWER:
     if (state.listedit[state.currentQuestionEdit].ans.length<=1) return state;
     return {...state,
         dataIsChanged:true,
         listedit:state.listedit.map((q,id)=>{
         if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
              ans:q.ans.map((q,id)=>{if (id==state.currentAnswerEdit) {return {...q,deleted:true}};return q})
            }
       }),
//       deleted:true
     }
    case EDIT_ANSWER:
      return {...state,
          dataIsChanged:true,
          listedit:state.listedit.map((q,id)=>{if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
            ans:q.ans.map((a,ida)=>{
                 if (ida!=state.currentAnswerEdit) return a;
                 return {...a,anstext:action.text===null?a.anstext:action.text
                   ,img:action.img===null?a.img:action.img
                   ,truth:action.isTrue===null?a.truth:action.isTrue
                   ,uch:a.uch,edited:true}})
          }})
      }
    case EDIT_ANSWER_:
      return {...state,
          dataIsChanged:true,
          listedit:state.listedit.map((q,id)=>{if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
            ans:q.ans.map((a,ida)=>{
                 if (ida!=state.currentAnswerEdit) return a;
                 return {...action.ans,edited:true}})
          }})
      }
    case TOGGLE_IS_SINCHRONIZING:
        return {...state,
          isSynchronizing:action.isSynchro}
    case NEXT_EDIT_QUESTION:
      let cQE1=state.currentQuestionEdit==state.listedit.length-1?state.currentQuestionEdit:state.currentQuestionEdit+1;
      return {...state,
        currentQuestionEdit:cQE1,
//        questionIDEdit:state.listedit[cQE1].id
      }
    case PREV_EDIT_QUESTION:
      let cQE2=state.currentQuestionEdit==0?0:state.currentQuestionEdit-1;
      return {...state,
        currentQuestionEdit:cQE2,
      }
    case ADD_NEW_ANSWER:
        return {...state,
          dataIsChanged:true,
          listedit:state.listedit.map((q,id)=>{
            if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
                 ans:[...q.ans,{
                   id:idRandom(),
                   idquestion:q.id,
                   anstext:state.defaultAnswer?state.defaultAnswer:"",
                   num:q.ans.length+1,
                   truth:action.isTrue,
                   uch:false,
                   added:true,
                   img:"",
                   score:0,
                   selectcounter:1
                 }]
               }
          })
        }
    case ADD_TICKET:
        return {...state,
             dataIsChanged:true,
             testslistforedit:state.testslistforedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:t.tickets&&[...t.tickets,
                          {id:idRandom(),idtest:state.idTestEdit,ticketname:action.name+" "+(t.tickets?t.tickets.length+1:1),questions:[],added:true}]}:t)
           }
    case DELETE_TICKET:
        return {...state,
             dataIsChanged:true,
             testslistforedit:state.testslistforedit.map((t:ITest,i:number)=>i==state.currTestEdit?{...t,tickets:t.tickets&&t.tickets.map(tik=>tik.id==action.id?{...tik,deleted:true}:tik)}:t)
           }
    case EDIT_TICKET:return {...state,
              dataIsChanged:true,
              testslistforedit:state.testslistforedit.map((t:ITest,i:number)=>i==state.currTestEdit?{...t,tickets:t.tickets&&t.tickets.map(tik=>tik.id==action.id?{...tik,ticketname:action.name,edited:true}:tik)}:t)
            }
    case ADD_QUESTION_TO_TICKET:
        let cQ=state.listedit[state.currentQuestionEdit].id;
        return {...state,
              dataIsChanged:true,
              testslistforedit:state.testslistforedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:t.tickets&&t.tickets.map(tik=>tik.id==action.id?
                {...tik, questions:action.add?[...tik.questions,cQ]:tik.questions.filter(q=>q!=cQ) ,edited:true}:tik)}:t)
            }
    case PUBLICATE_TEST:
      if (state.check.errors==0) testAPI.editTest(state.idTestEdit,{...state.testslistforedit[state.currTestEdit],published:!state.testslistforedit[state.currTestEdit].published});
      return{...state,
        testslistforedit:state.testslistforedit
            .map((t:ITest)=>t.id==state.idTestEdit?
              (state.check.errors==0&&!t.published?{...t,published:true}:{...t,published:false})
              :t),
        flugShowAlertWindow:!state.testslistforedit[state.currTestEdit].published,//state.check.errors!=0,
        messageAlertWindow:state.check.errors!=0?"Публикация не возможна исправьте ошибки теста":"Тест опубликован",
        errorAlertWindow:state.check.errors!=0
      }
    case SHOW_ALERT_WINDOW:
        return{...state,flugShowAlertWindow:action.show,messageAlertWindow:action.show?state.messageAlertWindow:""}
    case UNLOAD_FLUG_ON:return{...state,idTestEdit:-1}
    case CHECK_TEST:
        let errorQuestion:ICheckList[]=state.listedit.map(q=>({
              questnum:q.num,
              questionid:q.id,
              notrightansw:!q.istextanswer&&!q.ans.some(a=>a.truth),
              colansw:(state.testslistforedit[state.currTestEdit].addalter<2)&&(q.addalter<2)&&!q.istextanswer&&(q.ans.length<state.testslistforedit[state.currTestEdit].defaultAnswerCol),
              notalter:(state.testslistforedit[state.currTestEdit].addalter<2)&&(q.addalter<2)&&!q.istextanswer&&(q.ans.length<2),
              notchoice:!q.istextanswer&&(q.ans.length===0),
              notuniqueAnswer:!q.istextanswer&&!uniqueArray(q.ans),
              emptyAnswer:!q.istextanswer&&q.ans.some(a=>a.anstext.length<3),
              emptyInputAnswer:q.istextanswer&&!q.textanswer
        })).filter(q=>q.emptyAnswer||q.notrightansw||q.notuniqueAnswer||q.emptyInputAnswer||q.colansw||q.notchoice||q.notalter)
          return{...state,
            check:{
              List:errorQuestion,
              errors:errorQuestion.reduce((v,i)=>v+(!i.colansw?1:0),0),
              warnings:errorQuestion.reduce((v,i)=>v+(i.colansw?1:0),0)
            }
          }
    case GET_RESULT_EDIT:
        return {...state,result:action.data}
    case SET_RESULT_ITEM:
        let sp=toNumLimMinMax(action.data.startpercent,0,100)
        let ep=toNumLimMinMax(action.data.endpercent,0,200)
        let newres:any={...action.data,
            edited:true,
            startpercent:sp,
            endpercent:ep,
            scorestart:toNumLimMinMax(action.data.scorestart,0,10000000),
            scoreend:toNumLimMinMax(action.data.scoreend,0,10000000),
          }
         return {...state,dataIsChanged:true,result:state.result.map((res:IResult)=>res.id==newres.id?newres:res)}
    case ADD_RESULT_ITEM:console.log(ADD_RESULT_ITEM);
        return {...state,dataIsChanged:true,result:[...state.result,{
              id:idRandom(),
              idtest:state.idTestEdit,
              scorestart:0,
              scoreend:0,
              startpercent:0,
              endpercent:0,
              result:"",
              win:false,
              added:true,
              img:""
        }]}
    case DELETE_RESULT_ITEM:
        return {...state,dataIsChanged:true,result:state.result.map((res:IResult)=>res.id==action.id?{...res,deleted:true}:res)}
    case SET_NEW_RESULT_ID:
      return {...state,
          result:state.result.map((res:IResult)=>res.id==action.idResultOld?{...res,id:action.idResultNew}:res),
       }
    case SET_RESULT_AS_SAVED:
        return {...state,result:state.result.filter((r:IResult)=>!r.deleted).map(r=>{return ({...r,added:false,edited:false})})}
    case SET_CURRENT_EDIT_TEST_ID:return {...state,dataIsChanged:true,idTestEdit:action.id}
    case CHECK_FOR_KHSM:    return {...state,
           dataIsChanged:true,
           listedit:state.listedit.map((q:IQuestion,id)=>{ if (q.id!=action.idQ) return q;  return {...q,
             addtomillion:!q.img&&q.question.length>20&&q.question.length<200&&q.hardlevel>0&&q.ans.length===4?action.value:false,edited:true
           } })
        };
    default:return state;
    }

}
