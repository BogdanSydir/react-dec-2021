import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carToUpdate: null
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
            return rejectWithValue({result: e.message, formErrors: e.response.data}) // закидує у [create.rejected] як action.payload
        }
    }
)

const deleteById = createAsyncThunk(
    'delete',
    async ({id}) => {
        await carService.deleteById(id)
        console.log('delete by id method, id:', id)
        return id
    }
)

const updateById = createAsyncThunk(
    'update',
    async ({car, id}) => {
        await carService.updateById(id, car)
        return ({id, car})
    }
)


const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            setToUpdate: (state, action) => {
                state.carToUpdate = state.cars.find(car => car.id === action.payload.id)
                console.log(`car to upd: `, current(state.carToUpdate)) // без current не виводить масив
            }
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
            },

            [deleteById.fulfilled]: (state, action) => {
                console.log(`action.payload:`, action.payload)
                const index = state.cars.findIndex(car => car.id === action.payload)
                console.log(`index:`, index)
                state.cars.splice(index, 1)
            },
            [updateById.fulfilled]: (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id)
                state.cars[index] = {...state.cars[index], ...action.payload.car}
                state.carToUpdate = null
            }
        }
    })
;

const {
    reducer: carReducer, actions: {
        setToUpdate
    }
    // :{createSync}             //синхронний варіант запису
} = carSlice;

const carActions = {
    getAll, //1. -> викликаємо
    create,
    deleteById,
    setToUpdate,
    updateById
}

export {
    carReducer,
    carActions
}