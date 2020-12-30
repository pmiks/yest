import React, { useState } from "react"
import {PlayerMp3} from "../audio"
import './VolumeSettings.css'

const VolumeSettings=()=>{
   let [mute,setMute]=useState(PlayerMp3.audio.muted)
   return <div className="VolumeSettings">
        <div className={mute?"muted":"unmuted"} onClick={()=>{PlayerMp3.mute();setMute(PlayerMp3.audio.muted);}}></div>
        {/*<div className="volume"><input onChange={(e)=>{PlayerMp3.setvolume(Number(e.target.value))}} type="number" min="0" max="1" step="0.1" value={PlayerMp3.volume}/>
        </div>*/}
   </div>
}

export default VolumeSettings
