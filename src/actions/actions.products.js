import store from '../store'
import axios from 'axios'




export function getProducts() {
  
    axios.get("/products").then (resp => {
      store.dispatch ({
        type: 'GETPRODUCTS',
        payload: resp.data
      })

    })
}

export function add(item){
  
  store.dispatch ({
    type: 'ADD',
    payload: item
             
  })
  
}

export function remove(id) {
  store.dispatch({
    type: 'REMOVE',
    payload: id
  })
 
}

 


