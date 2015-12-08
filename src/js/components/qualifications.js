import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { QualificationAction } from '../actions/actions';

const Qualifications = React.createClass({
  capitalizeFirstLetterForWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  capitalizeFirstLetter(string) {
    var that = this;
    var words = string.split(" ").map((word) => {
      return that.capitalizeFirstLetterForWord(word);
    });
    return words.join(" ");
  },
  componentWillMount() {
    this.props.dispatch(QualificationAction(`/${this.props.current_user.id}/qualifications`));
  },
  renderStackSerices(services){
    return services.map((service, index) => {
      return (
        <div className="col-md-2">
          <div>
           <a className="stack-service-logo hint hint--top"
              data-align="left"
              data-hint=""
              href={service.image_url} >
             <img src={service.image_url} />
           </a>
          </div>
        </div>
      );
    });
  },
  renderQualificationItems(qualifications) {
    return qualifications.map((qualification, index) => {
      var stackElements = this.renderStackSerices(qualification.stack.services)
      var solutionName = this.capitalizeFirstLetter(qualification.solution_name);
      return (
          <div className="col-md-4">
             <div className="qulification-header">
                <span>{solutionName}</span>
             </div>
             <div className="stack-layer">
              {stackElements}
             </div>
          </div>
         );
   });
  },
  render() {
    var qualificationDoms = [];
    if(this.props.qualifications.length>0){
      qualificationDoms = this.renderQualificationItems(this.props.qualifications);
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
