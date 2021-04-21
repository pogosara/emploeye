export type CommonReducer = {
    userTotalCount: number,
    currentPage: number,
    pageItemCount: number
    isShowPopUp: boolean
    closePopUp: boolean
}

const InitialState: CommonReducer = {
    userTotalCount: 40,
    currentPage: 1,
    pageItemCount: 10,
    isShowPopUp: false,
    closePopUp: false
}

export const reducerPagination = (state = InitialState, action: ActionType) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
        case "SET_TOTAL_USER_COUNT":
        case "SET_PAGE_ITEM_COUNT":
        case "OPEN_POPUP":
        case "CLOSE_POPUP":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const  setPageItemCountAC = (pageItemCount: number) => ({
    type: "SET_PAGE_ITEM_COUNT", payload: {pageItemCount}
}as const)

export const setTotalUserCountAC = (userTotalCount: number) => ({
    type: "SET_TOTAL_USER_COUNT", payload: {userTotalCount}
}as const)

export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET_CURRENT_PAGE", payload: {currentPage}
} as const)

export const openPopUpAC = (isShowPopUp: boolean) => ({
    type: "OPEN_POPUP", payload: {isShowPopUp}
} as const)

export const closePopUpAC = (closePopUp: boolean) => ({
    type: "CLOSE_POPUP", payload: {closePopUp}
} as const)


type setCurrentPageTypeAC = ReturnType<typeof setCurrentPageAC>
type setTotalUserCountTypeAC = ReturnType<typeof setTotalUserCountAC>
type setPageItemCountTypeAC = ReturnType<typeof setPageItemCountAC>
type openPopUpTypeAC = ReturnType<typeof openPopUpAC>
type closePopUpTypeAC = ReturnType<typeof closePopUpAC>

type ActionType = setCurrentPageTypeAC | setTotalUserCountTypeAC |
    setPageItemCountTypeAC | openPopUpTypeAC | closePopUpTypeAC
