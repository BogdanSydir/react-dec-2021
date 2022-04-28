import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors:{}
}
const getAll = createAsyncThunk( //2. робимо запит на сервер
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll() //2.1 carService з car.service
        return data  //3. повертаємо респонс функції getAll і цей респонс викликаємо
                     //   у carSlice -> extraReducers як action.payload
    }
)

const create = createAsyncThunk(
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {  //dispatch для синхронного варіанту
        try {
            const {data} = await carService.create(car)
            // dispatch(createSync({car:data}))       //синхронний варіант запису
            return data // повертає у [create.fulfilled] як action.payload
        } catch (e) {
            return rejectWithValue({result:e.message, formErrors:e.response.data}) // закидує у [create.rejected] як action.payload
        }
    }
)

const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            // createSync:(state, action) =>{
            //     state.cars.push(action.payload.car)  //синхронний варіант запису
            // }

        }, //actions
        extraReducers: { //extraReducers для асинхронних запитів
            [getAll.pending]: (state) => {
                state.status = 'load'
            },
            [getAll.fulfilled]: (state, action) => {
                state.cars = action.payload //4. наповнюємо стейт респонсом
                state.status = 'done'
            },
            [getAll.rejected]: (state, action) => {
                state.status = 'error'
            },

            [create.fulfilled]: (state, action) => {
                state.cars.push(action.payload)
                console.log('done')

            },
            [create.rejected]: (state, action) => {
                const {result, formErrors} = action.payload
                state.status = result
                state.formErrors = formErrors
                console.log(formErrors)
            }
        }
    })
;

const {reducer: carReducer, actions
   // :{createSync}             //синхронний варіант запису
} = carSlice;

const carActions = {
    getAll, //1. -> викликаємо
    create
}

export {
    carReducer,
    carActions
}