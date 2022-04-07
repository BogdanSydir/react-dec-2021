const User = ({user, getDetails}) => {
    const {id, name, username} = user;
    return (
        <div className={'user'}>
            {id} -- {name} -- {username}
            <button onClick={()=> getDetails(user)}>Get details</button>
        </div>
    );
};

export {User};