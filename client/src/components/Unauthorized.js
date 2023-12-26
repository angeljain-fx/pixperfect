import React, { Component } from 'react';
import './app.css';

class Unauthorized extends Component {
  render() {
    const unauthSVG = {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    const logOutUnauthMessage = {
      fontFamily: "'Lato', sans-serif",
      fontSize: "20px"
    }
    const logBackInLink = {
      fontFamily: "'Lato', sans-serif",
      fontSize: "20px",
      color: "#0085ff",
      marginTop: "5px"
    }
    const unAuthCont = {
      marginLeft: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return(
      <div className="unAuthMainContainer" style={unauthSVG}>
        <div style={{width: "300px", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="250" viewBox="0 0 773.71 600.421">
            <defs>
              <filter id="Ellipse_123" x="281.71" y="551.421" width="240" height="45" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood floodOpacity="0.502"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g id="Group_76" data-name="Group 76" transform="translate(-745.29 -176.579)">
              <g id="Group_75" data-name="Group 75">
                <ellipse id="Ellipse_122" data-name="Ellipse 122" cx="328.5" cy="25" rx="328.5" ry="25" transform="translate(818 727)" fill="#e7e7e7"/>
                <g transform="matrix(1, 0, 0, 1, 745.29, 176.58)" filter="url(#Ellipse_123)">
                  <ellipse id="Ellipse_123-2" data-name="Ellipse 123" cx="111" cy="13.5" rx="111" ry="13.5" transform="translate(290.71 557.42)" fill="#d4d4d4"/>
                </g>
                <path id="Path_756" data-name="Path 756" d="M562.14,603.085H448.421l3.855-50.112H558.285Z" transform="translate(641 139)" fill="#e6e6e6"/>
                <rect id="Rectangle_29" data-name="Rectangle 29" width="127.21" height="11.565" transform="translate(1083.639 736.303)" fill="#e6e6e6"/>
                <path id="Path_757" data-name="Path 757" d="M895.371,374.74H460.735A11.565,11.565,0,0,0,449.17,386.3h0V651.326H906.935V386.3A11.565,11.565,0,0,0,895.37,374.74Z" transform="translate(468.709 -5.612)" fill="#3f3d56"/>
                <path id="Path_758" data-name="Path 758" d="M449.171,651.326v43.367a11.565,11.565,0,0,0,11.565,11.565H895.371a11.565,11.565,0,0,0,11.565-11.565h0V651.326Z" transform="translate(468.709 -5.612)" fill="#e6e6e6"/>
                <rect id="Rectangle_30" data-name="Rectangle 30" width="412.47" height="231.292" transform="translate(941.009 393.221)" fill="#e6e6e6"/>
                <circle id="Ellipse_118" data-name="Ellipse 118" cx="11.565" cy="11.565" r="11.565" transform="translate(1135.679 661.134)" fill="#3f3d56"/>
                <circle id="Ellipse_119" data-name="Ellipse 119" cx="2.195" cy="2.195" r="2.195" transform="translate(951.675 398.601)" fill="#fff"/>
                <circle id="Ellipse_120" data-name="Ellipse 120" cx="2.195" cy="2.195" r="2.195" transform="translate(960.005 398.601)" fill="#fff"/>
                <circle id="Ellipse_121" data-name="Ellipse 121" cx="2.195" cy="2.195" r="2.195" transform="translate(968.336 398.601)" fill="#fff"/>
                <rect id="Rectangle_31" data-name="Rectangle 31" width="389.916" height="194.247" transform="translate(951.675 408.253)" fill="#fff"/>
                <path id="Path_764" data-name="Path 764" d="M640.94,550.333a2.85,2.85,0,1,0,0,5.7h75.652a2.85,2.85,0,0,0,0-5.7Z" transform="translate(468.709 -5.612)" fill="#e6e6e6"/>
                <path id="Path_765" data-name="Path 765" d="M640.94,563.889a2.85,2.85,0,0,0,0,5.7H675a2.85,2.85,0,1,0,0-5.7Z" transform="translate(468.709 -5.612)" fill="#6c63ff"/>
                <path id="Path_768" data-name="Path 768" d="M640.94,536.333a2.85,2.85,0,1,0,0,5.7h75.652a2.85,2.85,0,0,0,0-5.7Z" transform="translate(468.709 -5.612)" fill="#e6e6e6"/>
                <g id="Group_74" data-name="Group 74" transform="translate(-78 -11)">
                  <circle id="Ellipse_18" data-name="Ellipse 18" cx="71.565" cy="71.565" r="71.565" transform="translate(1153 444.564)" fill="#6c63ff"/>
                  <g id="Group_73" data-name="Group 73" transform="translate(302 135)">
                    <rect id="Rectangle_32" data-name="Rectangle 32" width="8" height="67" transform="translate(896.051 360.268) rotate(-45)" fill="#fff"/>
                    <rect id="Rectangle_33" data-name="Rectangle 33" width="8" height="67" transform="translate(943.427 354.615) rotate(45)" fill="#fff"/>
                  </g>
                </g>
              </g>
              <g id="Group_72" data-name="Group 72" transform="translate(409 159)">
                <g id="Group_67" data-name="Group 67" transform="translate(336.29 18.857)">
                  <ellipse id="Ellipse_110" data-name="Ellipse 110" cx="79.713" cy="13.322" rx="79.713" ry="13.322" transform="translate(0 116.76)" fill="#bfd0ff" opacity="0.5"/>
                  <g id="Group_66" data-name="Group 66" transform="translate(14.52 0)">
                    <g id="Group_64" data-name="Group 64" transform="translate(39.746 59.47)">
                      <path id="Path_662" data-name="Path 662" d="M244.7,216.971a3.7,3.7,0,0,1-3.7-3.7V198.45a3.7,3.7,0,1,1,7.408,0v14.817A3.7,3.7,0,0,1,244.7,216.971Z" transform="translate(-216.056 -194.746)" fill="#9fbaff"/>
                      <path id="Path_663" data-name="Path 663" d="M256,194.746v22.225a3.7,3.7,0,0,0,3.7-3.7V198.45A3.7,3.7,0,0,0,256,194.746Z" transform="translate(-227.352 -194.746)" fill="#0085ff"/>
                      <path id="Path_664" data-name="Path 664" d="M291.995,361.419a3.7,3.7,0,0,1-3.274-1.966L271,324.277a3.407,3.407,0,0,1,1.965-2.347c1.806-.96,4.483.541,5.443,2.347l16.854,31.7a3.706,3.706,0,0,1-3.267,5.444Z" transform="translate(-238.648 -290.297)" fill="#0085ff"/>
                      <path id="Path_665" data-name="Path 665" d="M143.694,361.419a3.705,3.705,0,0,1-3.267-5.444l17.1-31.7c.961-1.806,3.39-3.308,5.2-2.347a4.92,4.92,0,0,1,2.317,2.394l-18.073,35.13A3.7,3.7,0,0,1,143.694,361.419Z" transform="translate(-139.992 -290.296)" fill="#8dadff"/>
                      <path id="Path_666" data-name="Path 666" d="M244.7,358.193a3.7,3.7,0,0,1-3.7-3.7V321.051a3.7,3.7,0,1,1,7.408,0v33.438A3.7,3.7,0,0,1,244.7,358.193Z" transform="translate(-216.056 -287.071)" fill="#8dadff"/>
                      <path id="Path_667" data-name="Path 667" d="M256,317.347v40.846a3.7,3.7,0,0,0,3.7-3.7V321.051A3.7,3.7,0,0,0,256,317.347Z" transform="translate(-227.352 -287.071)" fill="#0085ff"/>
                      <path id="Path_668" data-name="Path 668" d="M229.521,261.087H214.7a3.7,3.7,0,0,0-3.7,3.7v13.893h22.225V264.791A3.7,3.7,0,0,0,229.521,261.087Z" transform="translate(-193.465 -244.704)" fill="#056ece"/>
                      <path id="Path_669" data-name="Path 669" d="M263.408,261.087H256v17.6h11.113V264.791A3.7,3.7,0,0,0,263.408,261.087Z" transform="translate(-227.352 -244.704)" fill="#004e94"/>
                    </g>
                    <path id="Path_515" data-name="Path 515" d="M20.246,2.647V50.3a2.59,2.59,0,0,1-2.53,2.647c-4.927,0-9.486-2.9-12.838-8.157C-5.66,28.242,1.906,0,17.717,0a2.59,2.59,0,0,1,2.53,2.647Z" transform="matrix(-0.944, 0.331, -0.331, -0.944, 141.222, 49.973)" fill="#d3f3ff" stroke="#0090ff" strokeWidth="2"/>
                    <path id="Path_593" data-name="Path 593" d="M22.62,11.694,19.488,0,0,5.222,3.132,16.916l3.134,11.7L25.754,23.39Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 5.511, 50.218)" fill="#0085ff"/>
                    <path id="Path_594" data-name="Path 594" d="M0,0H20.175V12.108H0Z" transform="translate(9.829 66.872) rotate(-19.009)" fill="#0072da"/>
                    <path id="Path_595" data-name="Path 595" d="M30.993,19.449,25.747,0,6.216,5.246,0,20.2,2.629,27.05,7.328,39.3l9.38,4.853L36.24,38.9Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 80.572, 14.157)" fill="#474f54"/>
                    <path id="Path_596" data-name="Path 596" d="M14.079,24.7l19.532-5.246L28.364,0,0,7.6,4.7,19.847Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 84.551, 33.376)" fill="#32393f"/>
                    <path id="Path_597" data-name="Path 597" d="M75.38,19.437,70.137,0,0,18.725l5.249,19.5,5.243,19.48L80.63,38.9Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 17.172, 23.85)" fill="#9fbaff"/>
                    <path id="Path_598" data-name="Path 598" d="M75.38,19.465,70.131,0,0,18.791l5.243,19.48Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 23.764, 42.874)" fill="#0085ff"/>
                    <path id="Path_599" data-name="Path 599" d="M9.945,14.89,5.956,0,0,1.6l3.989,14.89,3.989,14.89,5.956-1.6Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 52.386)" fill="#2c2c2c"/>
                    <path id="Path_601" data-name="Path 601" d="M15.108,27.285,7.8,0,0,2.089,7.313,29.374,15.1,57.3l7.8-2.089Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 99.679, 3.922)" fill="#9fbaff"/>
                    <path id="Path_602" data-name="Path 602" d="M15.582,27.931,7.8,0,0,2.089,7.787,30.019Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 108.877, 30.63)" fill="#0085ff"/>
                    <path id="XMLID_331_" d="M0,0H15.02V9.1H0Z" transform="matrix(0.921, 0.391, -0.391, 0.921, 73.493, 61.001)" fill="#00465f"/>
                    <path id="XMLID_351_" d="M246.085,237.456a12.268,12.268,0,1,1,12.268-12.268A12.282,12.282,0,0,1,246.085,237.456Zm0-16.551a4.283,4.283,0,1,0,4.283,4.283A4.288,4.288,0,0,0,246.085,220.905Z" transform="translate(-177.808 -165.788)" fill="#056ece" stroke="#000" strokeWidth="3"/>
                    <path id="XMLID_1056_" d="M279.909,212.921v7.985a4.283,4.283,0,0,1,0,8.566v7.985a12.268,12.268,0,0,0,0-24.536Z" transform="translate(-211.632 -165.788)" fill="#004e94" stroke="#000" strokeWidth="3"/>
                  </g>
                  <path id="XMLID_335_" d="M114.586,477.546h18.451v7.985H114.586Z" transform="translate(-66.483 -354.083)" fill="#00465f"/>
                  <path id="XMLID_335_2" data-name="XMLID_335_" d="M114.586,477.546h18.451v7.985H114.586Z" transform="translate(-40.727 -350.048)" fill="#00465f"/>
                  <path id="XMLID_335_3" data-name="XMLID_335_" d="M114.586,477.546h18.451v7.985H114.586Z" transform="translate(-16.213 -354.083)" fill="#00465f"/>
                </g>
                <g id="Group_69" data-name="Group 69" transform="translate(523.036 24.598)">
                  <text id="StellarEffex" transform="translate(-0.036 108.402)" fill="#313131" fontSize="109" fontFamily="Lato-Black, Lato" fontWeight="800"><tspan x="0" y="0">StellarEffex</tspan></text>
                </g>
              </g>
            </g>
          </svg>
          <p style={{fontFamily: "'Lato', sans-serif", fontSize: "15px", textAlign: "center"}}>You tried to open a route, only accessible when you are logged in.</p>
        </div>
        <div style={unAuthCont}>
          <h2 className="unAuthMessage" style={logOutUnauthMessage}>You are logged out.</h2>
          <a href="/auth/google" style={logBackInLink}>Log Back In</a>
        </div>
      </div>
    );
  }
}

export default Unauthorized;
