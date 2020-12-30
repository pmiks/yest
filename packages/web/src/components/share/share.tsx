import React from 'react'
import {GLOBAL_PATH_API, GLOBAL_PATH_SITE} from '../../Global'
import logofb from '../../assets/images/iconsn/is_fb_124.png'
import logoviber from '../../assets/images/iconsn/ir_viber_124.png'
import logovk from '../../assets/images/iconsn/ir_vk_124.png'
import logowhatsapp from '../../assets/images/iconsn/ir_whatsapp_124.png'
import logotelegram from '../../assets/images/iconsn/ir_telegram_124.png'
import logook from '../../assets/images/iconsn/ir_ok_124.png'

type SharePropsType={
  url?:string
  title?:string
  img?:string
  size?:string
  discription?:string
  result?:string
}

const Share:React.FC<SharePropsType>=({url,title,img,size="30px",discription,result})=>{
    let linksVK=`https://vk.com/share.php?url=${url?encodeURI(url):""}&title=${title?encodeURI("Проверь себя!: YES.T | "+title+(result?" | "+result:"")):""}`//&img=${encodeURI(img)}
    let linksFB=`https://www.facebook.com/sharer.php?u=${url?encodeURI(url):""}&title=${title?encodeURI(title)+(result?" | "+result:""):""}`;//&img=${img?encodeURI(img):""}
    //let linksFB=`https://www.facebook.com/dialog/share?app_id=926068754508883&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`;
    //let linksFB=`https://www.facebook.com/dialog/share?app_id=926068754508883&display=popup&href=${url?encodeURI(url):""}&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`;
    let linksWA=`https://api.whatsapp.com/send?text=${url||title?encodeURI(title+(result?" | "+result:"")+" | "+url):""}`
    let linksTelegram=`tg://msg_url?url=${url?encodeURI(url):""}&text=${title?encodeURI("YES.T | "+title)+(result?" | "+result:""):""}`
    let linksViber=`viber://forward?text=${encodeURI(title+(result?" | "+result:"")+" | "+url)}&utm_source=viber`
    let linksOK=result?`https://connect.ok.ru/offer?url=${url?encodeURI(url):""}&title=${title?encodeURI("YES.T | "+result+" | "+title.toUpperCase()):""}&imageUrl=${img?encodeURI(GLOBAL_PATH_API+"/"+img)
      :(GLOBAL_PATH_SITE+"/yes_512s.jpg")}`:`https://connect.ok.ru/offer?url=${url?encodeURI(url):""}&title=${title?encodeURI("Проверь себя!: YES.T | "+title.toUpperCase()+" | "+discription):""}&imageUrl=${img?encodeURI(GLOBAL_PATH_API+"/"+img):(GLOBAL_PATH_SITE+"/yes_512s.jpg")}`
    return <div>
        <ShareItem linkurl={linksVK} icon={logovk} size={size} title={!result?"Поделиться ВКонтакте":"Поделиться результатами ВКонтакте"}/>
        <ShareItem linkurl={linksOK} icon={logook} size={size} title={!result?"Поделиться Однокласники":"Поделиться результатами Однокласники"}/>
        <ShareItem linkurl={linksFB} icon={logofb} size={size} title={"Поделиться Facebook"}/>
        <ShareItem linkurl={linksWA} icon={logowhatsapp} size={size} title={!result?"Поделиться WhatsApp":"Поделиться результатами WhatsApp"}/>
        <ShareItem linkurl={linksViber} icon={logoviber} size={size} title={!result?"Поделиться Viber":"Поделиться результатами Viber"}/>
        <ShareItem linkurl={linksTelegram} icon={logotelegram} size={size} title={!result?"Поделиться Telegram":"Поделиться результатами Telegram"}/>
    </div>
}

type PropsType={
  linkurl:string
  icon:any
  param?:string
  size?:string
  title?:string
}

const ShareItem:React.FC<PropsType>=({linkurl,icon,size,title=""})=>{
  return <> <a className={"social_icon"} href={linkurl} target="_blank"><img alt={""} height={size} width={size} src={icon} title={title}/></a></>
}

export default Share;
