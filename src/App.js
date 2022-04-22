import {useReducer} from "react";

const init = (initCount) => {
    return {count1: initCount, count2: initCount, count3: initCount}
}

const reduser = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: 0}
        case 'set1':
            return {...state, count1: action.payload}

        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: 0}
        case 'set2':
            return {...state, count2: action.payload}

        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: 0}
        case 'set3':
            return {...state, count3: action.payload}

        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(reduser, 0, init) // dispatch передає дані в reduser action.type, state бере з reduser state

    // const inc = () =>{
    //     dispatch({type: 'inc'})
    // 2
    return (
        <div>
            <div>
                count1: {state.count1}
                <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>
                <button onClick={() => dispatch({type: 'set1', payload: 10})}>set 10</button>
            </div>
            <hr/>
            <div>
                count2: {state.count2}
                <button onClick={() => dispatch({type: 'inc2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
                <button onClick={() => dispatch({type: 'set2', payload: 10})}>set 10</button>
            </div>
            <hr/>
            <div>
                count3: {state.count3}
                <button onClick={() => dispatch({type: 'inc3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset3'})}>Reset</button>
                <button onClick={() => dispatch({type: 'set3', payload: 10})}>set 10</button>
            </div>
        </div>
    );
}

export default App;
