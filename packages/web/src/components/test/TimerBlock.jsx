import React from 'react';
import './testslist.css';

class TimerBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={timeLeft:null,timer:null}
    }

    componentDidMount(){
        if (this.props.secondstime>0) this.startTimer(this.props.secondstime,this.props.onEndCount);
    }

    startTimer=(timeL,onEndCount=null)=>{
      clearInterval(this.state.timer);
      let timerId=setInterval(()=>{
              timeL=this.state.timeLeft-1
                  if (timeL<=0) {
                    clearInterval(timerId);
                    onEndCount&&onEndCount();
                  }
              this.setState({timeLeft:timeL})
            },
            1000)
            return this.setState({timeLeft:timeL,timer:timerId})
    }

    render=()=>{
      return (this.props.secondstime>0)?<TimerDisplay timer={this.state.timeLeft}/>:<></>
    }
}

const TimerDisplay=({timer})=>{
     let secondToTime=(seconds)=>{
     let min=Math.trunc(seconds/60);
     let sec=(seconds%60);
     let hour=Math.trunc(min/60);
     return (hour<10?"0"+hour:hour)+":"+(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)
    }
    return <div> {timer<0?"Время не ограничено":secondToTime(timer)} </div>
}

export default TimerBlock;
