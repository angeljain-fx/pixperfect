import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import PayPalInput from './PayPalInput';
import PayPalBundles from './PayPalBundles';

function PayPalPayment({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const isFirstRun = useRef(true);

  useEffect(() => {
    $("#delayMessagePayPal").hide();
    $("#delayMessagePayPalLink").click(function(){
      $("#delayMessagePayPal").slideToggle(750);
    });

    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal'
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
        <div>
          <div className="paypalSuccessContainer">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" viewBox="0 0 507.2 507.2">
                <defs>
                  <filter id="Path_726" x="76.2" y="198.6" width="201.2" height="202" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                  </filter>
                  <filter id="Path_727" x="155.4" y="124.2" width="275.6" height="274.8" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="3" result="blur-2"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur-2"/>
                    <feComposite in="SourceGraphic"/>
                  </filter>
                </defs>
                <g id="checked" transform="translate(0 0)">
                  <path id="Path_728" data-name="Path 728" d="M253.6,0C393.659,0,507.2,113.541,507.2,253.6S393.659,507.2,253.6,507.2,0,393.659,0,253.6,113.541,0,253.6,0Z" transform="translate(0 0)" fill="#0fdb00"/>
                  <g id="Group_65" data-name="Group 65" transform="translate(0 5)">
                    <g transform="matrix(1, 0, 0, 1, 0, -5)" filter="url(#Path_726)">
                      <path id="Path_726-2" data-name="Path 726" d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8c-11.2-11.2-11.2-30.4,0-41.6L116.8,208c11.2-11.2,30.4-11.2,41.6,0Z" transform="translate(0 5)" fill="#fff"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 0, -5)" filter="url(#Path_727)">
                      <path id="Path_727-2" data-name="Path 727" d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6Z" transform="translate(0 5)" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className="payPayPalSuccess">Payment Successful</h2>
              <p className="successWalletMessage">Your wallet balance will be updated within 1 business hour.<br /><span id="delayMessagePayPalLink" style={{color: "#0085ff", textDecoration: "underline", marginTop: "4px", cursor: "pointer"}}>Why is it delayed?</span></p>
              <div id="delayMessagePayPal" className="delay-message-paypal">
                StellarEffex takes security of their clients very seriously and for the same reason payments are first reviewed by Accounts Team. Rest assured since you are seeing this, your payment has been successfully sent to StellarEffex and your Project Manager will contact you soon.
              </div>
            </div>
            <div>
              <button type="button" className="addMoreCreditsOnSuccess" onClick={(e) => {e.preventDefault();window.location.reload();}}>Add More Credits<i className="fas fa-plus-circle"></i></button>
              <Link className="backToDashboardOnSuccess" to={"/projects"}>Back To Dashboard</Link>
            </div>
          </div>
        </div>
    );
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {error && <div>Error during transaction: {error.message}</div>}
      <h2 className="creditCost">
        {product.domAmount} <span className="creditCostAmount">${product.price || "0"}</span>
      </h2>
      <div className="paypalBtnsContainer">
        <div ref={paypalRef} style={{marginTop: "10px"}} />
      </div>
      <div className="creditImpListContainer">
        <div style={{ display: "flex", alignItems: "flexStart", margin: "12.5px 0px" }}>
          <i className="far fa-check-square"></i>
          <p className="cILCPoints">Please Note that <b>1 credit = 1$</b>.</p>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "12.5px 0px" }}>
          <i className="far fa-check-square"></i>
          <p className="cILCPoints">No hidden charges! You will be charged just the amount of credits you add into your wallet.</p>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "12.5px 0px" }}>
          <i className="far fa-check-square"></i>
          <p className="cILCPoints">Your payment is secure. All payments are encrypted and processed through 128bit SSL encryption technology of PayPal.</p>
        </div>
      </div>
    </div>
  );
}

class PayPalPaymentExecuter extends React.Component {
  componentDidMount() {
    $("#paypal-bundles").hide();
    $("#bundle-button-1").click(function(){
      if(!$('#bundle-button-1').hasClass('processingBundlePayment')) {
        $("#paypal-bundles").slideToggle(750);
        $("#paypal-credit-input").slideToggle(750);
      }
    });
  }

  state = { inputVal: '' };

  onSearchSubmit = (term) => {
    console.log(term);
    this.setState({
      inputVal: term
    });
  }

  render() {
    const product = {
      price: this.state.inputVal,
      name: 'StellarEffex Credits',
      domAmount: 'You will be charged',
      description: 'Credits for Design Hours'
    };
    return (
      <div className="executerContainer">
        <div id="paypal-credit-input">
          <PayPalInput onSubmit={this.onSearchSubmit}  />
        </div>
        <PayPalPayment product={product} />
        <div className="payPalOrContainer">
          <div className="executerDivider"></div>
          <div className="payPalOr">OR</div>
          <div className="executerDivider"></div>
        </div>
        <div className="bundleButtonPayPalContainer">
          <div className="bundleButton1" id="bundle-button-1" >
            Add Credits in Bundle
          </div>
          <p className="bundlePayPalDiscountMs"><i className="fas fa-tags"></i>Discounted price for bundled purchase!</p>
        </div>
        <div id="paypal-bundles">
          <PayPalBundles onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }

}

export default PayPalPaymentExecuter;
