import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Post from "./component/Post";
import PostAddForm from "./component/AddPost";
import PostEditForm from "./component/PostEditForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial States
      edit: false,
      post: [],
      posts: []
    };
  }

  componentWillMount = () => {
    //fetch post 
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json =>
        //change posts status to response value
        this.setState({
          posts: json
        })
      );
  };

  //handle Post registration form
  onSubmit = event => {
    event.preventDefault();
    const post = {
      body: event.target.body.value,
      title: event.target.title.value
    };
    //send post request to placeholder API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "Application/json"
      }
    })
      .then(res => res.json())
      .then(json =>
        //add returned post to state
        this.setState({
          posts: [{ ...json }, ...this.state.posts]
        })
      );
  };

  // handle user input
  handleInputChange = event => {
    this.setState({ post: { ...this.state.post, [event.target.name]: event.target.value } });

    //when user makes change to post make change to post information instantly. 
    const updatedPosts = this.state.posts.map(post => {
     
      if(post.id === this.state.post.id){
        return this.state.post;
      }
      return post;
    })
    this.updatePost(updatedPosts)    
  };

  //display editable post information
  handleEdit = id => {
    const post = this.state.posts.find(post=> post.id === id);

    this.setState({
      post: post,
      edit: true
    });

  };


  handleUpdate = event => {

    event.preventDefault();
    const updatedPosts = this.state.posts.map(post => {
     
      if(post.id === this.state.post.id){
        return this.state.post;
      }
      return post;
    })
    this.updatePost(updatedPosts)

    this.setState({
      post: [],
      edit: false
    });
  };

  //update post state value
  updatePost = (updatedPosts) =>{
    this.setState({
      posts: updatedPosts
    });
  }

  //remove post from state
  handleDelete = id => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id),
      ...this.state.posts
    });
  };

  render() {
    const postList = this.state.posts.map(post => (
      <Post
        key={post.id}
        post={post}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    ));
    return (
      <React.Fragment>
        <div className="App">
          <Navbar />
          {!this.state.edit ? (
            <PostAddForm
              edit={this.state.edit}
              post={this.state.post}
              onSubmit={this.onSubmit}
            />
          ) : (
            <PostEditForm
              post={this.state.post}
              handleInputChange={this.handleInputChange}
              onSubmit={this.handleUpdate}
            />
          )}
          <div className="container col-md-10">{postList}</div>;
        </div>
      </React.Fragment>
    );
  }
}
