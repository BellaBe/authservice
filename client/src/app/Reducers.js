import { combineReducers} from "redux";
import authReducer from "../auth/state/AuthReducer";
import errorReducer from "../errors/state/errorRedicer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
})