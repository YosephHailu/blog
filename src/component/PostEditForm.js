import React, { Component } from "react";

export default class PostEditForm extends Component {
  render() {
    return (
      <div className="col-6">
      <h5>EDIT POST</h5>
        <form onSubmit={this.props.onSubmit}>
          <div className="">
            <input
              type="text"
              name="title"
              className="form-control m-1"
              value={this.props.post.title}
              placeholder="TITLE"
              onChange={this.props.handleInputChange}
            />
            <textarea
              name="body"
              value={this.props.post.body}
              onChange={this.props.handleInputChange}
              className="form-control m-1 "
            />
          </div>
          <input
            type="submit"
            className="btn btn-success mb-2"
            value="Edit POST"
          />
        </form>
      </div>
    );
  }
}
