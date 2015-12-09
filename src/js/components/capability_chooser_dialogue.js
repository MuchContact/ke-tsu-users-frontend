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
  onChoose(index){
    return function() {
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
    }.bind(this);

  },
  render() {
    var capability_list = [];
    if(this.props.capabilities && this.props.capabilities.length>0){
      capability_list = this.props.capabilities.map((capability, index) => {
       return(
           <li className="list-group-item">
             Capability of implementing {capability.solution.name} with {capability.stack.name}
             <button type="button" onClick={this.onChoose(index)} className="btn btn-primary btn-xs" style={{float: 'right'}} data-dismiss="modal">Choose</button>
           </li>
       )
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
                <ul className="list-group">
                  {capability_list}
                </ul>
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
