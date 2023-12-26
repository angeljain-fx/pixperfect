import React, {Component} from 'react';
import $ from 'jquery';

import './styles/fileUploader.css';

export default class FieldFileInput extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  componentDidMount () {
    $("#selectfile").bind('change',function(){
        var filename = $("#selectfile").val();
        if(/^s*$/.test(filename)){
            $("#blankFile").text("No File Chosen..");
            $(".successTick").fadeOut();
        }else{
            $("#blankFile").text(filename.replace("C:\\fakepath\\",""));
            $(".successTick").fadeIn();
        }
    });
  }

  render(){
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div>

  <div className="container2">

    <div className="upload-container">
      <div className="border-container">
         <div className="file-wrapper">
          <div className="upload-btn-wrapper">
          <button className="btn6 upload-file font-weight-500">
              <span className="upload-btn">
                <i className="fas fa-upload d-block font-50 pb-2"></i>
                <p id="fileHeader576" className="fileBrowserBtn"><span className="dndHide">Drag and Drop or </span><a href="#" id="file-browser">Browse</a> your device.</p>
              </span>
            <div>
              <span className="upload-select-button fileSubHeader576" id="blankFile">
                  Single file of any format providing us design details.
              </span>
              <span className="successTick">
                <i className="far fa-check-circle text-success"></i>
              </span>
            </div>
          </button>
          <input
           type='file'
           onChange={this.onChange}
           id="selectfile"
          />
      </div>
  </div>

      </div>
    </div>
  </div>
     </div>
    )
}
}
