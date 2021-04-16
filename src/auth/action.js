export const updateEmail=(email,password)=>{
    return((dispatch)=>{
dispatch({
    type:'updateid',
    payload:{email,password}
})
        }
        
    )
}