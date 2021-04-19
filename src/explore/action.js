export const sendData=(data)=>{
return((dispatch)=>{
dispatch({
type:'sendData',
payload:data
})}


)
}