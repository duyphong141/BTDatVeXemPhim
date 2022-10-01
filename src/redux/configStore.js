// Store: chứa các giá trị cần đổi (state) 
import { combineReducers, createStore } from "redux";
import { DatVeReducer } from "./DatVeReducer";

const rootReducer = combineReducers({
    DatVeReducer
})

// export không default (do hằng ko đôi tên được)
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())