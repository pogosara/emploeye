import React from 'react';
import s from './register.module.css'
import {useDispatch} from "react-redux";
import {Field, Form, Formik } from 'formik';
import {registerTC} from "../../reducers/reducerAUTH";
import { NavLink } from 'react-router-dom';

export const Register = () => {

    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
          dispatch(registerTC(values))
    }

    return (
        <div className={s.register}>
            <div className={s.container}>
                <div className={s.registerFormContainer}>
                    <h1 className={s.title}>РЕГИСТРАЦИЯ</h1>
                    <NavLink to={'/'}><button>back</button></NavLink>
                    <Formik
                        initialValues={{
                            password: '',
                            email: ''
                        }}
                        onSubmit={onSubmit}
                    >
                        <Form className={s.registerForm}>
                            <Field
                                name="email"
                                type="email"
                            />
                            <Field
                                type="password"
                                name="password"/>
                            <button  type="submit">Регистрация</button>
                        </Form>
                    </Formik>

                    <div className={s.redirectToSingIn}>
                        <span>
                          Уже есть аккаунт?
                        </span>
                        <NavLink to={'/login'} className={s.signInLink}>
                            Войти
                        </NavLink>
                    </div>


                </div>
            </div>
        </div>
    );
};

