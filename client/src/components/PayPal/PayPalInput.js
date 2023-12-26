import React from 'react';
import $ from 'jquery';

import './styles/payPal.css';

class PayPalInput extends React.Component {
  componentDidMount () {
    $("#paypal-confirm").click(function(){
      $("#paypal-confirm").slideUp(750);
      $("#paypal-input").slideUp(750);
      $(".creditsIMP").slideUp(750);
      $("#bundle-button-1").prop('disabled', true);
      $("#bundle-button-1").addClass('processingBundlePayment');
    });
    if($("#paypal-input").text() === '') {
      $("#paypal-confirm").prop('disabled', true);
      $("#paypal-confirm").addClass("paypalConfirmDisabled");
    }
    $('#paypal-input').on('change input', function() {
      $("#paypal-confirm").prop('disabled', false);
      $("#paypal-confirm").removeClass("paypalConfirmDisabled");
    });
  }

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} >
          <div className="inputFormInWrap">
            <div className="innerPayPalContainer">
              <input
                type="number"
                value={this.state.term}
                onChange = {(e) => this.setState({ term: e.target.value })}
                id="paypal-input"
                className="paypalAmountInput"
                placeholder="0 Credits"
                min="1"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <button className="amountConfirmPayPal" type="submit" id="paypal-confirm">Confirm Amount</button>
              <p className="creditsIMP">By adding credits to your wallet, you agree to our <a href="#" style={{color: "#0085ff"}}>Terms Of Service</a> and <a href="#" style={{color: "#0085ff"}}>Privacy Policy.</a></p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PayPalInput;
