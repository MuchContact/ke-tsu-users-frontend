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
  generateUserName(evaluation) {
    return `${evaluation.user.name}${evaluation.created_at}`;
  },
  generateRepositoryUri(evaluation){
    var repository = "";
    if (evaluation.stack)
      repository += evaluation.stack.name;
    repository += '-' + evaluation.projectName;
    if (evaluation.solution)
      repository += evaluation.solution.name;

    var random = Math.floor((Math.random() * 1000) + 1);
    repository += '-' + this.props.current_user.id + '-' + random;
    return repository.replace(/\s/g, '').replace('+', '');
  },
  renderStackTags(services){
    var tags = services.map((service) => {
      return (
          <img alt={service.name} src={service.image_url}/>
      );
    });
    return (
        <div className="image-tag-container">
          {tags}
        </div>
    );
  },
  render() {
    var evaluations = [];
    if (this.props.evaluations && this.props.evaluations.length > 0) {
      evaluations = this.props.evaluations.map((evaluation, index) => {
        var status = evaluation.status;
        if (!evaluation.status)
          status = "NEW";
        var repository = this.generateRepositoryUri(evaluation);
        var projectName = this.capitalizeFirstLetter(evaluation.projectName);

        var stackTags = this.renderStackTags(evaluation.stack.services);
        return (
            <div className="row evaluation-row">
              <div className="col-md-4">
                <div className="service-name-trending">
                  {projectName}
                </div>
                {stackTags}
              </div>
              <div className="col-md-8">
                <div>
                  <p>Run this commands in your project dir</p>
                  <pre>deis register http://deis.tw.com --username={this.generateUserName(evaluation)} --password={this.generateUserName(evaluation)} --email={evaluation.user.name}@thoughtworks.com<br/>
                    deis create {repository} <br/>
                    ssh-keygen -f ~/.ssh/{repository} -t rsa -N '' <br/>
                    chmod 400 ~/.ssh/{repository}* <br/>
                    deis keys:add ~/.ssh/{repository}.pub <br/>
                    git remote add deis master <br/>
                    git remote set-url deis ssh://git@deis.deepi.cn:2222/{repository}.git
                  </pre>
                  <p>And then you can run <code>git push deis master</code> to submit your code to the repository and waiting for verfication.</p>
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
          {evaluations}
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
