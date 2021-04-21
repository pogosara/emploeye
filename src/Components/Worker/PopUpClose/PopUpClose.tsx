import {useDispatch, useSelector} from "react-redux";
import { closePopUpAC } from "../../../reducers/reducerPagination";
import { RootStateType } from "../../../reducers/store";

export const PopUpsClose = () => {


    const dispatch = useDispatch();

    const confirmHandler = () =>{
        dispatch(closePopUpAC(false))
        //dispatch(deleteWorkerTC(id))
    }
    const unConfirmHandler = () =>{
        dispatch(closePopUpAC(false))
    }

    return(
        <div>
            <div className={"popUp"}>
                <div className={"popUpContainer"}>
                    <button onClick={confirmHandler}>Yes</button>
                    <button onClick={unConfirmHandler}>No</button>
                </div>

            </div>
        </div>
    )
}
