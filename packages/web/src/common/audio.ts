import {GLOBAL_PATH_API} from '../Global'

 export class EventPlayer {
   numTest: number;
   audio: HTMLAudioElement;
   url: string;
   volume:number;
   muted:boolean;
   constructor(url:string='',numTest:number=0){
     this.url=GLOBAL_PATH_API+url//GLOBAL_PATH_API+'/sounds/hello-new-punter-2008-long.mp3';
     this.numTest=numTest;
     this.audio = new Audio(url);
     this.volume=0.1;
     this.muted=localStorage.getItem('ismute')==="true";
     this.audio.volume=0.1;
     this.audio.muted=this.muted;
   }
   setvolume=(vol:number)=>{
     this.audio.pause()
     this.volume=vol;
     this.audio.volume=vol;
     this.audio.play()
   }
   mute=()=>{
     //this.audio.muted=this.audio.muted?false:true;
     this.audio.pause()
     this.audio.muted=this.audio.muted?false:true;
     localStorage.setItem('ismute', String(this.audio.muted))
     this.audio.play()
   }
   clear(){
     this.audio.pause()
     this.numTest=0;
     this.url=""
     this.audio.src="";
   }
   setTestNum(numTest:number){
     this.numTest=numTest;
   }
   startGame(){
     if (this.numTest===17) {
        this.audio.src=GLOBAL_PATH_API+'/sounds/million/startgame.mp3';
        this.audio.play();
      }
   }
   startQuestion(numQ:number=0){
      if (this.numTest===17)
      switch (numQ) {
      case 0:case 1:case 2:case 3:case 4:
        this.audio.src=GLOBAL_PATH_API+'/sounds/million/q1_extra-large.mp3';
        break;
        case 5:case 6:case 7:case 8:
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/q6.mp3';
        break;
        case 9:
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/q10.mp3';
        break;
        case 10:case 11:case 12:case 13:
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/q11.mp3';
        break;
        case 14:
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/q15.mp3';
        break;
       }
       this.audio.play();
   }
   helpEvent(sound:string="5050"){
      if (this.numTest===17)
      switch (sound) {
      case "5050":
        this.audio.src=GLOBAL_PATH_API+'/sounds/million/help5050.mp3';
        break;
        case "phone":
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/helpphone.mp3';
        break;
        case "wrong":
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/helpchoise.mp3';
        break;
        case "replace":
              this.audio.src=GLOBAL_PATH_API+'/sounds/million/helpchoise.mp3';
        break;
       }
       this.audio.play();
   }
   checkChoise(){

   }
   pause(){
      this.audio.pause();
   }
   rightChoice(numQ:number=0){
     if (this.numTest===17){
       switch (numQ) {
       case 0:case 1:case 2:case 3:case 4:
           this.audio.src=GLOBAL_PATH_API+'/sounds/million/q1_right.mp3';
           break;
       case 5:case 6:case 7:case 8:
             this.audio.src=GLOBAL_PATH_API+'/sounds/million/q6_right.mp3';
           break;
       case 9:case 10:case 11:case 12:case 13:
             this.audio.src=GLOBAL_PATH_API+'/sounds/million/q10_right.mp3';
           break;
       case 14:
            this.audio.src=GLOBAL_PATH_API+'/sounds/million/q15_right.mp3';
           break;
        }
         this.audio.play();
       }
   }
   wrongChoice(numQ:number=0){
     if (this.numTest===17){
       switch (numQ) {
       case 0:case 1:case 2:case 3:case 4:
           this.audio.src=GLOBAL_PATH_API+'/sounds/million/q1_wrong.mp3';
           break;
       case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:
             this.audio.src=GLOBAL_PATH_API+'/sounds/million/q6_wrong.mp3';
           break;
       case 14:
            this.audio.src=GLOBAL_PATH_API+'/sounds/million/q15_wrong.mp3';
          break;
        }
         this.audio.play();
       }
   }
 }

export const PlayerMp3 = new EventPlayer()
