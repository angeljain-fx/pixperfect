import React, { Component } from 'react';
import $ from 'jquery';

class PayPalBundles extends Component {
  componentDidMount() {
    $(".bundleAmountButtons").click(function(){
      $('html, body').animate({
               scrollTop: $("html").offset().top
        }, 1000);
      $("#inner-paypal-bundles").slideUp(750);
      $("#bundle-button-1").prop('disabled', true);
      $("#bundle-button-1").addClass('processingBundlePayment');
    });

  }

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div id="inner-paypal-bundles">
        <form onSubmit={this.onFormSubmit} className="bundleAmountButtonsCont" >
          <button
            type="submit"
            value="450"
            onClick = {(e) => this.setState({ term: e.currentTarget.value })}
            className="bundleAmountButtons"
          >
          <span>500 Credits for 450$</span><span className="payBundleExtraInfo" >Recommended for 3 design-needs every month</span>
          </button>
          <button
            type="submit"
            value="750"
            onClick = {(e) => this.setState({ term: e.currentTarget.value })}
            className="bundleAmountButtons"
          >
          <span>800 Credits for 750$</span><span className="payBundleExtraInfo" >Recommended for 7 design-needs every month</span>
          </button>
          <button
            type="submit"
            value="1000"
            onClick = {(e) => this.setState({ term: e.currentTarget.value })}
            className="bundleAmountButtons"
          >
            <span>1100 Credits for 1000$</span><span className="payBundleExtraInfo" >Recommended for 12 design-needs every month</span>
          </button>
          <button
            type="submit"
            value="1500"
            onClick = {(e) => this.setState({ term: e.currentTarget.value })}
            className="bundleAmountButtons"
          >
            <span>1600 Credits for 1500$</span><span className="payBundleExtraInfo" >Recommended for 15 design-needs every month</span>
          </button>
        </form>
      </div>
    );
  }
}

export default PayPalBundles;
