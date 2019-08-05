import React, { useEffect } from 'react'

// import { addToCart } from '../actions/actions.products.js/index.js.js'
import { getProducts } from '../actions/actions.products.js';
import { useSelector } from 'react-redux';
import { add } from '../actions/actions.products.js';
import { remove } from '../actions/actions.products.js';

export default props => {
        
        let all = true

        const products = useSelector(appState => appState.products)

        useEffect (() => {
            
            getProducts()
            console.log("unique",uniqueProducts)
        
        },[])

         const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          })


          const cart = useSelector(appState => appState.cart)
 

    const total = useSelector(appState => appState.cart.map(grandtotal => grandtotal.price)).reduce((a, b) => a + b, 0)

    const uniqueProducts = Array.from(new Set(cart));

    console.log(total)
    console.log(cart)

    return (
        <div className="maincontainer">

            <section className="thecart">
            <div className="cart">
            
            
            {uniqueProducts.map(item => (

               
                
                <div key={Math.floor((Math.random() * 1000) + 1)}> 
                <div className="cartitem">
                    <div>
                    <p><img className="productimgcart" src={`/assets/` + item.sku + `_2.jpg`} alt="prodimg"/></p>
                    </div>
                    <div>
                    <p className="titlecart">{item.title}</p> 
                    <p>{formatter.format(item.price)}</p>
                    <p><button type="button" onClick={e => remove(item.id)}>X</button></p>
                    </div>
                    

                    
                </div>  
              
                </div>
               
            ))
    }
            
            {total === 0 ? <p className="totalnone">Subtotal: {formatter.format(total)}</p> : <p className="total">Subtotal: {formatter.format(total)}</p>}
            </div>
            </section>




            <section className="shelf">
                <div className="options">
                    <div>
                    {products.length} Product(s) found.
                    </div>
                    <div className="orderby">
                        Order by 
                        <select className="select" placeholder="Select">
                        <option>Select</option>
                        <option>Lowest to Highest</option>
                        <option>Highest to Lowest</option>
                    </select>
                  
                    </div>
                
                </div>
                <div className="product">
            {all === true ? products.map(item => (

                <div key={item.id} className="productcontainer">
                    {item.isFreeShipping === true ? <p className="free">Free Shipping</p> : <p className="notfree">Free Shipping</p>} 
                    <p><img className="productimg" src={`/assets/` + item.sku + `_1.jpg`} alt="prodimg"/></p>
                    <div className="infocontainer">
                    <p className="title">{item.title}</p>
                        <div className="goldbox"></div>
                        <   p>{formatter.format(item.price)}</p>
                        </div>
                    <button className="addtocart" onClick={e => add(item)} type="submit">Add to Cart</button>
                </div> 
            )) : ' '}

                
                </div>
            </section>
        </div>

            
    )
}

