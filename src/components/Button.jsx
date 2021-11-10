
// import React, { useState } from "react";
import React from "react";
import {makeStyles} from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import Button from '@material-ui/core/Button';
import axios from "axios"
import {v4 as uuidv4} from 'uuid';
import { HOST_URL, API_POST, API_GET } from '../config'

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
    // <button onClick={e => this.handleUpload(e)}>Upload</button>
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
      file_result: null
    };
  }

  handleFile(e) {
    // let image = e.target.files[0];
    this.setState({ hasfile: true})
    this.setState({ myid: uuidv4() });
    this.setState({ files: e.target.files });
    console.log(this.state.files)
  }

  async handleUpload(e) {
    
    const url = `${HOST_URL}/${API_POST}/`;
    var fd = new FormData();
    
    console.log(this.state.hasfile);
    console.log(this.state.myid);
    console.log(this.state.files);
    
    
    // fd.append('fields', this.state.myid)
    fd.append('file', this.state.files[0])

    // var fileObject = document.getElementById('id')
    // fd.append('file', this.state.files[0])

    const config_post = { headers: 
                      { 'Content-Type': 'multipart/form-data',
                        'dataID': this.state.myid}
    };
    const config_get = { headers: 
                      {'dataID': this.state.myid, 
                       'Content-Type' : 'image/jpeg'}
    };
    // const config =  {headers: fd.getHeaders()}
    // const config = { headers: { ...fd.getHeaders() }};

    console.log('url:', url)
    axios.post(url, fd, config_post).then(res_post => {
    
      console.log(res_post.status)
      axios.get(url, config_get).then(res_get => {
        console.log(res_get.status)
        this.setState({ hasfile2: true})
      }).catch(e => {
        console.log(e)
      })

    }).catch(e => {
      console.log(e)
    })
  }
  
  render() {

    let hasfile = this.state.hasfile
    let hasfile2 = this.state.hasfile2

    return (
      <div>
        <UploadButton
          className="image"
          name="image"
          onChange={e => this.handleFile(e)}
        >
          image
        </UploadButton>

        <SubmitButton
          className="submit"
          name="submit"
          onClick={e => this.handleUpload(e)}
        >
          submit
        </SubmitButton>

        {hasfile && 
           <img src={URL.createObjectURL(this.state.files[0])} alt='Thumb' /> }
        
        {hasfile2 && 
           
           <img src={`${HOST_URL}/${API_POST}/`} alt='Thumb2' /> 
        }
      </div>
    );
  }
}

  
