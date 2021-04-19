const initialSate={
product:''
}
export const exploreReducer=(state=initialSate,action)=>{
console.log('action',action)
switch(action.type){
    case 'sendData':
        return{...state,newProduct:action.payload}
        default:
         return{...state}
}
}