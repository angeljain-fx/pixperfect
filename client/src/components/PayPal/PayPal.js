import React, { Component } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import PayPalPaymentExecuter from './PayPalPaymentExecuter';
import Unauthorized from '../Unauthorized';
import './styles/payPal.css';

class PayPal extends Component {
  renderContent() {
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
          <div className="credPayPalDashboard">
            <div className="addCreditsContainer">
              <h2 className="addCreditsHeader">Add Credits</h2>
            </div>
            <div className="credPayPalInContainer">
              <PayPalPaymentExecuter />
            </div>
          </div>
        );
    }
  }
  render() {
    return(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {this.renderContent()}
      </motion.div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(PayPal);
