import {Link, useLocation} from 'react-router-dom';


const PaginationButton = ({to, state,children, ...props}) => {
    const {search} = useLocation();

    return (
        <Link to={to} state={state} {...props} >
            <button >{children}</button>
        </Link>
    );
};

export {PaginationButton};