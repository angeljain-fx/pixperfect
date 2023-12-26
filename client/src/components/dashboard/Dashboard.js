import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import $ from 'jquery';
import ProjectList from './ProjectList';
import Unauthorized from '../Unauthorized';
import ('./styles/dashboard.css');

class Dashboard extends Component {
    componentDidMount() {
      $("html").addClass("removeScroll");
      $("#dashboard-ent-cont").hide();
      setTimeout(function() {
        $('.dashboard-Loading').fadeOut('fast');
        $("html").removeClass("removeScroll");
        $("#dashboard-ent-cont").show();
      }, 4500);
    }

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
            <div>
              <div className="dashboard-Loading">
                <div className="loader-container">
                  <svg className="loaderSpinner" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto", animationPlayState: "running", animationDelay: "0s"}} width="210px" height="210px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="15" strokeWidth="4" stroke="#0085ff" strokeDasharray="23.561944901923447 23.561944901923447" fill="none" strokeLinecap="round" style={{animationPlayState: "running", animationDelay: "0s"}} >
                      <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50" style={{animationPlayState: "running", animationDelay: "0s"}}></animateTransform>
                    </circle>
                    <circle cx="50" cy="50" r="10" strokeWidth="4" stroke="#17c2ff" strokeDasharray="15.707963267948966 15.707963267948966" strokeDashoffset="15.707963267948966" fill="none" strokeLinecap="round" style={{animationPlayState: "running", animationDelay: "0s"}}>
                      <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50" style={{animationPlayState: "running", animationDelay: "0s"}}></animateTransform>
                    </circle>
                  </svg>
                  <h2 className="loadingDashboard">Loading...</h2>
                </div>
              </div>
              <div id="dashboard-ent-cont">
                <div id="dash-bg" className="dashLandBG">
                  <div id="dashboard-head" className="dashboardHead">
                    <div style={{ display: "flex" }}>
                      <h1 className="dashboardText">Dashboard</h1>
                    </div>
                    <p id="dashboard-sub-text" className="dashboardSubText">All your brand assets, team contact links and project details neatly organised at one place.</p>
                    <div className="stProCont">
                      <p className="involveSE">Involve PixPerfect!</p>
                      <Link to={'/newProject'} className="stProjectBtn">
                        Start a Project <i className="far fa-plus-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="pro-list-head-cont" className="proListHeadCont">
                  <h1 id="dash-pro-head" className="dashProHead">My Projects</h1>
                  <hr style={{ opacity: "0.3" }}/>
                </div>
                <ProjectList/>
                <div className="dashboardFooter">
                  <div className="main-footer-mod">
                    <div className="main-footer-container">
                        <div className="footer-per-container">
                            <div className="logo-container">
                              <div className="footer-logo-box">
                                <svg width="35" viewBox="0 0 151 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="75.5" cy="136" rx="75.5" ry="8" fill="#B0FFF5"/>
      <path d="M129.017 88.7456C129.017 93.8167 124.868 97.9659 119.797 97.9659H32.2034C27.1323 97.9659 22.9832 93.8167 22.9832 88.7456C39.1186 72.6101 69.0849 84.1354 69.0849 84.1354C69.0849 84.1354 76.0002 74.9151 92.1357 74.9151C111.959 74.9151 129.017 88.7456 129.017 88.7456ZM92.1357 38.0339C97.2067 38.0339 99.0509 49.5594 99.0509 58.7796C99.0509 62.9288 96.2848 65.6949 92.1357 65.6949C87.9865 65.6949 85.2204 62.9288 85.2204 58.7796C85.2204 49.5594 87.0643 38.0339 92.1357 38.0339Z" fill="#80D6FA"/>
      <path d="M92.1357 74.9151C76.0002 74.9151 69.0849 84.1354 69.0849 84.1354C69.0849 84.1354 39.1186 72.6101 22.9832 88.7456V28.8136C22.9832 23.7425 27.1323 19.5934 32.2034 19.5934H119.797C124.868 19.5934 129.017 23.7425 129.017 28.8136V88.7459C129.017 88.7456 111.959 74.9151 92.1357 74.9151Z" fill="#ECF4F7"/>
      <path d="M92.1356 65.6949C96.2847 65.6949 99.0508 62.6984 99.0508 58.7796C99.0508 49.5594 97.2067 38.0339 92.1356 38.0339C87.0645 38.0339 85.2203 49.5594 85.2203 58.7796C85.2203 62.9288 87.9864 65.6949 92.1356 65.6949Z" fill="#80D6FA"/>
      <path d="M50.6441 38.0339C53.1798 38.0339 55.2543 40.1084 55.2543 42.6441C55.2543 45.1798 53.1798 47.2544 50.6441 47.2544C48.1084 47.2544 46.0338 45.1798 46.0338 42.6441C46.0338 40.1084 48.1084 38.0339 50.6441 38.0339Z" fill="#FFE079"/>
      <path d="M105.966 136C105.505 136 105.044 135.77 105.044 135.308L91.4441 108.339H77.1525V134.847C77.1525 135.539 76.6914 136 75.9998 136C75.3083 136 74.8472 135.539 74.8472 134.847V108.339H60.5559L46.9558 135.308C46.7254 135.77 46.0338 136 45.3423 135.77C44.8812 135.539 44.6508 135.078 44.6508 134.848C44.6508 134.617 44.6508 134.387 44.8812 134.387L57.7898 108.339H50.4134C49.7219 108.339 49.2608 107.878 49.2608 107.186C49.2608 106.495 49.7219 106.034 50.4134 106.034H59.6337H91.9049H101.125C101.817 106.034 102.278 106.495 102.278 107.186C102.278 107.878 101.817 108.339 101.125 108.339H93.7491L106.658 134.387C106.658 134.617 106.888 134.617 106.888 134.848C106.888 135.309 106.658 135.77 106.197 135.77C106.427 136 106.197 136 105.966 136ZM119.797 99.1185H32.2033C26.4407 99.1185 21.8305 94.5082 21.8305 88.7456C21.8305 88.5152 22.0609 88.0541 22.0609 87.8237C37.2744 72.6101 63.5524 80.9084 68.6235 82.7526C70.4676 80.678 77.3829 74.2239 90.9827 73.7627V66.8475C86.8335 66.3864 84.0674 63.1595 84.0674 58.7796C84.0674 48.6372 86.142 36.8812 92.1353 36.8812C99.7421 36.8812 100.203 55.0913 100.203 58.7796C100.203 63.1592 97.4371 66.3864 93.288 66.8475V73.7627C108.963 74.2239 120.027 82.7526 120.488 83.2137C120.949 83.6748 121.179 84.3663 120.718 84.8272C120.257 85.2883 119.566 85.5187 119.105 85.0576C119.105 85.0576 107.579 76.0677 92.1353 76.0677C76.6914 76.0677 70.0065 84.8272 70.0065 84.8272C69.7761 85.2883 69.0846 85.2883 68.6235 85.2883C68.3931 85.2883 39.5794 74.4543 24.1355 89.207C24.3662 93.3559 27.8238 96.8135 32.2033 96.8135H119.797C124.176 96.8135 127.864 93.1254 127.864 88.7456V28.8136C127.864 24.4341 124.176 20.7457 119.797 20.7457H32.2033C27.8238 20.7457 24.1355 24.4338 24.1355 28.8136V77.2204C24.1355 77.9119 23.6744 78.373 22.9828 78.373C22.2913 78.373 21.8302 77.9119 21.8302 77.2204V28.8136C21.8302 23.051 26.4405 18.4408 32.2031 18.4408H119.796C125.559 18.4408 130.169 23.051 130.169 28.8136V88.7459C130.169 94.5085 125.559 99.1185 119.797 99.1185ZM92.1356 39.1865C88.4476 39.1865 86.373 49.0983 86.373 58.7796C86.373 62.2372 88.678 64.5422 92.1356 64.5422C95.5932 64.5422 97.8982 62.2372 97.8982 58.7796C97.8982 47.7152 95.3625 39.1865 92.1356 39.1865ZM50.6441 53.017C49.9526 53.017 49.4915 52.5559 49.4915 51.8644V48.1763C48.7999 47.9459 48.1084 47.7152 47.4169 47.2544L44.8812 49.7901C44.4201 50.2512 43.7286 50.2512 43.2677 49.7901C43.0373 49.5596 43.0373 49.329 43.0373 48.8681C43.0373 48.4073 43.0373 48.1766 43.2677 47.9462L45.8034 45.4105C45.3423 44.719 45.1119 44.0274 44.8815 43.3359H41.1932C40.5016 43.3359 40.0405 42.8748 40.0405 42.1833C40.0405 41.4918 40.5016 41.0307 41.1932 41.0307H44.8812C45.1116 40.3391 45.3423 39.6476 45.8032 38.9561L43.2675 36.4204C43.0371 36.19 43.0371 35.9593 43.0371 35.4985C43.0371 35.0376 43.0371 34.8069 43.2675 34.5765C43.7286 34.1154 44.4201 34.1154 44.8809 34.5765L47.4166 37.1122C48.1081 36.6511 48.7997 36.4207 49.4912 36.1903V32.5017C49.4912 31.8101 49.9523 31.349 50.6438 31.349C51.3354 31.349 51.7965 31.8101 51.7965 32.5017V36.1897C52.488 36.4201 53.1795 36.6508 53.871 37.1117L56.4067 34.5762C56.8678 34.1151 57.5593 34.1151 58.0202 34.5762C58.2506 34.8067 58.2506 35.0374 58.2506 35.4982C58.2506 35.959 58.2506 36.1897 58.0202 36.4201L55.4845 38.9558C55.9456 39.6473 56.176 40.3389 56.4064 41.0304H60.0945C60.786 41.0304 61.2471 41.4915 61.2471 42.183C61.2471 42.8745 60.786 43.3357 60.0945 43.3357H56.4067C56.1763 44.0272 55.9456 44.7187 55.4848 45.4102L58.0205 47.9459C58.2509 48.1763 58.2509 48.407 58.2509 48.8679C58.2509 49.3287 58.2509 49.5594 58.0205 49.7898C57.5593 50.2509 56.8678 50.2509 56.407 49.7898L53.8713 47.2541C53.1798 47.7152 52.4883 47.9456 51.7967 48.1761V51.8644C51.7965 52.5559 51.3356 53.017 50.6441 53.017ZM50.6441 39.1865C48.7999 39.1865 47.1865 40.8 47.1865 42.6441C47.1865 44.4883 48.7999 46.1018 50.6441 46.1018C52.4883 46.1018 54.1017 44.4883 54.1017 42.6441C54.1017 40.8 52.488 39.1865 50.6441 39.1865ZM92.1356 11.5255H59.8643C59.1728 11.5255 58.7117 11.0644 58.7117 10.3729C58.7117 9.68135 59.1728 9.22024 59.8643 9.22024H74.8475V1.15263C74.8475 0.461107 75.3086 0 76.0001 0C76.6914 0 77.1525 0.461107 77.1525 1.15263V9.22051H92.1356C92.8271 9.22051 93.2882 9.68162 93.2882 10.3731C93.2882 11.0647 92.8271 11.5255 92.1356 11.5255Z" fill="#51565F"/>
                                </svg>
                              </div> 
                              <p className="footer-title">PixPerfect</p>             
                            </div>
                            <div className="footer-phrase">
                                Hassle-free, thoughtful premium designs, at scale.
                            </div>
                        </div>
                        <div className="footer-per-container">
                            <p>Resources</p>
                            <div className="footer-resource-links-cont">
                                <a href="/projects" className="footer-resource-links">View Your Projects</a>
                                <a href="https://www.effexify.com/talkToUs/index.html" className="footer-resource-links">Contact Us</a>
                                <a href="/api/logout" className="footer-resource-links">Logout</a>
                            </div>
                        </div>
                        <div className="footer-per-container">
                            <p>Services</p>
                            <div className="footer-resource-links-cont">
                                <a href="/newProject" className="footer-resource-links">Start a Project</a>
                                <a href="/addCredits-PayPal" className="footer-resource-links">Add Credits</a>
                                <a href="#" className="footer-resource-links">Refer</a>
                            </div>
                        </div>
                        <div className="footer-per-container">
                            <p>Contact</p>
                            <div className="footer-resource-links-cont">
                                <a href="mail" className="footer-resource-links">help@pixperfect.in</a>
                                <a href="" className="footer-resource-links">+ (731) 4321 765</a>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-line" />
                    <p className="final-text">sales@pixperfect.in | <span className="copySymbol">©</span>2022 PixPerfect, All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          );
      }
    }

    render() {
      return (
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

export default connect(mapStateToProps)(Dashboard);
