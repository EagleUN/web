import Spinner from 'react-spinner-material';
import React from 'react';

class Loading extends React.Component {
  render() {
  return (
      <div>
      	<center>
        	<Spinner id="spinner" size={50} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
        </ center>
      </div>
    );
  }
}

export default Loading