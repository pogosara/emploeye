import React, {useEffect} from 'react';
import {Header} from "./Header/Header";
import {ModalWindow} from "./Worker/ModalWindow/ModalWindow";
import {Pagination} from "./Worker/Pagination/Pagination";
import {Worker} from "./Worker/Worker";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../reducers/store";
import {addWorkerTC, getWorkersTC, NewWorkerType, WorkerType} from "../reducers/reducerWorker";
import {closePopUpAC, openPopUpAC, setCurrentPageAC} from "../reducers/reducerPagination";

export const Table = () => {

    const workers = useSelector<RootStateType, Array<WorkerType>>(state => state.workers.workers)
    const isShowModal = useSelector<RootStateType, boolean>(state => state.pagination.isShowPopUp)

    const currentPage = useSelector<RootStateType, number>(state => state.pagination.currentPage)
    const pageItemCount = useSelector<RootStateType, number>(state => state.pagination.pageItemCount)

    const indexOfLastPost = currentPage * pageItemCount;
    const indexOfFirstPost = indexOfLastPost - pageItemCount;
    const workerpPG = workers.slice(indexOfFirstPost, indexOfLastPost);

    const closePopUp = useSelector<RootStateType, boolean>(state => state.pagination.closePopUp)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkersTC())
    }, [dispatch])



    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    };

    const addWorker = (worker: NewWorkerType) => {
        dispatch(addWorkerTC(worker))
        dispatch(openPopUpAC(false))
    }

    const showModal = () => {
        dispatch(openPopUpAC(true))
    }
    const closeModal = () => {
        dispatch(closePopUpAC(true))
    }


    return (
        <div>
            <Header />
            <button onClick={showModal}>add</button>

            {
                isShowModal && <ModalWindow onClick={addWorker}/>
            }


            <Pagination
                pageItemCount={pageItemCount}
                totalPosts={workers.length}
                paginate={paginate}
                currentPage={currentPage}/>
            <div className='body'>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Пол</th>
                        <th>Контакты</th>
                        <th>Оклад</th>
                        <th>Должность</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                </table>
            </div>
            {workerpPG &&
            workerpPG.map(w => <Worker worker={w}/>

            )
            }
        </div>
    );
};
