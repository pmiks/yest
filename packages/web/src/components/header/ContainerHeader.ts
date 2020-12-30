import Header from './Header'
import {connect} from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { getTestsList_TC } from '../../redux/reducerTests';

  const mapStateToProps=(state:AppStateType)=>{
    return{
      me:state.me
    }
  };

export default connect( mapStateToProps,
     {
       getTestsList:getTestsList_TC
     }
   )(Header)
