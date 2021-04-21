import React from 'react';
import s from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {loginTC} from "../../reducers/reducerAUTH";
import {NavLink, Redirect } from 'react-router-dom';
import {Field, Form, Formik } from 'formik';


export const Login = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
        dispatch(loginTC(values))
    }

    if (isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={s.login}>
            <div className={s.container}>
                <div className={s.loginFormContainer}>
                    <h1 className={s.title}>Добро пожаловать!</h1>
                    <NavLink to={'/'}><button>back</button></NavLink>
                    <Formik
                        initialValues={{
                            password: '',
                            email: '',
                            rememberMe: false
                        }}
                        onSubmit={onSubmit}
                    >
                        <Form className={s.loginForm}>
                            <Field
                                name="email"
                                type="email"
                            />
                            <Field
                                type="password"
                                name="password"/>

                            <NavLink to={'/forgot-password'} className={s.forgotLink}>
                                Забыли пароль?
                            </NavLink>

                            <button  type="submit">войти</button>
                        </Form>
                    </Formik>

                    <div className={s.redirectToSingUp}>
                        <span>
                            Нет аккаунта?
                        </span>
                        <NavLink to={'/register'} className={s.singUpLink}>
                            Создать аккаунт
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

