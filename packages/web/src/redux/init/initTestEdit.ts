import {ITestEditState, ITest} from '../interface';
export const initState:ITestEditState={
  //list:[],
  listedit:[],
  result:[],
  isSynchronizing:false,
  currentQuestionEdit:-1,
  currentAnswerEdit:-1,
  currTestEdit:-1,
  defaultQuestion:"",
  defaultAnswer:"",
  currentTicketEdit:-1,
  idTestEdit:-1,
  questionID:-1,
  answerID:-1,
  testslistforedit:[],
  check:{
    List:[],
    errors:0,
    warnings:0
  },
  messageAlertWindow:"",
  errorAlertWindow:false,
  dataIsChanged:false,
  flugShowAlertWindow:false
};


export const initNewTest:ITest={
  testname:"Новый тест"
  ,hashtag:"#new"
  ,addalter:0
  ,coverimg:""
  ,defaultAnswer:""
  ,defaultQuestion:""
  ,defaultAnswerCol:2
  ,id:0
  ,endOnWrong:false
  ,isGame:false
  ,isbackground:true
  ,limit_quest:0
  ,published:false
  ,questiontime:5000
  ,selectcounter:1
  ,NumAns:""
  ,NumQuest:""
  ,shuffleAnswer:false
  ,shuffleQuestion:false
  ,testtime:0
  ,timeQuestResult:0
  ,type_levelgame:false
  ,typeid:0
  ,usercreator:0
  ,wrongpermissible:0
  ,tickets:null
  ,discription:""
};
