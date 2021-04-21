import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {openPopUpAC} from "../../../reducers/reducerPagination";
import s from "./ModalWindow.module.css"

export const ModalWindow = (props: any) => {

    const [fullName, setFullName] = useState<string>( '' )
    const [gender, setGender] = useState<string>('')
    const [contacts, setContacts] = useState<string>( '')
    const [salary, setSalary] = useState<string>('')
    const [position, setPosition] = useState<string>('')


    const onClick = () => {
        const worker = {
            fullName,
            gender,
            contacts,
            salary,
            position
        }
    props.onClick(worker)
        setFullName('')
        setGender('')
        setContacts('')
        setSalary('')
        setPosition('')
    }

    const dispatch = useDispatch();

    const closePopUp = () => {
        dispatch(openPopUpAC(false))

    }
    // const addWorker = () => {
    //     dispatch(addWorkerTC({}))
    //     dispatch(openPopUpAC(false))
    // }

    const addFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
    }
    const addGender = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.currentTarget.value)
    }
    const addContacts = (e: ChangeEvent<HTMLInputElement>) => {
        setContacts(e.currentTarget.value)
    }
    const addSalary = (e: ChangeEvent<HTMLInputElement>) => {
        setSalary(e.currentTarget.value)
    }
    const addPosition = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition(e.currentTarget.value)
    }

    return (
        <div className={s.popUp}>
            <div className={s.popUpContainer}>
                <input onChange={addFullName} value={fullName} placeholder={"fullName:"}/>
                <input onChange={addGender} value={gender} placeholder={"gender:"}/>
                <input onChange={addContacts} value={contacts} placeholder={"contacts:"}/>
                <input onChange={addSalary} value={salary} placeholder={"salary:"}/>
                <input onChange={addPosition} value={position} placeholder={"position:"}/>
                <button className={s.button} onClick={onClick}>add</button>
                <button className={s.button} onClick={closePopUp}>close</button>
            </div>
        </div>
    );
};

