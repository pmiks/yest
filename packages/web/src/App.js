import './App.css';
import React              from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import TestPage           from './components/test/EditMode/TestEditPage';
import {connect}          from 'react-redux'
import {initializeAppThunkCreator} from './redux/reducerInit';
import {withRouter}       from 'react-router-dom';
import {compose}          from 'redux';
import Preloader          from './common/preloader';
import Header             from './components/header/ContainerHeader'
import TestList      from './components/test/mainpage_container';
import Test          from './components/test/Test';
import TestResult    from './components/test/TestResultContainer';
import PersonalArea  from './components/test/PersonalArea';
import {Helmet}      from 'react-helmet'
import {ApiTest}     from './components/test/apiTest';



class App extends React.Component {
    componentDidMount(){
     this.props.initializeAppThunkCreator()
  };
    render(){
    if (!this.props.initialized) return <Preloader/>
    return (<>
          <Helmet>
              <title>YES.T | Тесты,задачи,опросы</title>
              <meta  name="description" content="Тесты,задачи,опросы,викторины"  />
              <meta  name="keywords" content="Тесты,задачи,опросы,викторины,игры,профессиональные тесты, билеты, экзамены, психологические тесты,развлечения,тренажер для ума" />
          </Helmet>
          <div className="App" style={{"backgroundColor": "transparent"}}>
          <div className="LeftPanel"></div>
          <div className="Page" style={{"backgroundColor": "transparent"}}>
           <Switch>
                 <Route path='/personalarea' render={()=><><div className="Header"><Header/></div><PersonalArea/></>}/>
                 <Route path='/test/:testid?' render={()=><><div className="Header"><Header/></div><Test/></>}/>
                 <Route path='/apitest/:testid?' render={()=><ApiTest/>}/>
                 <Route path='/testedit/:testid?' render={()=><><div className="Header"><Header/></div><TestPage/></>}/>
                 <Route path='/testresult/:testsession?' render={()=><><div className="Header"><Header/></div><TestResult/></>}/>
                 <Route path='/' render={()=><><div className="Header"><Header/></div><TestList/></>}/>
                 <Redirect to="/public"/>
           </Switch>
           <div className="Footer"></div>
           </div>
        </div>
    </>);
}
}

const mapStateToProps=(state)=>{
        return{initialized:state.init.initialized}
};

export default compose( withRouter,connect(mapStateToProps,{initializeAppThunkCreator}))
(App)
