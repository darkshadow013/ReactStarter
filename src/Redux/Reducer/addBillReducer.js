import * as Constants from '../Constants'
const initialState = {
    billNo: "",
    amount: 0,
    firmsList: [],
    firmsFetchError: 0,
    billFound: 0,
    billPreCheckError: 0,
    billAddedSuccess: 0,
};

function addBillReducer(state = initialState, action) {
    switch(action.type) {
        case Constants.SET_BILL_NO: {
            return Object.assign({}, state, {
                billNo: action.payload
            })
        }
        case Constants.SET_AMOUNT: {
            return Object.assign({}, state, {
                amount: action.payload
            })
        }
        case Constants.ADD_FIRM_TO_LIST: {
            return Object.assign({}, state, {
                firmsList: state.firmsList.concat(action.payload)
            })
        }
        case Constants.SET_FIRMS_FETCH_ERROR: {
            return Object.assign({}, state, {
                firmsFetchError: action.payload
            })
        }
        case Constants.SET_BILL_FOUND: {
            return Object.assign({}, state, {
                billFound: action.payload
            })
        }
        case Constants.SET_BILL_ADDED_SUCCESS: {
            return Object.assign({}, state, {
                billAddedSuccess: action.payload
            })
        }
        case Constants.SET_BILL_PRE_CHECK_ERROR: {
            return Object.assign({}, state, {
                billPreCheckError: action.payload
            })
        }
        default:
            return state;
    }
}

export default addBillReducer;