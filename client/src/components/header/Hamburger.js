import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/hamburger.css';
import contact from '../../files/email.png';
import gift from '../../files/gift.png';
import logoutButton from '../../files/logout.png';

class Hamburger extends Component {

  componentDidMount () {
    $(".drop-card").hide();
    $(".burger-triangle").hide();
    $(".menu-open").click(function(){
      $(".drop-card").toggle();
      $(".burger-triangle").toggle();
    });
    $(".forDropCardHide").click(function(){
      $(".drop-card").toggle();
      $(".burger-triangle").toggle();
      $('#menu-toggler-helperID').trigger('click');
    });
  };
  render() {
    return(
      <div>
          <div className="burger-triangle"></div>
          <div id="dropcard" className="drop-card card-1">
            <Link className="forDropCardHide" style={{textDecoration: "none"}} to={"/projects"}>
              <div className="dropcard-item1">
                <div className="i-enclose">
                  <svg height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m197.332031 0h-160c-20.585937 0-37.332031 16.746094-37.332031 37.332031v96c0 20.589844 16.746094 37.335938 37.332031 37.335938h160c20.589844 0 37.335938-16.746094 37.335938-37.335938v-96c0-20.585937-16.746094-37.332031-37.335938-37.332031zm0 0" fill="#2196f3"/><path d="m197.332031 213.332031h-160c-20.585937 0-37.332031 16.746094-37.332031 37.335938v224c0 20.585937 16.746094 37.332031 37.332031 37.332031h160c20.589844 0 37.335938-16.746094 37.335938-37.332031v-224c0-20.589844-16.746094-37.335938-37.335938-37.335938zm0 0" fill="#1976d2"/><path d="m474.667969 341.332031h-160c-20.589844 0-37.335938 16.746094-37.335938 37.335938v96c0 20.585937 16.746094 37.332031 37.335938 37.332031h160c20.585937 0 37.332031-16.746094 37.332031-37.332031v-96c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0" fill="#2196f3"/><path d="m474.667969 0h-160c-20.589844 0-37.335938 16.746094-37.335938 37.332031v224c0 20.589844 16.746094 37.335938 37.335938 37.335938h160c20.585937 0 37.332031-16.746094 37.332031-37.335938v-224c0-20.585937-16.746094-37.332031-37.332031-37.332031zm0 0" fill="#1976d2"/></svg>
                </div>
                <p className="burger-dashboard">Dashboard</p>
                <div className="anim-bar-1"></div>
              </div>
            </Link>
            <div className="dropcard-item1">
              <div className="i-enclose">
                <img src={contact} alt="contact" style={{ width: "20px", height: "20px" }} />
              </div>
              <p className="burger-dashboard">Contact Sales</p>
              <div className="anim-bar-2"></div>
            </div>
            <div className="dropcard-item1">
              <div className="i-enclose">
                <img src={gift} alt="gift" style={{ width: "20px", height: "20px", marginBottom: "1px" }} />
              </div>
              <p className="burger-dashboard">Refer</p>
              <div className="anim-bar-3"></div>
            </div>
            <a className="dropcard-item1" href="/api/logout">
              <div className="i-enclose">
                <img src={logoutButton} alt="logoutButton" style={{ width: "20px", height: "20px", marginLeft: "2px" }} />
              </div>
              <p className="burger-dashboard">Log-out</p>
              <div className="anim-bar-4"></div>
            </a>
            <hr className="menu-divider" />
            <div className="burger-owner-container">
              <div className="hamCredContainer">
                <p className="menu-owner"><i className="far fa-credit-card"></i> {this.props.auth.stellarEffexCredits}</p>
              </div>
              <Link className="forDropCardHide" style={{textDecoration: "none"}} to={"/addCredits-PayPal"}>
                <div className="addCredHamburger">
                  Add Credits
                </div>
              </Link>
            </div>
          </div>
          <div className="menu-shadow"></div>
          <div id="header-menu" className="menu-circle">
             <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
              <label id="menu-toggler-helperID" className="menu-open-button" htmlFor="menu-open">
                <span className="lines line-1"></span>
                <span className="lines line-2"></span>
                <span className="lines line-3"></span>
              </label>
          </div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Hamburger);
