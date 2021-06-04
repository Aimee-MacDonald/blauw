export const getMainsFlags = state => {
  let mainsFlags = {
    bookingSheet: false,
    checkout: false,
    stock: false,
    notes: false,
    addRoom: false
  }

  return{
    ...mainsFlags,
    [state.activeMain]: true
  }
}