import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="jumbotron bg-white card py-3">
        <div className="row">
          {/* LEFT SIDE IMAGE */}
          <div className="col-1">
            <img
              height="80"
              src="https://lh3.googleusercontent.com/MnbuPHRjioCEXRTqN7pRo_QJa2CHE4kUKNppiHBRaGnB7oluVft-wzJZG-QQU35ZtHyP=s85"
              className="d-inline-block align-top img-circle mt-3 mr-3" alt="bubble"
            />
          </div>
          {/* LEFT SIDE IMAGE END*/}

          {/* POST INFORMATION */}
          <div className="col-11">
            {/* POST TITLE */}
            <h4>{this.props.post.title}</h4>
            {/* POST BODY */}
            <p>{this.props.post.body}</p>
            <div className="text-center">
              <button className="btn btn-primary m-1" onClick = {()=>this.props.handleEdit(this.props.post.id)} >Edit</button>
              <button className="btn btn-danger m-1" onClick={()=>this.props.handleDelete(this.props.post.id)}>Delete</button>
            </div>
          </div>
          {/* POST INFORMATION END*/}
        </div>
      </div>
    );
  }
}
