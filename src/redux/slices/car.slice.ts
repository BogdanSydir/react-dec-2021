import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[]
}

const initialState: IState = {
    cars: []
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);
const create = createAsyncThunk<ICar, {car:ICar}>(
    'carSlice/create',
    async ({car}) => {
        const {data} = await carService.create(car)
        return data
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
    })
})

const {reducer: carReducer} = carSlice

const carActions = {
    getAll,
    create
}

export {
    carReducer,
    carActions
}