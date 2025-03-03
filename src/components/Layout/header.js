import { Fragment } from 'react';
import classes from './header.module.css';
const header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
       
    </Fragment>
};

export default header;
