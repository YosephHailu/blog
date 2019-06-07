import React, { Component } from "react";

export default class PostAddForm extends Component {
  
  render() {
    return (
      <div className="col-6 ml-3">
      <h5>ADD NEW POST</h5>
        <form onSubmit={this.props.onSubmit}>
          <div className="">
            <input
              type="text"
              name="title"
              className="form-control m-1"
              value={this.props.title}
              placeholder="TITLE"
            />
            <textarea name="body" value={this.props.body} className="form-control m-1 " />
          </div>
          <input type="submit" className="btn btn-success mb-2" value="ADD POST" />
        </form>
      </div>
    );
  }
}
