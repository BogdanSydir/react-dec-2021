import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            {id} -- {name} <br/>
            <Button to={`${id}`} state={user}>get details</Button>
            <hr/>
        </div>
    );
};

export {User};