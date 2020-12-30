import '../testslist.css';
import React,{useEffect} from "react";
import TestQuestionEdit from './QuestionItemEditConatainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Paginator from '../../../common/paginator2';
import QuestionEditTools from './QuestionEditToolsContainer';
import TestEdit from './TestEditContainer.jsx';
import TicketsEdit from './TicketTestEditContainer';
import TestResultEdit from './TestResultEditContainer';
import TestCheck from './TestCheckContainer';
import AlertWindow from '../../alertwindow/AlertWindowContainer';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../../common/myhocs';


import {getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
import {
        selectTestEditTC,
        setCurrentEditQuestion_TC
      } from '../../../redux/reducerTestsEdit';


const TestPage=({idTest,list,currentQuestion,listlength,setQuest,selectTestEdit, match,})=>{

   useEffect(() => {
       selectTestEdit(match.params.testid);
   },[match.params.testid]);

   let setQ=(page,pc)=>{
     setQuest(list[page-1].id);
   }
   const frame100p_90=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_5.html"></iframe>'}}
   const frame160_600=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="600px" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_6.html"></iframe>'}}
   return <div className={"edittestpage"}>
          <div className="menu">
          <AlertWindow/>
          <TestCheck/>
          <QuestionEditTools/>
          <TicketsEdit/>
          {/*(idTest>-1)&&<TicketsEdit/>*/}
          </div>
          <div>
          {/*(idTest>-1)&&(listlength>0)&&tp.type_levelgame&&list[currentQuestion].isChecked&&!flugTestIsOver&& <QuestionResult/>*/}
          {/*(idTest>-1)&&(listlength>0)&&!flugTestIsOver&&(idTest>0)&&tp.testtime>0&&!editMode&&<TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/>*/}
          {(idTest>-1)&&(listlength>0)&&<Paginator prevnext={true}
                            totalCount={listlength} startend={true}   pageSize={1}
                            currentPage={currentQuestion+1}
                            onClick={setQ}/>}
          {(idTest>-1)&&(listlength>0)&&<TestQuestionEdit/>}
          <TestResultEdit/>
          {/*<Player url={"https://api.yes-t.net/sounds/khsm_lifeline_1-.mp3"}/>*/}
          {/*(idTest>-1)&&(listlength>0)&&<NavPanel/>*/}
          {/*!editMode&&(idTest>0)&&(tp.tickets.length>0)&&<Tickets/>*/}
          {(idTest>-1)&&<TestEdit/>}
          {/*(idTest>-1)&&flugTestIsOver&&<TestsResult  list={list}/>*/}
          </div>
          {/*<NavLink to={""}><button>На главную</button></NavLink>*/}
          <div><div className="rekField2" dangerouslySetInnerHTML={frame160_600()}/></div>
          <div className="rekField" dangerouslySetInnerHTML={frame100p_90()}/>
      </div>;
}


let mapStateToProps=(state)=>{
      return{
//        flugShowTicketList:state.Tests.flugShowTicketList,
        tp:getCurrentEditTestParamSEL(state),
//        questiontime:getCurrentTestParamSEL(state).questiontime,
        currentQuestion:state.TestsEdit.currentQuestionEdit,
//        currentAnswer:state.Tests.currentAnswer,
//        editMode:state.TestsEdit.editMode,
        idTest:state.TestsEdit.idTestEdit,
        list:state.TestsEdit.listedit,
        listlength:state.TestsEdit.listedit.length,
//        flugTestIsOver:state.TestsEdit.testresult.isDoneTest,
      }
}


export default compose(
    connect(mapStateToProps,{
//      onSave:saveThunkCreator,
//      onEditMode:onEditModeAC,
//      editModeON:editModeONAC,
//      offEditMode:offEditModeAC,
//      addQuest:addNewQuestionThunkCreator,
//      getTestsList:getTestsListThunkCreator,
//      onCancel:loadQuestionThunkCreator,
      setQuest:setCurrentEditQuestion_TC,
//      onNext:nextQuestionTC,
      selectTestEdit:selectTestEditTC
//      testIsDone:testIsDoneAC
    }),
  withAuthRedirect,
  withRouter
  )
  (TestPage);
