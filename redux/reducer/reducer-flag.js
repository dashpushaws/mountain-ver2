
const reducer = (state = [], action) => {

  switch (action.type) {

    case 'flag/FLAGED':
      if (state.findIndex(item => item.id == action.payload.id) == -1) {
        return [{...action.payload}, ...state ]
      }
      return [...state]

    case 'flag/NOTYET':
      return [...state.filter(item => item.id != action.payload.id)]

    default:
      return state
  }
}
export default reducer



