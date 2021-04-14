//this is the initial  state of each sub reducres,for example-auth reducers

const initialState={
    email:'',
    password:''
}
export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'email':
            return {...state,email:action.payload}
            break;
    
        default:
            return{...state}
    }
}