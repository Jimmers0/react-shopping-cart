const initialState = {
  products: [],
  cart: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GETPRODUCTS':
      return {...state, products: action.payload}
    case 'ADD':
        return {...state, cart:[ action.payload, ...state.cart]} 
    case 'REMOVE':
          return {...state, cart: state.cart.filter(c => action.payload !== c.id)}
        
    default:
      return state
  }
}




