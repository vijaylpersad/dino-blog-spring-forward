import './App.css';
import React, { Component } from 'react'
import Post from './Post'
import posts from './posts'


class App extends Component {
  state = {
    body: '',
    comments: [],
    author: '',
    title: ''
  }

  handleTextChange = (e) => {
    const updatedInput = { [e.target.name]: e.target.value }
    this.setState({
      ...this.state,
      ...updatedInput
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    posts.push(this.state)

    this.setState({
      body: '',
      comments: [],
      author: '',
      title: ''
    })

    console.log(posts)
  }

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

        <form onSubmit={this.handleSubmit}>
        <label htmlFor="author">Name:</label>
        <input 
          name="author" 
          id="author"
          onChange={this.handleTextChange} 
        />

        <label htmlFor="title">Post Title:</label>
        <input 
          name="title" 
          id="title" 
          onChange={this.handleTextChange} 
        />

        <label htmlFor="body">Post:</label>
        <textarea 
          id="body"
          name='body'
          onChange={this.handleTextChange}
          value={this.state.body}
        >
        </textarea>

        <input type="submit" />
      </form>
      </>
    )
  }
}

export default App;
