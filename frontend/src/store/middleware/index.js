import {applyMiddleware} from "redux";
import logger from "./logger";
import thunk from 'redux-thunk'

/**
 * @description Combines middleware function and exports them
 */

export default applyMiddleware(thunk,logger)
