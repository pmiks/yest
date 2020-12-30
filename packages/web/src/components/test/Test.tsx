import './QuestionItem.css';
//import '../../themes/_ThemeKHSM.css';
//import '../../themes/Theme_AVTO.css';
//import '../../themes/ThemePLANE.css';
import React,{useState,useEffect, FC} from "react";
import TestQuestion from '../test/QuestionItemConatainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TestResult from './TestResultContainer'
import Paginator from '../../common/paginator2';
import {PlayerMp3} from '../../common/audio';
import QuestionResult from './QuestionResultContainer';
import NavPanel from './NavPanelContainer';
import TimerBlock from './TimerBlock';
import Tickets from './TicketTestContainer';
import {withRouter} from 'react-router-dom';
import HelpTools from './helptools';
import {GLOBAL_PATH_API} from '../../Global'
import {Helmet} from 'react-helmet';
import {getCurrentTestParamSEL} from '../../redux/test-selectors';
import {
        loadTest_TC,
        setCurrentQuestion_AC,
        testIsDone_AC,
        nextQuestion_AC,
      } from '../../redux/reducerTests';
import { ITest, IQuestion } from '../../redux/interface';
import { AppStateType } from '../../redux/redux-store';
import Preloader from '../../common/preloader';


type TTestPage={
  wrongattempt:number
  match:any
  idTest:number
  list:Array<IQuestion>
  currentQuestion:number
  listlength:number
  setQuest:(idQ:number)=>void
  //selectTest:(idTest:number)=>void
  loadTest:(idTest:number)=>void
  tp:ITest
  isSynchronizing:boolean
  flugTestIsOver:boolean
  testIsDone:()=>void
  showprompt:string
}


const TestPage:FC<TTestPage>=({match,idTest, list, currentQuestion, listlength, setQuest, loadTest,//selectTest,
  tp, flugTestIsOver, testIsDone,wrongattempt,showprompt,isSynchronizing})=>{

    let [level,setLevel]=useState(-1);

    useEffect(() => {
//      selectTest(match.params.testid);
      loadTest(match.params.testid);
      console.log(match.params.testid);
//      console.log("selectTest(match.params.testid)");
    },[match.params.testid]);

    useEffect(() => {
       if (currentQuestion>=0&&tp) {
           PlayerMp3.setTestNum(tp.id)
           if (level>0) PlayerMp3.startQuestion(currentQuestion);
       }
    },[currentQuestion,tp,level]);

    useEffect(() => {
            if (level===-1)  {PlayerMp3.startGame()}
    },[level]);

    let setQ=(page:number,pc:any)=>{
        if (tp.id==17) {if (level===-1)setLevel(page-1)}
        else setQuest(list[page-1].id);
     }
  if (isSynchronizing&&!flugTestIsOver&&!tp)  return <>{isSynchronizing}<Preloader/></>
  if (!tp||!listlength) return <></>
  let bi="";
  let isbg=false;
  if (tp) { bi=GLOBAL_PATH_API+"/"+tp.coverimg;   isbg=tp.isbackground   }

  const frame=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_5.html"></iframe>'}}

  let arrWin=["$100","$200","$300","$500","$1,000","$2,000","$4,000","$8,000","$16,000","$32,000","$64,000","$125,000","$250,000","$500,000","$1 Million","ПОЗДРАВЛЯЕМ ВЫ МИЛЛИОНЕР!!!"]
  let win=null
  if (tp.id==17)  {  win=currentQuestion>level?(currentQuestion===14?15:level+1):0;  arrWin[level]=arrWin[level]+"~"  }
  return <div className={"testpage testpage_"+tp.displaystyle} style={{"backgroundColor": "transparent"}}>
  <Helmet>
      {(flugTestIsOver||(tp.endOnWrong&&!list[currentQuestion].win&&list[currentQuestion].isChecked))?
      <title>YES.T | Результат теста: {tp.testname}</title>
      :<title>YES.T | {tp.testname}</title>}
      {tp.displaystyle&&<link rel="stylesheet" type="text/css" href={'https://api.yes-t.net/theme/Theme_'+tp.displaystyle+'.css'}/>}
      <meta name="description" content={tp.discription?tp.discription:tp.testname} />
      <meta name="keywords" content={tp.hashtag.replace(/#/gi,'').replace(/^\s+|\s+$/g, "").replace(/ /g, ",")} />
  </Helmet>
  {(tp.id==17&&level===-1)&&<div className="SelectLevelLayer">Выберите несгораемую сумму
  <Paginator prevnext={false}  totalCount={-15} startend={true} pageSize={1} sizeframe={15}
                    currentPage={0}  onClick={setQ} displaystyle={tp.displaystyle} arrvalues={arrWin}/> </div>}
      {!showprompt&&<div className="add_div1" />}
      {showprompt &&<div className="add_div2">{showprompt}</div>}
      {wrongattempt>0&&<div className="add_div3"/>}
      <button style={{"width":"0.1px","height":"0.1px","opacity":"0","position":"absolute","zIndex":-1}} autoFocus> </button>
      {/*Фоновая картинка теста*/}
      {isbg&&<div className={"BackLayer"} style={{"background": `url("${bi}") 100% 100%`}}/>}
      {/*Заголовок и таймер теста*/}
      {!flugTestIsOver&&(tp.tickets&&tp.tickets.length===0)&&<div className={"testHeaderDefault testHeader_"+tp.displaystyle}>
           <div className="name">{tp.testname}</div>
           {<div className="time"><TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/></div>}
       </div>
      }
      {/*Показат Pagenator*/}
      {!flugTestIsOver&&(tp.tickets&&tp.tickets.length===0)&&(tp.id!=17||level!=-1)&&<Paginator prevnext={false}
                        totalCount={tp.id==17?0-listlength:listlength} startend={true}   pageSize={1} sizeframe={15}
                        currentPage={currentQuestion+1}
                        onClick={!tp.type_levelgame||tp.id==17?setQ:null } displaystyle={tp.displaystyle} arrvalues={tp.id==17?arrWin:null}/>}
      {/*Показат текущий вопрос*/}
      {(!flugTestIsOver&&(tp.tickets&&tp.tickets.length===0)&&(tp.id!=17||level!=-1))&&<><TestQuestion/>{(tp.id==17)&&<><HelpTools/></>}
      </>}
      {/*Показать кнопки "вперед" "назад"*/}
      {<NavPanel/>}
      {/*Показат варианты билетов*/}
      {((idTest>0)&&(tp.tickets&&tp.tickets.length>0))&&<Tickets/>}
      {/*Показать результат теста*/}
      {(flugTestIsOver||(tp.endOnWrong&&!list[currentQuestion].win&&list[currentQuestion].isChecked))&&<TestResult win={win}/>}
      {/*Показать результат ответа на вопрос*/}
      {tp.type_levelgame&&list[currentQuestion].isChecked&&!flugTestIsOver&&<QuestionResult result={tp.id==17?arrWin[currentQuestion+1].replace(/~/g,""):null} cQ={currentQuestion}/>}
      <div className="rekField" dangerouslySetInnerHTML={frame()}/>
  </div>;
}


let mapStateToProps=(state:AppStateType)=>{
      return{
        tp:getCurrentTestParamSEL(state),
        currentQuestion:state.Tests.currentQuestion,
        currentAnswer:state.Tests.currentAnswer,
        wrongattempt:state.Tests.wrongattempt,
        showprompt:state.Tests.showprompt,
        idTest:state.Tests.idTest,
        list:state.Tests.list,
        listlength:state.Tests.list.length,
        flugTestIsOver:state.Tests.testresult.isDoneTest,
        isSynchronizing:state.TestsEdit.isSynchronizing
      }
}


export default compose(
    connect(mapStateToProps,{
      setQuest:setCurrentQuestion_AC,
      onNext:nextQuestion_AC,
      //selectTest:selectTest_TC,
      loadTest:loadTest_TC,
      testIsDone:testIsDone_AC
    }),
    //withAuthRedirect
    //withPreloader,
    withRouter
  )
  (TestPage);
