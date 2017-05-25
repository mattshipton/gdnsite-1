import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Vote.css';

class Vote extends Component {
  handleChange = () => {

  }

  handleSubmit = () => {

  }

  render () {
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
                    <tr>
                      {/* Here we need to map over each jam theme name and print them out in table cells
                        which will allow us to populate the table all at once*/}
                        {/* Example pseudocode for this:
                          themes.map(theme => /*{
                            {/*<td>{/*theme.name*/}</td>*/}
                          })*/ */}

                          {/* Example above might not work properly out of the box in which case we can define
                            a function above which will return the cells we need and simply call the function
                            down here in the table row. Also note that the parentheses above are simply for commenting
                            purposes as that's how commenting is done in JSX. */}
                    </tr>
                    <tr>
                      {/* Here we need to get the number of votes for each jam theme and provide up/down
                        vote buttons for users to vote on the theme that they want for the game jam */}
                    </tr>
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
