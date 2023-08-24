import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'Users',
    initialState : [],
    reducers : {
        Adduser(state, action){
            state.push(action.payload)
        },
        Removeuser(state,action){
            console.log(action.payload)
            return state.splice(action.payload,1)
        },
        Deleteall(state, action){ 
            return []
        }
    }
})

export default userSlice.reducer;
export const {Adduser, Removeuser} = userSlice.actions
export const {Deleteall} = userSlice.actions