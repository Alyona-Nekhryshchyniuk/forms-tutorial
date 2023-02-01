import './App.css';
import React, { Component } from 'react';
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import CheckboxForm from './CheckboxForm/CheckboxForm';
// import Main from "./Main/Main";
// import Photos from "./Photos/Photos";

// import fruits from "./header.json";
// import images from "./img.json";
const INTERESTS = ['yoga', 'football', 'hokey', 'dancing'];

class App extends Component {
  // state = {
  //   internalStateData: 0,
  // };

  // getFormData = (internalStateData) => {
  //   console.log(internalStateData);
  //   this.state = {
  //     internalStateData: internalStateData,
  //   };
  // };

  render() {
    return (
      <>
        {/* <Header fruits={fruits} /> */}
        <CheckboxForm interests={INTERESTS} />
        {/* <Main>
        <Photos images={images} />
      </Main> */}

        {/* <Footer data={this.getFormData} /> */}
      </>
    );
  }
}

export default App;
