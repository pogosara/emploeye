import React, {useEffect} from 'react';
import './App.css';
import "./App.css"
import {authMeTC} from "./reducers/reducerAUTH";
import {useDispatch} from "react-redux";
import {Route} from 'react-router-dom';
import {Login} from './Auth/1-login/login';
import {Table} from './Components/table';
import {Register} from './Auth/2-register/register';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch])

    return (
        <div className="App">


            <Route path={'/'} exact render={() => <Table/>}/>
            <Route path={'/login'} exact render={() => <Login/>}/>
            <Route path={'/register'} exact render={() => <Register/>}/>

        </div>
    );
}

export default App;
