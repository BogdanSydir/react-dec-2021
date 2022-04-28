const Car = ({car:{id, model, price, year}}) => {
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            {/*<button onClick={}>delete</button>*/}
        </div>
    );
};

export {Car};