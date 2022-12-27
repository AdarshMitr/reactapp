import React, { Component } from 'react'

export default class Product extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           ProductID:'',qty:0
        }
      }

      addToCart=(pid)=>{
this.setState({
    ProductID:pid,qty:this.state.qty+1
})


      }

  render() {
    return (
      <div>
        <button onClick={this.addToCart}>Add to Cart</button>
        <Cart ProductID={this.state.ProductID} qty={this.state.qty}></Cart>
      </div>
    )
  }
};



export class Cart extends Component {
constructor(props){
    super(props)
    
    this.state={
        qty:this.props.qty
    }

}

// updateQty=()=>{
//     this.setState({
//         qty:this.state.qty+1
//     })
// }


static getDerivedStateFromProps(props,state){
    if(props.qty !==state.qty){
        return {qty:props.qty}
    }
    return null;
}

componentDidMount(){
    console.log("Execute after component render");
}

componentDidUpdate(){
    console.log('component updated');
}

  render() {
    return (
      <div>
        <h1>CART:{this.state.qty}</h1>
        <button onClick={this.updateQty}>Update Quantity</button>
      </div>
    )
  }
}



