const koalaReducer = (state = {koalas:[]}, action) => {
    switch(action.type) {
        case 'SET_KOALAS':
            return {...state, koalas:action.payload}
    }
}

export default koalaReducer;