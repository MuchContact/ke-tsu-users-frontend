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
  generateArchetypeName(evaluation) {
    return `${evaluation.stack.name}_${evaluation.solution.name}`.replace(/[\s+]/g, '');
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
          <li><img alt={service.name} src={service.image_url}/></li>
      );
    });
    return (
        <ul className="image-tag-container list-unstyled list-inline">
          {tags}
        </ul>
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
              <div className="col-md-3">
                <p>
                  Implementing {evaluation.solution.name} with {evaluation.stack.name} in project {projectName}
                </p>
                <p>Stack including services:</p>
                {stackTags}
                <p>
                  Started at {new Date(evaluation.created_at).toLocaleString()}<br/>
                  Already {`${~~((+new Date() - evaluation.created_at) / 1000 / 60)} minutes`}
                </p>
                {evaluation.status == 'pass' ? <div style={{display: 'block'}} className="label label-success">Test Pass</div> : ''}
              </div>
              <div className="col-md-9">
                <div>
                  <p>First you must install <a href="http://deis.io" target="_blank">deis</a> and <code>git</code> in your computer and then run this commands below in your work directory</p>
                  <pre>
                    git clone git@github.com:aisensiy/{this.generateArchetypeName(evaluation)}.git<br/>
                    cd {this.generateArchetypeName(evaluation)}<br/>
                    rm -rf .git<br/>
                    git init && git add . && git commit -m 'Initial commit'<br/>
                    deis register http://deis.deepi.cn --username={this.generateUserName(evaluation)} --password={this.generateUserName(evaluation)} --email={evaluation.user.name}@thoughtworks.com<br/>
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
