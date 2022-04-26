import {createSlice} from "@reduxjs/toolkit";

const initialState={
    dogs:[]
}

const dogSlice = createSlice({
    name: 'dogsSlice',
    initialState,
    reducers:{
        add:(state, action) =>{
            const {dog} = action.payload;
            const newCat = {id: new Date().getTime(), name: dog}
            state.dogs.push(newCat)
        },
        deleteById:(state, action) =>{
            const index = state.dogs.findIndex(value => value.id === action.payload.id)
            state.dogs.splice(index, 1)
        }
    }
})

const {reducer:dogReducer, actions:{add, deleteById}} = dogSlice

export default dogReducer
export const dogActions = {add, deleteById}