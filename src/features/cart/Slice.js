import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}

export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        additem:(state,action)=>{
            // const cart={
            //     id:nanoid,
            //     text:action.payload
            // }
            console.log(state.carts)
            state.carts.push(action.payload);
        },
        // removeitem:(state,action)=>{
        //     const todoid=action.payload
        //     state.carts=state.carts.filter((todo)=>
        //         todo.id!==action.payload
        //     )
        // },
    }
})

export const {additem}=cartSlice.actions;

export default cartSlice.reducer
