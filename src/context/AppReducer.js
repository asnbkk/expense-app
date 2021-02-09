export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transacitons: state.transacitons.filter(
          (item) => item.id !== action.payload
        ),
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transacitons: [...state.transacitons, action.payload],
      };

    default:
      return state;
  }
};
