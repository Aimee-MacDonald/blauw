export const getMainsFlags = state => {
  let mainsFlags = {
    bookingSheet: false,
    checkout: false,
    stock: false,
    notes: false
  }

  return{
    ...mainsFlags,
    [state.activeMain]: true
  }
}