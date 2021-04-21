import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';
import {RootStateType} from "../../reducers/store";
import {logoutTC} from "../../reducers/reducerAUTH";

export const Header = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logoutTC())
    }

    return (
        <div>

            {isAuth
                ? <NavLink to={'/'}>
                    <button onClick={logOut}>Выйти</button>
                </NavLink>
                : <div>
                    <NavLink to={'/register'}>Регистрация</NavLink>
                    <NavLink to={'/login'}>Войти</NavLink>
                </div>
            }

        </div>
    );
};

