import { User, UserAction, UserState } from "../../types/user";



const defaultState: UserState ={
  data:{} as User,
  loading:false,
  error:""
}

const userReducer =(
state:UserState =defaultState, 
action:UserAction
): UserState =>{
switch (action.type) {
default:
return state;
}
}
export default userReducer;