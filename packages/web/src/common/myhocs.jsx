import React from 'react';
import {Redirect}  from 'react-router-dom';
import {connect} from 'react-redux';
import Preloader from './preloader';

export const withAuthRedirect =(Component)=>{
    class AuthRedirectComponent extends React.Component{
    render(){
          if (!this.props.isAuth) return <Redirect to={"/"}/>
          return <Component {...this.props} />
          }
      }

    let mapStateToPropsForRedirect=(state)=>{return {isAuth:state.me.isAuth}}
    return connect (mapStateToPropsForRedirect)(AuthRedirectComponent);
}

export const withAuthShow =(Component)=>{
    class AuthShowComponent extends React.Component{
    render(){
          if (this.props.isAuth) return <Component {...this.props} />
            return <></>;
          }
  }

  let mapStateToPropsForRedirect=(state)=>{return {isAuth:state.me.isAuth}}
  return connect (mapStateToPropsForRedirect)(AuthShowComponent);
}

export const withEditMode =(Component)=>{
    class EditModeComponent extends React.Component{
    render(){
          if (this.props.editMode) return <Component {...this.props} />
            return <></>;
          }
      }
      let mapStateToPropsForRedirect=(state)=>{return {editMode:state.Tests.editMode}}
      return connect (mapStateToPropsForRedirect)(EditModeComponent);
}

export const withPreloader=(Component)=>{
        class PreloaderComponent extends React.Component{
        componentDidMount(){
            console.log("componentDidMount()");
        }
        // shouldComponentUpdate(nextProps){
        //   if (this.props.isSynchronizing!=nextProps.isSynchronizing&&!nextProps.isSynchronizing) {console.log(nextProps.isSynchronizing); return true}
        //   else return false
        // }
        render(){
            if (this.props.isSynchronizing) return <Preloader/>
            return <Component {...this.props} />
        }
    }
    let mapStateToPropsForRedirect=(state)=>{return {isSynchronizing:state.Tests.isSynchronizing}}
    return connect (mapStateToPropsForRedirect)(PreloaderComponent);
}


