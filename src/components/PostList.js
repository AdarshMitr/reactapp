import axios from 'axios'
import React, { Component } from 'react'

export default class PostList extends Component {
constructor(props) {
  super(props)

  this.state = {
    posts:[]
  }
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/postssdsd")
    .then(response=>{
console.log(response);
    })
    .catch(error=>{
console.log(error);
    })
}

  render() {
    return (
      <div>
List Post Data
      </div>
    )
  }
}
