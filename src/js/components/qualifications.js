import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { QualificationAction } from '../actions/actions';

const Qualifications = React.createClass({
  componentWillMount() {
    this.props.dispatch(QualificationAction(`/${this.props.current_user.id}/qualifications`));
  },
  render() {
    var qualificationDoms = [];
    if(this.props.qualifications.length>0){
      qualificationDoms = this.props.qualifications.map((qualification, index) => {
       return (
            <div className="col-md-4">
               <div className="qulification-header">
                  <span>{qualification.solution_name}</span>
               </div>
               <div className="stack-layer">

                 <div className="col-md-2">
                   <div>
                    <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                      <img src="http://img.stackshare.io/service/1025/logo-mysql-170x170.png" />
                    </a>
                   </div>
                 </div>

                 <div className="col-md-2">
                  <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                    <img src="https://jersey.java.net/images/jersey_logo.png" />
                  </a>
                 </div>
                 <div className="col-md-2">
                  <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                    <img src="http://img.stackshare.io/service/27/sBsvBbjY.png" />
                  </a>
                 </div>

                 <div className="col-md-2">
                  <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                    <img src="http://img.stackshare.io/service/995/K85ZWV2F.png" />
                  </a>
                 </div>

                 <div className="col-md-2">
                  <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                    <img src="http://img.stackshare.io/service/1285/ieibivdE.jpeg" />
                  </a>
                 </div>

               </div>
            </div>
           );
     });
    }
    return (
      <div className="row">
        <div className="page-header">
          <h3>Qualifications</h3>
        </div>
        <div className="row">
          {qualificationDoms}
        </div>
      </div>

    );
  }
});

function mapStateToProps(state) {
  return {
    qualifications: state.qualifications.qualifications,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Qualifications);
