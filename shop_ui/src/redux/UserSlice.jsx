import {createSlice} from "@reduxjs/toolkit"
const slice = createSlice({
    name:"myuserdata",
    initialState:{
      value:{isLoginStatus:false,name:undefined,role:'',token:undefined}
    },
    reducers:{
        changeUserInfo:(state,action)=>{
            var data = action.payload;
            state.value = data;
        }
    }
    
})
export const{changeUserInfo} = slice.actions;
export default slice.reducer;