import * as Constants from '../Constants';
import {makeActionCreator, store} from '../Store/store';
import axios from 'axios';

export const addFirmToList = (payload) => makeActionCreator(Constants.ADD_FIRM_TO_LIST, payload);
export const setFirmsFetchError = (payload)=> makeActionCreator(Constants.SET_FIRMS_FETCH_ERROR, payload);
export const setBillPreCheckError = (payload)=> makeActionCreator(Constants.SET_BILL_PRE_CHECK_ERROR, payload);
export const setBillFound = (payload)=> makeActionCreator(Constants.SET_BILL_FOUND, payload);
export const setBillAddedSuccess = (payload)=> makeActionCreator(Constants.SET_BILL_ADDED_SUCCESS, payload);

const token = (localStorage.getItem("JWTtoken") != null)?localStorage.getItem("JWTtoken"):sessionStorage.getItem("JWTtoken");
const headers = {
    Authorization: token,
}

export const addBillToDb = (data) => async (dispatch, getState) => {
    return preCheck(data).then(() => console.log("PreChecks Done!!")).then(async () => {
        console.log("After PreChecks");
        const curr = getState().addBillReducer;
        if(curr.billFound === 0  && curr.billPreCheckError === 0)
        {
            try {
                const postResp = await axios({
                    url: Constants.BASE_URL + "/addBill",
                    method: 'POST',
                    headers: headers,
                    data: data,
                });
                store.dispatch(setBillAddedSuccess(1));
                console.log(postResp);
            } catch (err) {
                console.log(err.message);
            }
        }
    });
}

async function preCheck(data) {
    store.dispatch(setBillFound(0));
    store.dispatch(setBillPreCheckError(0));
    console.log("Inside PreCheck");
    try {
        const res = await axios({
            url: Constants.BASE_URL + '/findBill/firm/' + data.firmName + "/bill/" + data.billNo + "/user/" + data.username,
            method: 'GET',
            headers: headers
        });
        if (res.data.length > 0) {
            console.log("Bill already Added");
            store.dispatch(setBillFound(1));
        } else {
            console.log(res);
            console.log("Bill not added.");
        }
        return res;
    } catch (error) {
        console.log(error.message);
        store.dispatch(setBillPreCheckError(1));
        return error;
    }
}
