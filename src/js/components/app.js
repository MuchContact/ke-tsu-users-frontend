import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { pushState } from 'redux-router';

const App = React.createClass({
  render() {
    return (
        <div className="container">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <img alt="Brand"
                      src="https://c.na32.content.force.com/servlet/servlet.ImageServer?id=01550000000Yo0H&oid=00D500000007lOm&lastMod=1350290446000"
                      className="logo"/>
                </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/" href="javascript: void(0)">My Profile</Link></li>
                  <li><a href="#">Logout</a></li>
                </ul>
                <form className="navbar-form navbar-right" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
              </div>
            </div>
          </nav>

          <div className="modal fade" id="capabilityChooser" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Choose a Capbility</h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Choose</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="historyViewer" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Assignments History</h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 jumbotron">
              <div className="thumbnail">
                <img src="" alt="User Picture" className="user-image"/>
                <div className="caption">
                  <h3>Zhang Liang</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="panel panel-default">
                <div className="panel-heading">Current Assignment</div>
                <ul className="list-group">
                  <li className="list-group-item">Project 1</li>
                </ul>
                <div className="panel-body">
                  <p>Project Description</p>
                  <button type="button"
                          className="btn btn-info btn-lg"
                          data-toggle="modal"
                          data-target="#capabilityChooser">
                          Apply Evaluation
                  </button>

                </div>
              </div>
              <button type="button"
                      className="btn btn-info btn-lg"
                      data-toggle="modal"
                      data-target="#historyViewer">
                      History
              </button>
            </div>
          </div>
          <div className="page-header">
            <h3>Evaluations</h3>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Solution</th>
                  <th>Stack</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
          <div className="page-header">
            <h3>Qualifications</h3>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Solution</th>
                  <th>Stack</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
});

export default App;
