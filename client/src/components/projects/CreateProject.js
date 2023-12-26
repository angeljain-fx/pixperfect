import React, { Component } from 'react';
import $ from 'jquery';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';

import './styles/createProject.css';
import './styles/progress.css';
import './styles/serviceList.css';
import './styles/radioButtons.css';

import './styles/projectBrief.css';

import './styles/team.css';

import './styles/delivery.css';
import slow from '../../files/slow.png';
import fast from '../../files/fast.png';
import standard from '../../files/standard.png';
import premium from '../../files/premium.png';

import RenderInputs from './RenderInputs';
import RenderAnotherInput from './RenderAnotherInput';
import FieldFileInput from './FieldFileInput';
import RenderEditor from './RenderEditor';

import './styles/deadlineBtn.scss';

import validateEmail from '../../utils/validateEmail';

class CreateProject extends Component {
  validateProjectForm () {
    var x = document.getElementById('validateInputs').value;
      if (x == "") {
        alert("You have missing field(s) important for submission of project");
        return false;
    }

  }



  componentDidMount() {

    $("#project-brief").hide();
    $("#team").hide();
    $("#delivery").hide();
    $("#checkout").hide();
    $("#nxt1").click(function(){
      $("#service-list").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#project-brief").fadeIn(1000);
    });
    $("#back1").click(function(){
      $("#project-brief").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#service-list").fadeIn(1000);
    });
    $("#nxt2").click(function(){
      $("#project-brief").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#team").fadeIn(1000);
    });
    $("#back2").click(function(){
      $("#team").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#project-brief").fadeIn(1000);
    });
    $("#nxt3").click(function(){
      $("#team").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#delivery").fadeIn(1000);
    });
    $("#back3").click(function(){
      $("#delivery").hide();
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
      $("#team").fadeIn(1000);
    });
    $(".toggle-content").hide();
    $(".service-controller").click(function(){
      $(".toggle-content").fadeIn("slow");
      $(".service-controller").hide();
    });
    $(".service-controller-rev").click(function(){
      $(".toggle-content").hide();
      $(".service-controller").fadeIn(1000);
    });
    $("#keybtn").click(function(){
      $("#keyList").slideToggle(750);
    });
    $("#dl-toggler").hide();
    $('#deadlineBtn').click(function(){
      $(this).toggleClass('toggle-on');
      $("#dl-toggler").fadeToggle("slow");
    });
    $("#nxt4").click(function(){
      $('html, body').animate({
             scrollTop: $("html").offset().top
      }, 1000);
    });
  }

  ServiceList = () => {
      return (
          <div className="sl-container">
            <div className="progress-bar1-container">
              <div className="progress-flowbar1"></div>
              <div className="progress-content">
                  <div className="content-contain">
                    <div className="num-circle">
                      <p>1</p>
                    </div>
                    <p className="service progress-one">Service</p>
                  </div>
                  <div className="content-contain">
                    <div className="num-circle num-circle-four">
                      <p>2</p>
                    </div>
                    <p className="service notActivated">Brief</p>
                  </div>
                  <div className="content-contain">
                    <div className="num-circle num-circle-four">
                      <p>3</p>
                    </div>
                    <p className="service notActivated">Team</p>
                  </div>
                  <div className="content-contain">
                    <div className="num-circle num-circle-four">
                      <p>4</p>
                    </div>
                    <p className="service notActivated">Delivery</p>
                  </div>
              </div>
            </div>

            <div className="sl-form-container">
              <p className="sl-heading">Choose a service</p>
              <p className="sl-subheading">Let's start with choosing one of the deliverable services that you want your PixPerfect team to work on.</p>
              <div className="button-list-container">

                <Field id="option-1" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Logo Design"/>
                <Field id="option-2" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Brand Identity Design"/>
                <Field id="option-3" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Presentation"/>
                <Field id="option-4" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Case Study"/>
                <Field id="option-5" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Landing Page"/>
                <Field id="option-6" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Pitch Deck"/>
                <Field id="option-7" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="OnePager/Flyer"/>
                <Field id="option-8" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Document"/>
                <Field id="option-9" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Infographic Design"/>
                <Field id="option-10" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Poster Illustrative Design"/>
                <Field id="option-11" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Web Advertisement"/>
                <Field id="option-12" className="radio-input-def" type="radio" name="serviceSelect" component="input" value="Website Prototype Design"/>

                <label htmlFor="option-1" className="option-1 rad-container">

                    <p id="radioText" className="radio-text"><span className="serLabelFix">Logo Design</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>

                </label>
                <label htmlFor="option-2" className="option-2 rad-container">
                  <p className="radio-text"><span className="serLabelFix">Brand Identity Design</span></p>
                  <span className="radio-checkmark"><div className="radio-dot"></div></span>
                </label>
                <label htmlFor="option-3" className="option-3 rad-container">
                  <p className="radio-text"><span className="serLabelFix">Presentation</span></p>
                  <span className="radio-checkmark"><div className="radio-dot"></div></span>
                </label>
                <label htmlFor="option-4" className="option-4 rad-container">
                  <p className="radio-text"><span className="serLabelFix">Case Study</span></p>
                  <span className="radio-checkmark"><div className="radio-dot"></div></span>
                </label>
                <label htmlFor="option-5" className="option-5 rad-container">
                  <p className="radio-text"><span className="serLabelFix">Landing Page Design</span></p>
                  <span className="radio-checkmark"><div className="radio-dot"></div></span>
                </label>
                <div className="toggle-content">
                  <label htmlFor="option-6" className="option-6 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Pitch Deck</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-7" className="option-7 rad-container">
                    <p className="radio-text"><span className="serLabelFix">One-Pager/Flyer</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-8" className="option-8 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Document</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-9" className="option-9 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Infographic Design</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-10" className="option-10 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Poster/Illustrative Design</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-11" className="option-11 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Web-Ad Design</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <label htmlFor="option-12" className="option-12 rad-container">
                    <p className="radio-text"><span className="serLabelFix">Website Prototype Design</span></p>
                    <span className="radio-checkmark"><div className="radio-dot"></div></span>
                  </label>
                  <p className="ser-contact">Can't find the service you're looking for? <a href="#" className="ser-link">Contact Us</a></p>
                  <button type="button" className="service-controller-rev ser-style">Show Less</button>
                </div>
                <button type="button" className="service-controller ser-style">Show More<i className="material-icons ex-ic">expand_more</i></button>
              </div>
            </div>

          </div>
      );
  }

  ProjectBrief = () => {
    return(
      <div className="sl-container">
        <div className="progress-bar1-container">
          <div className="progress-flowbar1 mod-projb"></div>
          <div className="progress-content">
              <div className="content-contain">
                <div className="num-circle">
                  <p>1</p>
                </div>
                <p className="service progress-one">Service</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>2</p>
                </div>
                <p className="service">Brief</p>
              </div>
              <div className="content-contain">
                <div className="num-circle num-circle-four">
                  <p>3</p>
                </div>
                <p className="service notActivated">Team</p>
              </div>
              <div className="content-contain">
                <div className="num-circle num-circle-four">
                  <p>4</p>
                </div>
                <p className="service notActivated">Delivery</p>
              </div>
          </div>
        </div>
        <div className="brief-container">
          <p className="sl-heading">Create a project brief</p>
          <p className="sl-subheading">Give us some content and brief details regarding your design needs.</p>
          <div className="pb-owner">Project Title</div>
          <Field id="pbTitle" className="owner-name" type="text" component={RenderAnotherInput} name="projectTitle" />
          <div className="pb-owner">Description</div>
          <div>
            <Field name="descriptionBox" component={RenderEditor}/>
          </div>
          <div className="pb-owner">Project Attachment</div>
          <Field type="file" name="image" component={FieldFileInput} />
        </div>
      </div>
    );
  }

  Team = () => {
    return(
      <div className="sl-container">
        <div className="progress-bar1-container">
          <div className="progress-flowbar1 mod-team" ></div>
          <div className="progress-content">
              <div className="content-contain">
                <div className="num-circle">
                  <p>1</p>
                </div>
                <p className="service progress-one">Service</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>2</p>
                </div>
                <p className="service">Brief</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>3</p>
                </div>
                <p className="service">Team</p>
              </div>
              <div className="content-contain">
                <div className="num-circle num-circle-four">
                  <p>4</p>
                </div>
                <p className="service notActivated">Delivery</p>
              </div>
          </div>
        </div>
        <div className="brief-container">
          <p className="sl-heading">StellarEffex Teams</p>
          <p className="sl-subheading">Choose the right team according to your budget and design needs. Note that higher level teams consume credits faster.</p>
          <div className="team-container">
            <Field id="happy-radio" type="radio" className="team-select" name="teamSelector" component="input" value=""/>
            <Field id="lovers-radio" type="radio" className="team-select" name="teamSelector" component="input" value="Premium Creative Team"/>
            <div className="team-mobile">
              <label htmlFor="happy-radio" className="deteam rad-container-mod">
                <div className="del-cont">
                  <img alt="std2x" src={standard} style={{ width: "50px", height: "50px", margin: "10px 0px 10px -5px" }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p id="deTeam" className="radio-text radio-text-mod radio-text-exmod">Design Essentials Team (<i className="fas fa-tag"></i>$55/hr)</p>
                    <ul className="radio-text radio-subtext-mod teamListItems">
                      <li><i className="fas fa-check"></i>Creative Designer</li>
                      <li><i className="fas fa-check"></i>Project Manager</li>
                      <li><i className="fas fa-check"></i>Quality Control</li>
                    </ul>
                  </div>
                </div>
              </label>
              <label htmlFor="lovers-radio" className="pcteam rad-container-mod">
                <div className="del-cont">
                  <img alt="premium4x" src={premium} style={{ width: "50px", height: "50px", margin: "10px 0px 10px -5px" }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p id="pcTeam" className="radio-text radio-text-mod radio-text-exmod">Premium Creative Team (<i className="fas fa-tag"></i>$75/hr)</p>
                      <ul className="radio-text radio-subtext-mod teamListItems">
                        <li><i className="fas fa-check"></i>Design Director</li>
                        <li><i className="fas fa-check"></i>Project Manager</li>
                        <li><i className="fas fa-check"></i>Quality Control</li>
                        <li><i className="fas fa-check"></i>Aesthetified</li>
                      </ul>
                  </div>
                </div>
              </label>
            </div>
            <div className="selector">
              <label htmlFor="happy-radio" className="happy-card team-card">
                <h1 className="team-title">Design Essentials Team</h1>
                <p className="team-subheading">Don't get stuck worrying about all your design needs! Leave that to this skillful team and focus on your core business.</p>
                <ul className="team-comp">
                  <li>1 Dedicated Creative Designer</li>
                  <li>Dedicated Project Manager</li>
                  <li>Quality Control</li>
                  <li>Supports existing style concepts and templates</li>
                </ul>
                <p className="offer-applied" tooltip="NEW50 applied (50% off for new users)"><i className="fas fa-tag"></i>-50% OFF</p>
                <p className="team-selected1"><strike>$110</strike> $55/hr</p>
              </label>

              <label htmlFor="lovers-radio" className="lovers-card team-card">
                <h1 className="team-title">Premium Creative Team</h1>
                <p className="team-subheading">Looking for exceptional creative juice in your designs? Take advantage of this always-on dedicated senior team.</p>
                <ul className="team-comp">
                  <li>1 Dedicated Design Director</li>
                  <li>Dedicated Project Manager</li>
                  <li>Quality Control</li>
                  <li>Supports fresh & exceptional style concepts</li>
                </ul>
                <p className="offer-applied" tooltip="NEW50 applied (50% off for new users)"><i className="fas fa-tag"></i>-50% OFF</p>
                <p className="team-selected1"><strike>$150</strike> $75/hr</p>
              </label>

              <label htmlFor="happy-radio" className="happy-pick"><i className="fas fa-arrow-circle-left"></i>Switch to Design Essentials Team</label>
              <label htmlFor="lovers-radio" className="lovers-pick">Switch to Premium Creative Team<i className="fas fa-arrow-circle-right"></i></label>
            </div>
          </div>
          <div className="keypoints-cont">
            <div id="keybtn" className="keyhead-cont">
              <p className="kp-heading"><i className="fas fa-exclamation-circle"></i>Some important points regarding PixPerfect Teams and Pricing:</p>
            </div>
            <ol id="keyList" className="team-points">
              <li>If you have any issues regarding the team structure or how they work, you can always <a href="#" className="ser-link">contact sales</a>. (Sales Team will reply to you in just a few hours to resolve all your queries.)</li>
              <li>Usually Design Essentials Team is flexible enough to cover all your needs and Premium Creative Team for more creative designs.</li>
              <li>1$ = 1 credit of your PixPerfect Wallet.</li>
              <li>You have to pay to add credits only after our project manager reviews your project and concludes the estimated hours required for it. This will save you from a lot of money unnecessarily spent in subscription based systems.</li>
              <li><b>Credits are consumed at an hourly rate of a chosen team.</b> You will be adding credits at the fixed 1$ rate and your credits will be deducted according to the hourly charge of the chosen team.</li>
            </ol>
          </div>
        </div>

      </div>
    );
  }

  Delivery = () => {
    return (
      <div className="sl-container">
        <div className="progress-bar1-container">
          <div className="progress-flowbar1 mod-delivery"></div>
          <div className="progress-content">
              <div className="content-contain">
                <div className="num-circle">
                  <p>1</p>
                </div>
                <p className="service progress-one">Service</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>2</p>
                </div>
                <p className="service">Brief</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>3</p>
                </div>
                <p className="service">Team</p>
              </div>
              <div className="content-contain">
                <div className="num-circle">
                  <p>4</p>
                </div>
                <p className="service">Delivery</p>
              </div>
          </div>
        </div>

        <div className="brief-container">
          <p className="sl-heading">Delivery Speed</p>
          <p className="sl-subheading">Choose a delivery speed as per your needs. Note that slower speeds come with a price discount.</p>
          <Field id="no-rush" className="radio-input-def" type="radio" name="deliverySpeed" component="input" value="No Rush Delivery price discount details will be given by your Project Manager." />
          <Field id="standard-del" className="radio-input-def" type="radio" name="deliverySpeed" component="input" value="Standard Delivery at no extra cost." />
          <label htmlFor="no-rush" className="no-rush rad-container-mod">
            <div className="del-cont">
              <img alt="2x" src={slow} style={{ width: "50px", height: "50px", marginLeft: "-5px" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p id="radioText" className="radio-text radio-text-mod">No-Rush Delivery</p>
                <p className="radio-text radio-subtext-mod">First delivery of assets in 4-5 business days.</p>
              </div>
            </div>
          </label>
          <label htmlFor="standard-del" className="standard-del rad-container-mod">
            <div className="del-cont">
              <img alt="4x" src={fast} style={{ width: "50px", height: "50px", marginLeft: "-5px" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p id="radioText" className="radio-text radio-text-mod">Standard Delivery</p>
                <p className="radio-text radio-subtext-mod">First delivery of assets in 2-3 business days.</p>
              </div>
            </div>
          </label>
          <div className="pb-owner"><span style={{ color: "blue", fontSize: "22.5px" }}>Work Email</span></div>
          <Field id="pbOwner" className="owner-name" type="text" component={RenderInputs} name="projectOwner" />
          <div className="switch-align">
            <div className="toggle2">
              <input type="checkbox" id="toggle25" />
              <label htmlFor="toggle25" className="deadlineBtnLabel" id="deadlineBtn"></label>
            </div>
            <div className="pb-owner dl-mod">Do you have a fixed deadline for this project?</div>
          </div>
          <div id="dl-toggler">
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <label htmlFor="deadline" style={{fontFamily: "'Lato', sans-serif"}}>Date</label>
                <Field id="deadline" className="owner-name dl-mod-mod" type="date" name="deadline" component="input" />
              </div>
              <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <label htmlFor="deadlineTime" style={{fontFamily: "'Lato', sans-serif"}}>Time</label>
                <Field id="deadlineTime" className="owner-name dl-mod-mod" type="time" name="timedl" component="input" />
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
              <label htmlFor="deadlineTime" style={{fontFamily: "'Lato', sans-serif"}}>Timezone</label>
              <Field id="time-zone" className="owner-name dl-mod-mod" name="timezone" component="select">
                <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                <option value="-10:00">(GMT -10:00) Hawaii</option>
                <option value="-09:50">(GMT -9:30) Taiohae</option>
                <option value="-09:00">(GMT -9:00) Alaska</option>
                <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                <option value="-04:50">(GMT -4:30) Caracas</option>
                <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                <option value="+03:50">(GMT +3:30) Tehran</option>
                <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                <option value="+04:50">(GMT +4:30) Kabul</option>
                <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                <option value="+08:75">(GMT +8:45) Eucla</option>
                <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
              </Field>
            </div>
          </div>
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = { formChanged: false }
  }

  render() {
    return(
      <div>
        <Prompt
          when={this.state.formChanged}
          message='You have unsaved changes, are you sure you want to leave?'
        />
        <form id="form-class-handle" onChange={ () => this.setState({ formChanged: true }) } onSubmit={this.props.handleSubmit(this.props.onProjectSubmit)} encType="multipart/form-data">
          <div style={{ display: "flex" }}>
            <div id="service-list">
              {this.ServiceList()}
              <button type="button" id="nxt1" className="nxt">Next Step<i className="material-icons ex-ic">keyboard_arrow_right</i></button>
            </div>
            <div id="project-brief">
              {this.ProjectBrief()}
              <button type="button" id="back1" className="goBack"><i className="material-icons ex-ic-opp">keyboard_arrow_left</i>Previous Step</button>
              <button type="button" id="nxt2" className="nxt">Next Step<i className="material-icons ex-ic">keyboard_arrow_right</i></button>
            </div>
            <div id="team">
              {this.Team()}
              <button type="button" id="back2" className="goBack"><i className="material-icons ex-ic-opp">keyboard_arrow_left</i>Previous Step</button>
              <button type="button" id="nxt3" className="nxt">Next Step<i className="material-icons ex-ic">keyboard_arrow_right</i></button>
            </div>
            <div id="delivery">
              {this.Delivery()}
              <button type="button" id="back3" className="goBack"><i className="material-icons ex-ic-opp">keyboard_arrow_left</i>Previous Step</button>
              <button type="submit" id="nxt4" className="nxt" onClick={this.validateProjectForm}>Review<i className="material-icons ex-ic">keyboard_arrow_right</i></button>
            </div>
          </div>
        </form>
      </div>


    );
  }
}

function validate(values) {
  const errors = {};

  errors.projectOwner = validateEmail(values.projectOwner || '');

  if(!values.projectOwner) {
    errors.projectOwner = "Important! Missing Contact Email Address";
  }

  if(!values.projectTitle) {
    errors.projectTitle = "Missing Title of the Project";
  }


  return errors;
}

export default reduxForm({
  validate,
  form: 'projectForm',
  destroyOnUnmount: false
})(CreateProject);
