const initialState = {
    series: [],
};

const actionTypes = {
    SET_SERIES: 'SET_SERIES',
};

const actionCreators = {
    setSeries: (series) => ({
        type: actionTypes.SET_SERIES,
        payload: series,
    }),
}

const actionHandlers = {
    [actionTypes.SET_SERIES]: (state, action) => ({
        ...state,
        series: action.payload,
    }),
}

export function appReducer(state = initialState, action) {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
}