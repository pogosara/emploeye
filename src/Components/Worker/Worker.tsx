import React, {useState} from 'react';
import {deleteWorkerTC, NewWorkerType, updateWorkerTC, WorkerType} from "../../reducers/reducerWorker";
import {useDispatch, useSelector} from "react-redux";
import {ModalWindow} from "./ModalWindow/ModalWindow";
import {RootStateType} from "../../reducers/store";
import {openPopUpAC} from "../../reducers/reducerPagination";
import {ModalUpdateWindow} from "./ModalUpdateWindow/ModalWindow";

type WorkerPropsType = {
    worker: WorkerType
}

export const Worker = (props: WorkerPropsType) => {

    const[isShowModal, setShowModal] = useState<boolean>(false)
    const isAuth = useSelector<RootStateType, boolean>(state =>state.auth.isAuth)

    const dispatch = useDispatch();

    const deleteWorker = () => {
        dispatch(deleteWorkerTC(props.worker._id))
    }
    const updateWorker = (worker: NewWorkerType) => {
       dispatch(updateWorkerTC(props.worker._id, worker))
        dispatch(openPopUpAC(false))
        setShowModal(false)
    }

    const showModal = () => {
        setShowModal(true)

    }

    return (
        <div className="body">
            {
                isShowModal && <ModalUpdateWindow setShowModal={setShowModal}  worker={props.worker} onClick={updateWorker}/>
            }

            <table className="table">
                <tbody>
                <tr>
                    <td>{props.worker.fullName}</td>
                    <td>{props.worker.gender}</td>
                    <td>{props.worker.contacts}</td>
                    <td>{props.worker.salary}</td>
                    <td>{props.worker.position}</td>
                    {
                        isAuth &&  <td>
                            <button onClick={deleteWorker}>delete</button>
                            <button onClick={showModal}>update</button>
                        </td>
                    }

                </tr>

                </tbody>
            </table>

        </div>
    );
};

