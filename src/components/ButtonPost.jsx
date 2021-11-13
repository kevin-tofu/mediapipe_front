import React from "react";
import Button from '@material-ui/core/Button';

const ButtonPost = (props) => {
  // const classes = useUploadButtonStyles();
  return (
    <Button variant="contained" component="span" {...props} onClick={props.onClick}>
      {props.children}
    </Button>
    // <button onClick={e => this.postImage(e)}>Upload</button>
  );
};
export default ButtonPost;
