import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import './styles/checkout.css';
import './styles/team.css';
import checkoutCard from '../../files/credit-card.png';
import PayPal from '../../files/paypal.png';
import * as actions from '../../actions';

const Checkout = ({ onCancel, formValues, submitMailProject, history }) => {
    useEffect(() => {
      $(".pricing-note").hide();
      $(".pricing-ques").click(function(){
        $(".pricing-note").fadeToggle(500);
      });
      $("#submit-project").click(function(){
        $(this).prop('disabled', true);
        $(this).addClass('processingSubmission');
        $("#submit-project").text(($("#submit-project").text() == 'Submit Project') ? 'Processing...' : 'Submit Project');
      });
    }, []);

    return(
      <div>
        <div className="ch-container">
          <div className="checkout-rect"><img src={checkoutCard} alt="card" style={{ width: "45px", height: "45px" }}/><h2 className="rnc">Checkout</h2></div>
          <div className="ch-in-container">
            <p className="review-title"><u>Project</u></p>
            <div className="review-container">
              <p style={{ margin: "3.5px 0px" }}><i className="fas fa-check"></i>{formValues.serviceSelect || "StellarEffex Service"}</p>
              <p style={{ margin: "3.5px 0px" }}><i className="fas fa-check"></i>{formValues.projectTitle || "New Design Project"}</p>
              <p style={{ margin: "3.5px 0px" }}><i className="fas fa-check"></i>{formValues.teamSelector || "Design Essentials Team"}</p>
            </div>
            <p className="review-title"><u>Pricing</u></p>
            <div className="review-container rc-mod">
              <p className="pricingPointsCheckout" ><i className="fas fa-truck"></i>{formValues.deliverySpeed || "Standard Delivery at no extra cost."}</p>
              <p className="pricingPointsCheckout" style={{ marginTop: "7.5px" }}><span className="pricing-ques"><i className="fas fa-question-circle"></i></span>PixPerfect credits charged at an hourly rate of {formValues.teamSelector || "Design Essentials Team"}. <span style={{ color: "#5fff2e" }}>(Promotion Applied)</span></p>
              <div className="pricing-note">We understand your concern regarding pricing. Well it's a basic payments system eventually, where 1 credit simply equals to 1$.<br />Here's an example,<br /> Suppose you send a project to the Design Essentials Team and the project manager estimates a time of 10 design hours to complete the project. If you are a new user our team will charge you at 55$/hr hence 550$ for the project. Therefore you'll be charged 550 credits from your PixPerfect wallet. It's just basic conversion of your currency into unanimous PixPerfect credits so that all the payments hassle could be avoided and <b>especially to get rid of the subscription system in which a customer is tricked into paying unnecessary money for the projects.</b></div>
            </div>
            <p className="review-title"><u>Payment</u></p>
            <p style={{fontFamily: "'Lato'", fontWeight: "700"}}>Add credits through the Payments Platform that YOU trust.</p>
            <div className="payments-container" style={{ marginTop: "7.5px" }}>
              <div className="paymentsImpInfo"><p>Please <span className="payInfoUnder">note that you don't have to pay any money at the moment</span> just simply submit the project to PixPerfect completely free of charge.</p></div>
              <div className="paymentsBtnCont">
                <button type="button" tooltip="Payments disabled." className="stripeDemoBtn"><p>Checkout with</p> <i className="fab fa-stripe"></i></button>
                <button type="button" tooltip="Add credits after approval."a className="paypalDemoBtn"><p>Checkout with</p> <img alt="PayPal" className="paypalLogo" src={PayPal} /></button>
              </div>

            </div>
            <p className="review-title"><u>Overview</u></p>
            <div className="review-container">
              <p style={{ margin: "5px 0px" }} className="ch-connect-info"><i className="fas fa-wallet"></i>Add credits to your wallet after your Project Manager gives you the estimate. No worries!</p>
              <p style={{ margin: "5px 0px" }} className="ch-connect-info"><i className="far fa-comments"></i>We will send you a <a target="_blank" rel="noreferrer" href="https://slack.com/" className="slackLink"><i className="fab fa-slack-hash slack-mod1"></i> Slack</a> invite and an email confirming the receival of your project before we start any work.</p>
            </div>
          </div>
        </div>
        <button type="button" className="goBack" onClick={onCancel}>
          <i className="material-icons ex-ic-opp">keyboard_arrow_left</i>Back To Form
        </button>
        <button id="submit-project" onClick={() => submitMailProject(formValues, history)} type="submit" className="submit-button">
          Submit Project<i className="far fa-check-circle"></i>
        </button>
      </div>
    );
}


function mapStateToProps(state) {
  return { formValues: state.form.projectForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(Checkout));
