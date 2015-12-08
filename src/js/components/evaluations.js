import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { EvaluationAction } from '../actions/actions';

const Evaluations = React.createClass({
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
    this.props.dispatch(EvaluationAction(`/${this.props.current_user.id}/evaluations`));
  },
  generateRepositoryUri(evaluation){
    var repository = "https://";
    if(evaluation.stack)
      repository += evaluation.stack.name;
    repository += '-' + evaluation.projectName;
    if(evaluation.solution)
      repository += evaluation.solution.name;

    var random = Math.floor((Math.random() * 1000) + 1);
    repository += '-' + this.props.current_user.id + '-' + random;
    return repository.replace(/\s/g, '').replace('+', '');
  },
  render() {
    var evalus = [];
    if(this.props.evaluations && this.props.evaluations.length>0){
      evalus = this.props.evaluations.map((evaluation, index) => {
        var status = evaluation.status;
        if(!evaluation.status)
          status="NEW";
        var repository = this.generateRepositoryUri(evaluation);
        var projectName = this.capitalizeFirstLetter(evaluation.projectName);
       return (
            <div className="row evaluation-row">
              <div className="col-md-4">
                <div className="service-name-trending">
                {projectName}
                </div>
                <div className="image-tag-container">
                  <img alt="Fbbb494a7eef5f9278c6967b6072ca3e" src="http://img.stackshare.io/service/586/fbbb494a7eef5f9278c6967b6072ca3e.png"/>
                  <img alt="Amazon route 53" src="http://img.stackshare.io/service/38/amazon-route-53.png" />
                  <img alt="Usjimvns" src="http://img.stackshare.io/service/1722/USjimvnS.png" />
                  <img alt="Falgg2jybmhgk16y62lr" src="http://img.stackshare.io/service/845/falgg2jybmhgk16y62lr.png" />
                  <img alt="Elasticsearch" src="http://img.stackshare.io/service/841/elasticsearch.png" />
                </div>
              </div>
              <div className="col-md-8">
                <p>Solution: {evaluation.solution?evaluation.solution.name:''}</p>
                <p>Stacks: {evaluation.stack?evaluation.stack.name:''}</p>
                <div className="input-group">
                  <input type="text" className="form-control"
                    placeholder="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={repository}/>
                  <span className="input-group-addon" id="basic-addon2">Copy</span>
                </div>
              </div>
            </div>
           );
     });
    }
    return (
      <div className="row">
        <div className="page-header">
          <h3>Evaluations</h3>
        </div>
        {evalus}
      </div>

    );
  }
});

function mapStateToProps(state) {
  return {
    evaluations: state.evaluation.evaluation,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Evaluations);
