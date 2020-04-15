import React from "react";

class MoviePages extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.props.prevPage}
          disabled={this.props.page === 1}
        >
          Prev
        </button>
        <p>
          Page {this.props.page} of {this.props.total_pages}
        </p>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.props.nextPage}
          disabled={this.props.page === this.props.total_pages}
        >
          Next
        </button>
      </div>
    );
  }
}

export default MoviePages;
