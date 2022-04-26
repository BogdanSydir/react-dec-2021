import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cats:[]
}

const catSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers:{
        add:(state, action) =>{
            const {cat} = action.payload;
            const newCat = {id: new Date().getTime(), name: cat}
            state.cats.push(newCat)
        },
        deleteById:(state, action) =>{
            const index = state.cats.findIndex(value => value.id === action.payload.id)
            state.cats.splice(index, 1)
        }
    }
})

const {reducer:catReducer, actions:{add, deleteById}} = catSlice

export default catReducer
export const catActions = {add, deleteById}