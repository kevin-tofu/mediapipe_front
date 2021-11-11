
// import React, { useState } from "react";
import React from "react";
import {makeStyles} from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import Button from '@material-ui/core/Button';
import axios from "axios"
import {v4 as uuidv4} from 'uuid';
import { HOST_URL, API_POST, API_GET } from '../config'
import "../css/Button.css";

const useUploadButtonStyles = makeStyles((theme) =>
  createStyles({
    input: {
      display: 'none',
    },
  })
);
const UploadButton = (props) => {
  const classes = useUploadButtonStyles();
  return (
    <label htmlFor={`upload-button-${props.name}`}>
    <input
      accept="image/*"
      className={classes.input}
      id={`upload-button-${props.name}`}
      name={props.name}
      multiple
      type="file"
      onChange={props.onChange}
    />
    <Button variant="contained" component="span" {...props}>
      {props.children}
    </Button>
  </label>
  );
};
const SubmitButton = (props) => {
  // const classes = useUploadButtonStyles();
  return (
    <Button variant="contained" component="span" {...props} onClick={props.onClick}>
      {props.children}
    </Button>
    // <button onClick={e => this.postImage(e)}>Upload</button>
  );
};

export default class Buttons_upsub extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasfile: false,
      hasfile2: false,
      myid: null,
      file: null,
      file_result: null,
      url_get: null
    };
  }

  selectFile(e) {
    this.setState({ files: e.target.files });
    this.setState({ hasfile: true})
    this.setState({ hasfile2: false})
    this.setState({ myid: uuidv4() });
    // console.log(this.state.files)
  }

  async postImage(e) {
    
    this.setState({ hasfile2: false})
    

    const url = `${HOST_URL}/${API_POST}/`;
    var fd = new FormData();
    
    console.log(this.state.hasfile);
    console.log(this.state.myid);
    console.log(this.state.files);
    
    
    fd.append('file', this.state.files[0])
    const config_post = { headers: 
                      { 'Content-Type': 'multipart/form-data',
                        'dataID': this.state.myid}
    };
    // const config_get = { headers: 
    //                       {'Content-Type' : 'image/jpeg', 
    //                       'dataID': this.state.myid, }
    // };

    console.log('url:', url)
    axios.post(url, fd, config_post).then(res_post => {
    
      console.log(res_post.status)
      
      this.setState({ url_get: `${HOST_URL}/${API_POST}/?dataID=${this.state.myid}`})
      this.setState({ hasfile2: true})
      // axios.get(this.state.url_get, config_get).then(res_get => {
      //   console.log(res_get.status)
      //   // this.setState({ file_result: res_get.data})
      //   // this.setState({ file_result: URL.createObjectURL(res_get.data)})
      //   this.setState({ hasfile2: true})
      // }).catch(e => {
      //   console.log(e)
      // })

    }).catch(e => {
      console.log(e)
    })
  }
  
  render() {

    let hasfile = this.state.hasfile
    let hasfile2 = this.state.hasfile2
    
    return (
      <div>
        <div>
          <UploadButton
            className="image"
            name="image"
            onChange={e => this.selectFile(e)}
          >
            image
          </UploadButton>

          <SubmitButton
            className="submit"
            name="submit"
            onClick={e => this.postImage(e)}
          >
            submit
          </SubmitButton>
        </div>
          <table>
            <tbody>
              <tr>
                <td>{hasfile && <img src={URL.createObjectURL(this.state.files[0])} className="imagescls" alt='input' />}</td>
                <td>{hasfile2 && <img src={this.state.url_get} className="imagescls" alt='output' />}</td>
                {/* <td>{hasfile2 && <img src={this.state.file_result} alt='Thumb' /> }</td> */}
                {/* <td>{hasfile2 && <img src={this.state.url_get} alt='Thumb2' />}</td> */}
              </tr>
            </tbody>
          </table>
      </div>
      
    );
  }
}

  
