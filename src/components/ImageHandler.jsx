import React from "react";
import {useState} from "react"
import {ButtonImport, ButtonPost} from "./index";
import axios from "axios"
import {v4 as uuidv4} from 'uuid';
import { HOST_URL, API_POST, API_GET } from '../config'
import "../css/Button.css";


// export default class ImageHandler extends React.Component {
const ImageHandler = (props) => {

  let [v_hasfile1, set_v_hasfile1] = useState(false)
  let [v_hasfile2, set_v_hasfile2] = useState(false)
  let [v_myid, set_v_myid] = useState(null)
  let [v_files, set_v_files] = useState(null)
  // let [file_get, set_file_get] = useState(null)
  let [url_get, set_url_get] = useState(null)

  const selectFile = (e) => {

    set_v_files(e.target.files)
    set_v_hasfile1(true)
    set_v_hasfile2(false)
    set_v_myid(uuidv4())
    // console.log(this.state.files)
  }

  const postImage = async (e) => {
    
    set_v_hasfile2(false)
    const url = `${HOST_URL}/${API_POST}/`;
    var fd = new FormData();
    fd.append('file', v_files[0])

    const config_post = { headers: 
                      { 'Content-Type': 'multipart/form-data',
                        'dataID': v_myid}
    };
    axios.post(url, fd, config_post).then(res_post => {
    
      console.log(res_post.status)
      
      set_url_get(`${HOST_URL}/${API_POST}/?dataID=${v_myid}`)
      set_v_hasfile2(true)

    }).catch(e => {
      console.log(e)
    })
  }
  
    
  return (
    <div>
      <div>
        <ButtonImport
          className="image"
          name="image"
          onChange={e => selectFile(e)}
        >
          image
        </ButtonImport>

        <ButtonPost
          className="submit"
          name="submit"
          onClick={e => postImage(e)}
        >
          submit
        </ButtonPost>
      </div>
        <table>
          <tbody>
            <tr>
              <td>{v_hasfile1 && <img src={URL.createObjectURL(v_files[0])} className="imagescls" alt='input' />}</td>
              <td>{v_hasfile2 && <img src={url_get} className="imagescls" alt='output' />}</td>
              {/* <td>{v_hasfile2 && <img src={this.state.file_result} alt='Thumb' /> }</td> */}
              {/* <td>{v_hasfile2 && <img src={this.state.url_get} alt='Thumb2' />}</td> */}
            </tr>
          </tbody>
        </table>
    </div>
    
  )
}

export default ImageHandler;  
