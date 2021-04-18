export const updateHome=(HomeName)=>{
    return((dispatch)=>{
dispatch({
    type:'updateHomeName',
    payload:{HomeName}
})
        }
        
    )
}