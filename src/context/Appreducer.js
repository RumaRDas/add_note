export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                tracsactions: state.tracsactions.filter(tracsaction => tracsaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    tracsactions:[action.payload,...state.tracsactions]
                }
        default:
            return state;
    }
}