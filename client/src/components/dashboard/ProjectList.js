import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProjects } from '../../actions';
import './styles/projectList.css';

class ProjectList extends Component {
  componentDidMount () {
    this.props.fetchProjects();
  }

  renderProjects() {
    if (this.props.projects == null) {
      return;
    }
    else if(this.props.projects == false) {
      return (
        <div className="noProBox">
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom: "15px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="emptyDashSVG" viewBox="0 0 881.124 775.983">
              <g id="Group_28" data-name="Group 28" transform="translate(-231.81 -134)">
                <g id="undraw_blank_canvas_3rbb" transform="translate(194 134.003)">
                  <path id="Path_178" data-name="Path 178" d="M424.35,62.67c29.21-26,75.06-31.33,116.8-29.26,131.09,6.52,249.42,69.8,351.78,141.39,37.06,25.91,73.54,53.84,97.59,89.53,49,72.65,34.44,173.29-33.64,233.14-23.17,20.36-51.25,36-80.08,49.81-51.26,24.6-106.57,44.35-164.75,50-41.48,4-83.48.75-124.73-4.84C472.09,576.78,359,542.22,264.17,483.1c-41.58-25.93-80.77-58.17-97.91-100.1s-6.17-95.13,36.29-120c17.56-10.27,38.56-14.91,59.11-19.27,30.26-6.41,61-12.73,88.3-25.76,28.21-13.46,61.6-39.49,56-69.29C400,116.75,395.18,88.67,424.35,62.67Z" transform="translate(-100.52 -33.01)" fill="#6c63ff" opacity="0.1"/>
                  <path id="Path_179" data-name="Path 179" d="M785.47,701.9s25.06-44.39,62.79-57.18a77.24,77.24,0,0,0,39.12-29.26,129.523,129.523,0,0,0,11.54-20.76" transform="translate(-100.52 -33.01)" fill="none" stroke="#535461" strokeMiterlimit="10" strokeWidth="2"/>
                  <path id="Path_180" data-name="Path 180" d="M922.66,586.49c-4.3,4.18-24.33,8.49-24.33,8.49s4.91-19.89,9.21-24.06a10.852,10.852,0,0,1,15.12,15.57Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_181" data-name="Path 181" d="M911.33,622.48c-5.88,1.17-25-6.09-25-6.09s14.94-14,20.81-15.2a10.853,10.853,0,1,1,4.23,21.29Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_182" data-name="Path 182" d="M870.08,661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56,25.64-2.6a10.85,10.85,0,1,1-7.1,20.5Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_183" data-name="Path 183" d="M832.23,683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88,24.82-6.9a10.85,10.85,0,1,1-3.53,21.41Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_184" data-name="Path 184" d="M869.59,600.85c0,6,10.84,23.37,10.84,23.37s10.86-17.37,10.86-23.36a10.85,10.85,0,0,0-21.7,0Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_185" data-name="Path 185" d="M825.66,627.65c1.8,5.72,17.34,19.06,17.34,19.06s5.16-19.83,3.37-25.55a10.852,10.852,0,1,0-20.71,6.49Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_186" data-name="Path 186" d="M786.54,659.55c.8,5.94,13.87,21.72,13.87,21.72s8.44-18.67,7.64-24.61a10.852,10.852,0,1,0-21.51,2.89Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_187" data-name="Path 187" d="M922.66,586.49c-4.3,4.18-24.33,8.49-24.33,8.49s4.91-19.89,9.21-24.06a10.852,10.852,0,0,1,15.12,15.57Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_188" data-name="Path 188" d="M911.33,622.48c-5.88,1.17-25-6.09-25-6.09s14.94-14,20.81-15.2a10.853,10.853,0,1,1,4.23,21.29Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_189" data-name="Path 189" d="M870.08,661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56,25.64-2.6a10.85,10.85,0,1,1-7.1,20.5Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_190" data-name="Path 190" d="M832.23,683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88,24.82-6.9a10.85,10.85,0,1,1-3.53,21.41Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_191" data-name="Path 191" d="M869.59,600.85c0,6,10.84,23.37,10.84,23.37s10.86-17.37,10.86-23.36a10.85,10.85,0,0,0-21.7,0Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_192" data-name="Path 192" d="M825.66,627.65c1.8,5.72,17.34,19.06,17.34,19.06s5.16-19.83,3.37-25.55a10.852,10.852,0,1,0-20.71,6.49Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_193" data-name="Path 193" d="M786.54,659.55c.8,5.94,13.87,21.72,13.87,21.72s8.44-18.67,7.64-24.61a10.852,10.852,0,1,0-21.51,2.89Z" transform="translate(-100.52 -33.01)" opacity="0.25"/>
                  <path id="Path_194" data-name="Path 194" d="M786.91,701s4.92-50.74,34.24-77.72a77.24,77.24,0,0,0,23.9-42.61A129.14,129.14,0,0,0,847.19,557" transform="translate(-100.52 -33.01)" fill="none" stroke="#535461" strokeMiterlimit="10" strokeWidth="2"/>
                  <path id="Path_195" data-name="Path 195" d="M865.56,539.92c-2.24,5.56-18.8,17.62-18.8,17.62s-3.56-20.18-1.32-25.73a10.85,10.85,0,1,1,20.12,8.11Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_196" data-name="Path 196" d="M869.79,577.41c-4.9,3.45-25.36,4.57-25.36,4.57s8-18.87,12.87-22.32a10.852,10.852,0,1,1,12.49,17.75Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_197" data-name="Path 197" d="M847.86,629.73c-6,.5-24.2-8.86-24.2-8.86S840.07,608.61,846,608.1a10.853,10.853,0,1,1,1.82,21.63Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_198" data-name="Path 198" d="M822.35,665.58c-5.8,1.5-25.34-4.64-25.34-4.64s14.09-14.87,19.89-16.37a10.849,10.849,0,1,1,5.451,21Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_199" data-name="Path 199" d="M822.87,574.54c2.42,5.48,19.38,17,19.38,17s2.89-20.28.46-25.76a10.849,10.849,0,1,0-19.842,8.781Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_200" data-name="Path 200" d="M793.57,616.85c3.95,4.5,23.57,10.4,23.57,10.4s-3.31-20.22-7.27-24.72a10.849,10.849,0,1,0-16.3,14.321Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_201" data-name="Path 201" d="M770.73,661.87c3.14,5.11,21.48,14.23,21.48,14.23s.15-20.48-3-25.59a10.85,10.85,0,0,0-18.49,11.36Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <ellipse id="Ellipse_56" data-name="Ellipse 56" cx="118.88" cy="19.93" rx="118.88" ry="19.93" transform="translate(198.29 736.12)" fill="#6c63ff" opacity="0.1"/>
                  <ellipse id="Ellipse_57" data-name="Ellipse 57" cx="118.88" cy="19.93" rx="118.88" ry="19.93" transform="translate(489.28 641.13)" fill="#6c63ff" opacity="0.1"/>
                  <path id="Path_202" data-name="Path 202" d="M616.05,398.03l-.11,3.89-6.76,238.52H597.82l5.57-238.52.11-4.49Z" fill="#b77b7f"/>
                  <path id="Path_203" data-name="Path 203" d="M681.82,600.09l-8.51-.02-126.44-.27-6.74-.01,3.59-11.06h137.2Z" fill="#dda2a6"/>
                  <path id="Path_204" data-name="Path 204" d="M616.05,398.03l-.11,3.89H603.39l.11-4.49Z" opacity="0.1"/>
                  <rect id="Rectangle_17" data-name="Rectangle 17" width="21.07" height="7.93" transform="translate(599.77 392.2)" fill="#b77b7f"/>
                  <path id="Path_205" data-name="Path 205" d="M547.99,588.73l-1.12,11.07-6.74-.01,3.59-11.06Z" opacity="0.1"/>
                  <path id="Path_206" data-name="Path 206" d="M566.14,392.05l-.35,3.44L537.74,672.13l-12.85-.61,29.56-276.03.33-3.14Z" fill="#dda2a6"/>
                  <path id="Path_207" data-name="Path 207" d="M681.82,600.09l-8.51-.02-1.15-11.34h8.76Z" opacity="0.1"/>
                  <path id="Path_208" data-name="Path 208" d="M695.27,671.52l-12.86.61L654.37,395.49l-.35-3.44,11.35.3.33,3.14Z" fill="#dda2a6"/>
                  <rect id="Rectangle_18" data-name="Rectangle 18" width="283.36" height="271.7" transform="translate(466.6 119.3)" fill="#fff"/>
                  <path id="Path_209" data-name="Path 209" d="M714.33,61.44v65.61H703.28V61.44a5.53,5.53,0,1,1,11.05,0Z" transform="translate(-100.52 -33.01)" fill="#dda2a6"/>
                  <rect id="Rectangle_19" data-name="Rectangle 19" width="11.06" height="5.97" transform="translate(602.75 88.07)" opacity="0.1"/>
                  <path id="Path_210" data-name="Path 210" d="M718.67,125.56v21.66H699V125.56a2.68,2.68,0,0,1,2.69-2.69H716a2.69,2.69,0,0,1,2.67,2.69Z" transform="translate(-100.52 -33.01)" fill="#dda2a6"/>
                  <circle id="Ellipse_58" data-name="Ellipse 58" cx="4.18" cy="4.18" r="4.18" transform="translate(604.1 99.43)" opacity="0.1"/>
                  <circle id="Ellipse_59" data-name="Ellipse 59" cx="4.18" cy="4.18" r="4.18" transform="translate(604.1 98.53)" fill="#b77b7f"/>
                  <rect id="Rectangle_20" data-name="Rectangle 20" width="19.73" height="2.69" transform="translate(598.42 111.53)" opacity="0.1"/>
                  <rect id="Rectangle_21" data-name="Rectangle 21" width="35.87" height="5.98" transform="translate(590.35 115.12)" opacity="0.1"/>
                  <rect id="Rectangle_22" data-name="Rectangle 22" width="35.87" height="5.98" transform="translate(590.35 113.32)" fill="#dda2a6"/>
                  <path id="Path_211" data-name="Path 211" d="M535.72,384H686.37a6.5,6.5,0,0,1,6.5,6.5v1.42H529.22V390.5a6.5,6.5,0,0,1,6.5-6.5Z" opacity="0.1"/>
                  <path id="Path_212" data-name="Path 212" d="M554.78,392.35l11.36-.3-.35,3.44H554.45Z" opacity="0.1"/>
                  <rect id="Rectangle_23" data-name="Rectangle 23" width="21.07" height="3.29" transform="translate(599.77 392.2)" opacity="0.1"/>
                  <path id="Path_213" data-name="Path 213" d="M665.7,395.49H654.37l-.35-3.44,11.35.3Z" opacity="0.1"/>
                  <path id="Path_214" data-name="Path 214" d="M535.72,385.77H686.37a6.5,6.5,0,0,1,6.5,6.5v1.42H529.22v-1.42a6.5,6.5,0,0,1,6.5-6.5Z" fill="#dda2a6"/>
                  <path id="Path_239" data-name="Path 239" d="M488.65,554s16.44,0,24.06.45S488.65,554,488.65,554Z" transform="translate(-100.52 -33.01)" opacity="0.1"/>
                  <path id="Path_250" data-name="Path 250" d="M233.09,556.31s7.24,9.47-3.34,23.75S210.46,606.4,214,615.31c0,0,15.95-26.53,28.94-26.9S247.38,572.27,233.09,556.31Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_251" data-name="Path 251" d="M233.09,556.31a11.789,11.789,0,0,1,1.48,3c12.67,14.89,19.42,28.78,7.24,29.13-11.34.32-24.95,20.61-28.21,25.73a9.443,9.443,0,0,0,.39,1.17s15.95-26.53,28.94-26.9S247.38,572.27,233.09,556.31Z" transform="translate(-100.52 -33.01)" opacity="0.1"/>
                  <path id="Path_252" data-name="Path 252" d="M246.54,568.37c0,3.33-.37,6-.83,6s-.84-2.7-.84-6,.47-1.76.93-1.76S246.54,565,246.54,568.37Z" transform="translate(-100.52 -33.01)" fill="#ffd037"/>
                  <path id="Path_253" data-name="Path 253" d="M251.16,572.35c-2.92,1.59-5.47,2.56-5.69,2.15s2-2,4.89-3.62,1.77-.43,2,0S254.08,570.75,251.16,572.35Z" transform="translate(-100.52 -33.01)" fill="#ffd037"/>
                  <path id="Path_254" data-name="Path 254" d="M194.88,556.31s-7.24,9.47,3.34,23.75S217.51,606.4,214,615.31c0,0-16-26.53-29-26.9S180.59,572.27,194.88,556.31Z" transform="translate(-100.52 -33.01)" fill="#6c63ff"/>
                  <path id="Path_255" data-name="Path 255" d="M194.88,556.31a11.789,11.789,0,0,0-1.48,3c-12.67,14.89-19.42,28.78-7.24,29.13,11.34.32,25,20.61,28.21,25.73a11.4,11.4,0,0,1-.38,1.17s-16-26.53-29-26.9S180.59,572.27,194.88,556.31Z" transform="translate(-100.52 -33.01)" opacity="0.1"/>
                  <path id="Path_256" data-name="Path 256" d="M181.43,568.37c0,3.33.37,6,.83,6s.84-2.7.84-6-.47-1.76-.93-1.76S181.43,565,181.43,568.37Z" transform="translate(-100.52 -33.01)" fill="#ffd037"/>
                  <path id="Path_257" data-name="Path 257" d="M176.81,572.35c2.93,1.59,5.47,2.56,5.7,2.15s-2-2-4.9-3.62-1.77-.43-2,0S173.89,570.75,176.81,572.35Z" transform="translate(-100.52 -33.01)" fill="#ffd037"/>
                  <ellipse id="Ellipse_65" data-name="Ellipse 65" cx="75.65" cy="11.61" rx="75.65" ry="11.61" transform="translate(37.81 631.46)" fill="#6c63ff" opacity="0.1"/>
                  <path id="Path_258" data-name="Path 258" d="M252.92,602.56l-.36,3-.51,4.17-.21,1.74-.51,4.18-.22,1.74-.51,4.17L244.82,669c-.52,4.24-7.44,7.54-15.8,7.54H199c-8.36,0-15.27-3.3-15.79-7.54l-5.79-47.45-.51-4.17-.21-1.74-.52-4.18-.21-1.74-.51-4.17-.36-3c-.29-2.4,3.45-4.42,8.18-4.42H244.8C249.47,598.14,253.22,600.16,252.92,602.56Z" transform="translate(-100.52 -33.01)" fill="#65617d"/>
                  <path id="Path_259" data-name="Path 259" d="M152.03,572.5l-.5,4.18H75.39l-.5-4.18Z" fill="#9d9cb5"/>
                  <path id="Path_260" data-name="Path 260" d="M151.31,578.42l-.5,4.17H76.12l-.51-4.17Z" fill="#9d9cb5"/>
                  <path id="Path_261" data-name="Path 261" d="M150.59,584.33l-.51,4.17H76.84l-.51-4.17Z" fill="#9d9cb5"/>
                  <circle id="Ellipse_66" data-name="Ellipse 66" cx="31.5" cy="31.5" r="31.5" transform="translate(148.49 93.02)" fill="#6c63ff" opacity="0.1"/>
                  <circle id="Ellipse_67" data-name="Ellipse 67" cx="19.5" cy="19.5" r="19.5" transform="translate(94.49 30.02)" fill="#6c63ff" opacity="0.1"/>
                </g>
                <g id="Group_27" data-name="Group 27" transform="translate(1361 -244)">
                  <path id="Path_264" data-name="Path 264" d="M558.56,463.78c-10,14.31-45.95,6.73-45.95,6.73l-27.86-26.07L481,440.91l6.29-13.36s2,.55,5.43,1.53C510.73,434.31,567,451.75,558.56,463.78Z" transform="translate(-1357.226 637.967)" fill="#efb7b9"/>
                  <path id="Path_265" data-name="Path 265" d="M492.7,429.08c-1.23,4.28-4.6,10.69-7.95,15.36L481,440.91l6.29-13.36S489.31,428.1,492.7,429.08Z" transform="translate(-1357.226 637.967)" opacity="0.1"/>
                  <path id="Path_310" data-name="Path 310" d="M330.96,347.33l77-12.53v72.9l-73.16-3.83Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_311" data-name="Path 311" d="M330.96,347.33l77-12.53v72.9l-73.16-3.83Z" transform="translate(-1261.996 692.997)" opacity="0.05"/>
                  <path id="Path_312" data-name="Path 312" d="M407.96,334.8l92.34,6.91-5.11,63.44-87.23,2.55Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_313" data-name="Path 313" d="M407.96,334.8l92.34,6.91-5.11,63.44-87.23,2.55Z" transform="translate(-1261.996 692.997)" opacity="0.1"/>
                  <path id="Path_314" data-name="Path 314" d="M436.35,312.55,407.96,334.8l92.34,6.91,15.09-22.77Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_315" data-name="Path 315" d="M303.08,323.03l69.32-8.44,35.56,20.21-77,12.53Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_316" data-name="Path 316" d="M424.84,353.73V453.4l-36.07-3.7-15.69-1.6-4.78-.5-15.68-1.61-21.66-2.22V347.33l76.99,5.24Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_317" data-name="Path 317" d="M500.3,341.71v97.2l-28.91,5.55-14.06,2.7-32.49,6.24V353.73Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_318" data-name="Path 318" d="M500.3,341.71v97.2l-28.91,5.55-14.06,2.7-32.49,6.24V353.73Z" transform="translate(-1261.996 692.997)" opacity="0.05"/>
                  <path id="Path_319" data-name="Path 319" d="M303.08,368.31l27.88-20.98,93.88,6.4-13.82,23.28Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_320" data-name="Path 320" d="M303.08,368.31l27.88-20.98,93.88,6.4-13.82,23.28Z" transform="translate(-1261.996 692.997)" fill="#fff" opacity="0.1"/>
                  <path id="Path_321" data-name="Path 321" d="M500.3,341.71l-75.46,12.02,24.56,22,80.83-13.56Z" transform="translate(-1261.996 692.997)" fill="#5685ff"/>
                  <path id="Path_322" data-name="Path 322" d="M500.3,341.71l-75.46,12.02,24.56,22,80.83-13.56Z" transform="translate(-1261.996 692.997)" fill="#fff" opacity="0.1"/>
                  <path id="Path_323" data-name="Path 323" d="M471.39,444.46l-14.06,2.7V426.39l13.17-3.32Z" transform="translate(-1261.996 692.997)" fill="#fff" opacity="0.1"/>
                </g>
              </g>
            </svg>
            <h2 id="pretty-empty" style={{ fontFamily: "'Lato', sans-serif", marginTop: "10px" }}>Seems pretty empty here...</h2>
          </div>
          <Link to={'/newProject'} className="stProjectBtn">
            Start Your First Project! <i className="far fa-plus-square" style={{marginTop: "1px"}}></i>
          </Link>
        </div>
      );
    }

    else {
      return this.props.projects.reverse().map((project, i) => {
        return(
          <div className="projectCardCont" key={project._id}>
            <div className="cardHeaderContainer">
              <div style={{marginRight: "15px"}}>
                <h2 className="cardTitle">{project.projectTitle}</h2>
                <p className="cardService">{project.serviceSelect}</p>
                <div className="cardDivider">
                </div>
              </div>
              <div className="statAndDate">
                <div id="project-status" className="cardStatus">{project.status}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "15px" }}>{new Date(project.dateSent).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="togglerContainer">
              <div style={{display: "flex", alignItems: "center"}}>
                <div className="cardToggler" id="card-toggle">
                  Credits Consumed: {project.credsConsumed}
                </div>
              </div>
              <div className="projectNumber">
                #{i+1}
              </div>
            </div>
            <div className="slackAndAssetCont" id="card-links">
              <h2 id="card-slack-header" className="cardSlackHeader">Join your team on <a target="_blank" rel="noreferrer" href="https://slack.com/"><span className="slackHeading"><i className="fab fa-slack-hash" style={{ marginRight: "2.5px", fontSize: "20.5px" }}></i>slack</span></a></h2>
              <div className="slackInviteLink">
                <p>{project.slack}</p>
              </div>
              <h2 id="card-slack-header" className="cardSlackHeader" style={{ marginTop: "10px" }}>Assets<i id="fontInfo" className="fas fa-info-circle" title="For additional layer of security, assets are stored on cloud storage which can only be accessed through your given email."></i></h2>
              <div className="assetLink">
                <p>{project.assets}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return(
      <div>
        {this.renderProjects()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
