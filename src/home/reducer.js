//this is the initial  state of each sub reducres,for example-auth reducers

const initialState={
  name:''
}
export const homeReducer=(state=initialState,action)=>{
    console.log('action',action)
    switch (action.type) {
        case 'updateHomeName':
            return {...state,name:action.payload.HomeName}
            break;
    
        default:
            return{...state}
    }
}