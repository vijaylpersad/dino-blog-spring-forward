import './App.css';
import React, { Component } from 'react'
import Post from './Post'
import posts from './posts'

class App extends Component {
  render() {
    const postComponents = posts.map((post, index) => {
      return (
        <Post 
          key={`Post-${index}`}
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
        />
      )
    })
    return(
      <>
        {postComponents}
      </>
    )
  }
}

export default App;
