const {createStore}=require("redux")

const initialState = {
  cart: [],
  total:0
};

function Shoping(state=initialState,action){
    switch(action.type){
        case"ADD_ITEM":
        return{
            ...state,
            cart:[...state.cart,action.payload.name],
            total:state.total +action.payload.price
        }

        case "REMOVE":
            return{
                cart:state.cart.filter(item=>{
                    item!==action.payload.name
                })
            }
    }

}


const store = createStore(Shoping)
store.subscribe(()=>{
    console.log(store.getState());
    
})
store.dispatch({type: "ADD_ITEM",payload: { name: "Shirt", price: 500 }});
store.dispatch({type: "ADD_ITEM",payload: { name: "pants", price: 500 }});