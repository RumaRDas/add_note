export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                tracsactions: state.tracsactions.filter(tracsaction => tracsaction.id !== action.payload)
            }
        default:
            return state;
    }
}