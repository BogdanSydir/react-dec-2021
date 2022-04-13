import {CarForm, Cars} from "./components";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [updatedCar, setUpdatedCar] = useState(null)

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>

        </div>
    );
}

export default App;
