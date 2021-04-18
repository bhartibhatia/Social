//this is the initial  state of each sub reducres,for example-auth reducers

const initialState={
    email:'',
    password:''
}
export const authReducer=(state=initialState,action)=>{
    console.log('action',action)
    switch (action.type) {
        case 'updateid':
            return {...state,email:action.payload.email,password:action.payload.password}
            break;
    case 'SetDummyData':
        return{...state,email:action.payload.emailstate,password:action.payload.passwordstate}
        default:
            return{...state}
    }
}