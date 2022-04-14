import css from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({to, state, children}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button}>{children}</button>
        </Link>
    );
};

export {Button};