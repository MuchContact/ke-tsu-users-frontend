import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { CapabilityAction } from '../actions/actions';
import { EvaluationAction, NewEvaluationAction } from '../actions/actions';

const CapabilityChooserDialogue = React.createClass({
  getInitialState: function() {
    return {
      capabilityIndex: -1
    };
  },
  componentWillMount() {
    this.props.dispatch(CapabilityAction(`/${this.props.project_id}/capabilities`));
  },
  clickAnchor(index){
    return function() {
      this.setState({
              capabilityIndex: index
            });
    }.bind(this);
  },
  onChoose(){
    var index = this.state.capabilityIndex;
    if (index <0)
      return;
    var capability = this.props.capabilities[index];
    var evaluationParams = {
      capability_id: capability.id
    };
    var callback = function(){
      this.props.dispatch(EvaluationAction(`/${this.props.current_user.id}/evaluations`))
    }.bind(this);
    this.props.dispatch(NewEvaluationAction(evaluationParams,
                          this.props.project_id,
                          this.props.current_user.id,
                          callback)
                        );
  },
  render() {
    var capability_list = [];
    if(this.props.capabilities && this.props.capabilities.length>0){
      capability_list = this.props.capabilities.map((capability, index) => {
       return <a href="#" onClick={this.clickAnchor(index)} className="list-group-item">
         <h4 className="list-group-item-heading">Capbility {capability.id}</h4>
         <p className="list-group-item-text"><span>Solution:</span> {capability.solution? capability.solution.name:''}</p>
         <p className="list-group-item-text"><span>Stack:</span> {capability.stack? capability.stack.name:''}</p>
       </a>;
     });
    }
    return (
      <div className="modal fade" id="capabilityChooser" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Choose a Capbility</h4>
            </div>
            <div className="modal-body">
              <div className="list-group">
                {capability_list}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.onChoose} className="btn btn-default" data-dismiss="modal">Choose</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    capabilities: state.capabilities.capabilities,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(CapabilityChooserDialogue);
