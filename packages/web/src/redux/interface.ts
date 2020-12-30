export interface TState{
  me:any
  Tests:ITestState
  TestsEdit:ITestEditState
}

export interface ITestEditState{
  currTestEdit:number
  defaultAnswer:string
  defaultQuestion:string
  currentAnswerEdit:number
  currentQuestionEdit:number
  currentTicketEdit:number
  currentCheckedTest?:Array<number>|null
  idTestEdit:number
  isSynchronizing:boolean
  questionID:number
  answerID:number
  listedit:IQuestion[]|never
  result:IResult[]|never
  testslistforedit:ITest[]|never
  allAnswers?:IAnswer[]
  check:ICheck|never
  messageAlertWindow:string|null
  flugShowAlertWindow:boolean
  errorAlertWindow:boolean
  dataIsChanged:boolean
}

export interface ITestState{
  currTest:number
  currentAnswer:number
  currentQuestion:number
  currentTicket:number
  idTest:number
  isSynchronizing:boolean
  questionID:number
  answerID:number
  list:IQuestion[]|never
  result:IResult[]|never
  testresult:IUserResult
  testslist:ITest[]|never
  allAnswers:IAnswer[]|never
  alltestresult:any[]
  wrongattempt:number
  showprompt:string
  reservlist:IQuestion[]|never
}

export interface IAnswer{
  id:number
  idquestion:number
  num:number
  anstext:string
  img:string
  score:number
  selectcounter:number
  truth:boolean
  uch:boolean
  edited?:boolean|null
  deleted?:boolean|null
  added?:boolean|null
  nonactiv?:boolean
}

export interface IQuestion{
  addalter:number
  ans:IAnswer[]
  answerinputcounter:number
  comment:string
  id:number
  idtest:number
  img:string
  inputAnswer:string
  istextanswer:boolean
  num?:number
  question:string
  selectcounter:number
  score:number
  textanswer:string
  edited?:boolean|null
  deleted?:boolean|null
  added?:boolean|null
  isChecked?:boolean|null
  win?:boolean
  dateedit?:string
  datecreate?:string
  hardlevel:number
  transcompilation:string
  addtomillion:boolean
  displaystyle?:string|null
}

export interface ITest{
  addalter:number
  coverimg:string
  datecreate?:string
  dateedit?:string
  defaultAnswer:string
  defaultAnswerCol:number
  defaultQuestion:string
  deleted?:boolean|null
  endOnWrong:boolean
  hashtag:string
  id:number
  isGame:boolean
  isbackground:boolean
  limit_quest:number
  published:boolean
  questiontime:number
  selectcounter:number
  NumAns:string
  NumQuest:string
  shuffleAnswer:boolean
  shuffleQuestion:boolean
  testname:string
  testtime:number
  tickets:ITicket[]|null
  timeQuestResult:number
  type_levelgame:boolean
  typeid:number
  usercreator:number
  wrongpermissible:number
  displaystyle?:string|null
  edited?:boolean|null
  added?:boolean|null
  discription:string
}

export interface ITicket{
  datecreate?:string
  dateedit?:string
  id:number
  deleted?:boolean|null
  edited?:boolean|null
  added?:boolean|null
  idtest:number
  questions:number[]
  ticketname:string
}

export interface IUserResult{
  allIsChecked:boolean
  id:number
  isDoneTest:boolean
  resquestion:IResUserResult[]
  sessionID:string
  testcover:string
  testname:string
  anscol:number
  discription:string
  hashtag:string
  displaystyle:string
}

export interface IResUserResult{
  idanswer:number
  idquestion:number
  idtest:number
  idticket:number
  inputtext:string
  resFill:IresFill
  result?:boolean
  score:number
  session:string
  time_session:number
}

export interface IresFill{
  anstextR:string
  anstextU:string
  imgAR:string
  imgAU:string
  imgQ:string
  question:string
  statR:number
  statT:number
  statU:number
}

export interface IResult{
  id:number
  idtest:number
  img:string
  result:string
  scorestart:number
  scoreend:number
  win:boolean|number
  startpercent:number
  endpercent:number
  added?:boolean|null
  deleted?:boolean|null
  edited?:boolean|null
  datecreate?:string
  dateedit?:string
}

export interface ICheck{
  List:ICheckList[]
  errors:number
  warnings:number
}

export interface ICheckList{
  questnum?:number
  questionid:number
  notrightansw:boolean
  colansw:boolean
  notalter:boolean
  notchoice:boolean
  notuniqueAnswer:boolean
  emptyAnswer:boolean
  emptyInputAnswer:boolean
}

export type TypeMe={
  iduser:string|null
  first_name:string|null
  last_name:string|null
  photo:string|null
  access_token:null
  isAuth:boolean
  GMODERATOR:boolean
  GSUPERUSER:boolean
  GTESTGENERATOR:boolean
}

export type IAphorism={
  id:number
  text:string
  obscene:boolean
  type:number
  photo_path:string
  theme:string
  published:boolean
  creator_user:string
  created:string
  author:string
  hashtags:string
}

;
