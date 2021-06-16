export default (state = [], {type, payload}) => {
  switch(type){
    case 'CREATE_ROOM':
      return [
        ...state,
        payload
      ]

    case 'DELETE_ROOM':
      return state.filter(room => room._id !== payload)

    case 'UPDATE_ROOM':
      return state.map(room => {
        if(room._id === payload._id){
          return{
            ...room,
            ...payload
          }
        } else {
          return room
        }
      })

    default:
      return state
  }
}