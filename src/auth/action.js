export const updateEmail=(email,password)=>{
    return((dispatch)=>{
dispatch({
    type:'updateid',
    payload:{email,password}
})
        }
        
    )
}

export const newEmail=(email,password)=>{
return((dispatch)=>{
dispatch({
    type:'SetDummyData',
    payload:{emailstate:email,passwordstate:password}
})
}

)
}