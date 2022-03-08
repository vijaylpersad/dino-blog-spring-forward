import './App.css';
import React, { Component } from 'react'
import Post from './Post'

class App extends Component {
  render() {
    const post = {
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Check out this body property!",
      comments: ["First comment", "Second Comment", "Great Post!"]
    }
    return(
      <>
      <Post 
        title={post.title} 
        author={post.author} 
        body={post.body}
        comments={post.comments}
      />
      <Post 
      title={post.title} 
      author={post.author} 
      body={post.body}
      comments={post.comments}
      />
      </>
    )
  }
}

export default App;
