import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Vote.css';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null, themes: []}
  }

  handleChange = () => {

  }

  handleSubmit = () => {

  }

  componentWillMount = () => {
    fetch("http://localhost:5000/api/vote").then(response => response.json())
      .then((json) => {
        this.setState({
          user: json.user,
          themes: json.themes
        });
      });
  }

  render () {
    let themeTable = null;
    if (this.state.themes === undefined || this.state.themes.length === 0) {
      themeTable = <tr><th>There are no themes :(</th></tr>;
    } else {
      themeTable = this.state.themes.map((t) => {
      return <div><tr><th>{t.value.name}</th></tr>{
        t.canVote ? <tr><th><a className="text-danger" href="/votes/{t.id}"><i class="text-danger fa fa-heart"></i> Upvote</a></th></tr> : <tr><th><a class="text-default" href="/votes/{t.id}"><i class="text-default fa fa-thumbs-o-down"></i> Downvote</a></th></tr>
        }</div>
      })
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-holder">
              <h1 className="text-center">Game Dev Network</h1>
              <h4 className="text-center">Vote for your favorite Game Jam theme or submit a new theme!</h4>
              <h6 className="text-center">*Remember, you only have until Saturday May 27th 00:00 GMT to vote!</h6>
              <h6 className="text-center">You must <Link to="/login">sign in</Link> before you can add a theme or vote.</h6>
              <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.handleChange} />
                  <button className="btn btn-default">Submit</button>
                </div>
              </form>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Theme Name</th>
                      <th>Up/Down Vote</th>
                    </tr>
                  </thead>
                    <tbody>
                      { themeTable }
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;