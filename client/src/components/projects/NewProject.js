import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import CreateProject from './CreateProject';
import ProjectSummary from './ProjectSummary';
import Checkout from './Checkout';
import Unauthorized from '../Unauthorized';
import './styles/newProject.css';

class NewProject extends Component {
  state = { showCheckout: false }

  renderContent() {
    if (this.state.showCheckout) {
      return <Checkout onCancel={ () => this.setState({ showCheckout: false }) } />;
    }
    return <CreateProject onProjectSubmit={() => this.setState({ showCheckout: true })} />;
  }

  renderCompleteComponent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
          <div>
            <Unauthorized />
          </div>
        );
      default:
        return(
          <div style={{ overflowX: "hidden" }}>
            <div id="create-project-header" className="project-heading">
              Create a project
            </div>
            <hr className="contain-divider1"/>
            <div className="form-contain">
              {this.renderContent()}
              <ProjectSummary />
            </div>
          </div>
        );
    }
  }

  render () {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {this.renderCompleteComponent()}
      </motion.div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default reduxForm({
  form: 'projectForm'
})(connect(mapStateToProps)(NewProject));
