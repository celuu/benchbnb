import csrfFetch from "./csrf";

export const SET_BENCHES = "benches/setBenches";
export const ADD_BENCH = "benches/addBench";

//ACTION CREATOR
export const setBenches = (benches) => ({
    type: SET_BENCHES,
    payload: benches
})

export const addBench = (bench) => ({
    type: ADD_BENCH,
    payload: bench
})

// THUNK ACTION CREATORS
export const fetchBenches = () => async dispatch => {
    let res = await csrfFetch('/api/benches');
    if(res.ok){
        let data = await res.json();
        dispatch(setBenches(data))
    }
}

export const fetchBench = (benchId) = async dispatch => {
    let res = await csrfFetch(`/api/benches/${benchId}`);
    if(res.ok){
        let bench = await res.json();
        dispatch(addBench(bench));
    }
}

export const createBench = (bench) => async dispatch => {
    let res = await csrfFetch("/api/benches", {
      method: "POST",
      body: JSON.stringify(bench),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    if (res.ok){
        let newBench = await res.json();
        dispatch(addBench(newBench))
    }
}

const benchesReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case SET_BENCHES:
            return {...nextState, ...action.payload}
        case ADD_BENCH:
            return { ...nextState, ...action.payload };   
        default:
            return state;
    }
}

export default benchesReducer;