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
               <h4>
                Capability for <span className="label label-primary">{qualification.solution_name}</span> in
                <span className="label label-success">{qualification.project_name}</span>
               </h4>
               <div className="stack-layer">
                 <div>
                  <a className="stack-service-logo hint hint--top" data-align="left" data-hint="A high performance free open source web server powering busiest sites on the Internet" href="/nginx">
                    <img src="http://img.stackshare.io/service/1025/logo-mysql-170x170.png" />
                  </a>
                 </div>
                 <div className="stack-service-name-under">
                  <a className="stack-service-name-under" href="/mysql">MySql</a>
                 </div>
                 <div>
                  <div className="function-name-under"><a className="function-name-under" href="/languages">Databases</a></div>
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
