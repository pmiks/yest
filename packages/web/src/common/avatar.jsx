import React from 'react';
import avatar_male from '../assets/images/avatarmale.png';

const Avatar=({src,size})=>{
    return <div> <img width={size} alt={"User Avatar"} src={src!=null?src:avatar_male}/> </div>
}

export default Avatar;
