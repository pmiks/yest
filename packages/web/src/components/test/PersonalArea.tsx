import React from 'react'
import './PersonalArea.css'
import TestEditList from './EditMode/TestsEditListContainer'
import ProfileSettings from './EditMode/ProfileSettings'
import AllTestResult from './EditMode/AllTestResultContainer'
//import {withAuthRedirect} from '../../common/myhocs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../common/myhocs';
import {Route,NavLink,Switch} from 'react-router-dom';
import { TypeMe } from '../../redux/interface'
import { AppStateType } from '../../redux/redux-store'

const PersonalArea:React.FC<{me:TypeMe}>=({me})=>{
  const frame100p_90=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_5.html"></iframe>'}}
  const frame160_600=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_6.html"></iframe>'}}
  return <div className="PersonalArea">
  <div className="rekField" dangerouslySetInnerHTML={frame100p_90()}/>
      <div className="menu">
          <NavLink className="mitem" to="/personalarea/mytestresult">Пройденные тесты</NavLink>
          {(me.GMODERATOR||me.GSUPERUSER||me.GTESTGENERATOR)&&<NavLink className="mitem" to="/personalarea/mytests">Мои тесты</NavLink>}
          <NavLink className="mitem" to="/personalarea/settings">Мои настройки</NavLink>
      </div>
      <div className="context">
      {/*<TestEditList/>*/}
        <Switch>
         {(me.GMODERATOR||me.GSUPERUSER||me.GTESTGENERATOR)&&<Route path='/personalarea/mytests' render={()=><TestEditList/>}/>}
         <Route path='/personalarea/mytestresult' render={()=><AllTestResult/>}/>
         <Route path='/personalarea/settings' render={()=><ProfileSettings/>}/>

        </Switch>
      </div>
      <div dangerouslySetInnerHTML={frame160_600()}/>
  </div>
}

let mapStateToProps=(state:AppStateType)=>{
      return{
        me:state.me
      }
}

export default compose(
    connect(mapStateToProps,{
    }),
  withAuthRedirect,
  //withPreloader
  )
  (PersonalArea);
