var initState = {
    count:0,
}

function reducer(state=initState, action) {
    switch (action.type) {
        case 'tang':
            return {
                count: state.count + 1,
            }
        case 'giam': 
            return {
                count: state.count -1,
            }
        default:
            return state;
    }
}


export default reducer;