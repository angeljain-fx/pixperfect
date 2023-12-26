import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/hamburgerNav.css';
import contact from '../../files/email.png';
import gift from '../../files/gift.png';
import logoutButton from '../../files/logout.png';

class HamburgerNav extends Component {
  componentDidMount () {
    $("#mobNavBtn").click(function(){
      $("#mobNavigation").animate({left: '0px'}, 200);
    });
    $("#mobNavBtn").click(function(){
      $(".lines576").css('box-shadow', "0 0 0 100000px rgba(0, 0, 0, .1)");
      $("html").addClass("removeScroll");
    });
    $(".mobNavClose").click(function(){
      $(".lines576").css('box-shadow', "0 0 0 0px rgba(0, 0, 0, 0)");
      $("#mobNavigation").animate({left: '-500px'}, 200);
      $("html").removeClass("removeScroll");
    });
    $("#addCreditsMobNavBtn").click(function(){
      $(".lines576").css('box-shadow', "0 0 0 0px rgba(0, 0, 0, 0)");
      $("#mobNavigation").animate({left: '-500px'}, 200);
      $("html").removeClass("removeScroll");
    });
    $("#dash-disable").click(function(){
      $(".lines576").css('box-shadow', "0 0 0 0px rgba(0, 0, 0, 0)");
      $("#mobNavigation").animate({left: '-500px'}, 200);
      $("html").removeClass("removeScroll");
    });
  }

  render() {
    return (
      <div>
      <div className="mob-navigation" id="mobNavigation">
        <div className="mobNavClose">
          X
        </div>
        <div className="mobNavContent">
          <div style={{ padding: "40px 0px 20px 35px" }}>
            <p className="mobNavTitle">PixPerfect</p>
            <div className="mobNav-links-parent-cont">
              <Link id="dash-disable" style={{textDecoration: "none"}} to={"/projects"}>
                <div style={{ margin: "7.5px 0px" }}>
                  <div className="mobNav-links-cont">
                    <div className="i-enclose">
                      <svg height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m197.332031 0h-160c-20.585937 0-37.332031 16.746094-37.332031 37.332031v96c0 20.589844 16.746094 37.335938 37.332031 37.335938h160c20.589844 0 37.335938-16.746094 37.335938-37.335938v-96c0-20.585937-16.746094-37.332031-37.335938-37.332031zm0 0" fill="#2196f3"/><path d="m197.332031 213.332031h-160c-20.585937 0-37.332031 16.746094-37.332031 37.335938v224c0 20.585937 16.746094 37.332031 37.332031 37.332031h160c20.589844 0 37.335938-16.746094 37.335938-37.332031v-224c0-20.589844-16.746094-37.335938-37.335938-37.335938zm0 0" fill="#1976d2"/><path d="m474.667969 341.332031h-160c-20.589844 0-37.335938 16.746094-37.335938 37.335938v96c0 20.585937 16.746094 37.332031 37.335938 37.332031h160c20.585937 0 37.332031-16.746094 37.332031-37.332031v-96c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0" fill="#2196f3"/><path d="m474.667969 0h-160c-20.589844 0-37.335938 16.746094-37.335938 37.332031v224c0 20.589844 16.746094 37.335938 37.335938 37.335938h160c20.585937 0 37.332031-16.746094 37.332031-37.335938v-224c0-20.585937-16.746094-37.332031-37.332031-37.332031zm0 0" fill="#1976d2"/></svg>
                    </div>
                    <p className="content-links">Dashboard</p>
                  </div>
                  <div className="border-bottom"></div>
                </div>
              </Link>
              <div style={{ margin: "7.5px 0px" }}>
                <div className="mobNav-links-cont">
                  <div className="i-enclose">
                    <img src={contact} alt="contact" style={{ width: "20px", height: "20px" }} />
                  </div>
                  <p className="content-links">Contact Sales</p>
                </div>
                <div className="border-bottom"></div>
              </div>
              <div style={{ margin: "7.5px 0px" }}>
                <div className="mobNav-links-cont">
                  <div className="i-enclose">
                    <img src={gift} alt="contact" style={{ width: "20px", height: "20px" }} />
                  </div>
                  <p className="content-links">Refer</p>
                </div>
                <div className="border-bottom"></div>
              </div>
              <a href="/api/logout" style={{ margin: "7.5px 0px", textDecoration: "none" }}>
                <div className="mobNav-links-cont">
                  <div className="i-enclose">
                    <img src={logoutButton} alt="contact" style={{ width: "20px", height: "20px" }} />
                  </div>
                  <p className="content-links">Log-out</p>
                </div>
                <div className="border-bottom"></div>
              </a>
            </div>
          </div>
          <div className="headerMobNavExtras">
            <div className="extrasContainer">
              <div className="extrasHeader">
                <div className="exHeadHamLogo">
                  <span style={{marginBottom: "2.5px" }} className="exHeadHamLogoLine"></span>
                  <span style={{marginTop: "2.5px" }} className="exHeadHamLogoLine"></span>
                </div>
                <div className="credOwnerHamNavContainer">
                  <div className="hamNavOwner">
                    {this.props.auth.username}
                  </div>
                </div>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                <div className="extraRegLogoCont">
                  <i style={{fontSize: "16px", color: "black", marginTop: "1px", marginLeft: "0.25px"}} className="fas fa-plus"></i>
                </div>
                <Link id="addCreditsMobNavBtn" to={"/addCredits-PayPal"} style={{textDecoration: "none"}}>
                  <div className="addCreditsHamNavContainer">
                    Add Credits
                  </div>
                </Link>
              </div>
              <div style={{display: "flex", alignItems: "center", marginTop: "3px"}}>
                <div className="extraRegLogoCont">
                  <i style={{fontSize: "16px", color: "black"}} className="far fa-credit-card"></i>
                </div>
                <div className="credHamNavContainer">
                  <p className="credHamNav">
                    {this.props.auth.stellarEffexCredits} Credits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label className="menu-open-button576" id="mobNavBtn">
        <span className="lines576 line-1"></span>
        <span className="lines576 line-2"></span>
        <span className="lines576 line-3"></span>
      </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(HamburgerNav);
