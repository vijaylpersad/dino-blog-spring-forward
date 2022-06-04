import './App.css';
import React, { Component } from 'react'
import Post from './Post'
import posts from './posts'

class App extends Component {
//controlled form state
  state = {
    title: '',
    author: '',
    body: '',
    comments: []
  }

  handleSubmit = e => {
    //prevent default behavior of synthetic form submission event
    e.preventDefault()
    console.log(e)
    //add whatever is in state to the array of posts
    posts.push(this.state)
    //reset state to trigger a re-render
    this.setState({
      title: '',
      author: '',
      body: '',
      comments: []
    })
  }

  handleTextChange = (e) => {
    //make this function handle ANY input
    const updatedInput = { [e.target.name]: e.target.value }
    //console.log(updatedInput)
    this.setState({...updatedInput}, () =>
      console.log(this.state)
    )
    //input change event synthetic event
    // do not need previous value in a controlled form
    //triggers re-render on every key press
    // this.setState({
    //   body: e.target.value
    // }, () => console.log(this.state))
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
          <label htmlFor="author-name">Name:</label>
          <input
            name='author'
            onChange={this.handleTextChange}
            value={this.state.author}
            type='text'
            id='author-name'
          />


          <label htmlFor='title'>Post: Title</label>
          <input 
            type='text' 
            id='title' 
            placeholder='enter title'
            name='title'
            onChange={this.handleTextChange}
          />
          <label htmlFor='body'>Post:</label>
          <textarea
            id='body'
            //need some stuff for controlled form -- 1. add event handler for when user types into form (onChange handler) that updates state
            onChange={this.handleTextChange}
            //2. set value of input to be what is in the state
            value={this.state.body}
            name='body'
          >

          </textarea>

          <input type="submit" />
        </form>
      </>
    )
  }
}

export default App;
