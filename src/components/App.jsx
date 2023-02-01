import './App.css';
import React, { Component } from 'react';
// import Header from "./Header/Header";
import Footer from './Footer/Footer';
import CheckboxForm from './CheckboxForm/CheckboxForm';
import makesAPIrequests from './Footer/makesAPIrequests';
// import Main from "./Main/Main";
// import Photos from "./Photos/Photos";

// import fruits from "./header.json";
// import images from "./img.json";
const INTERESTS = ['yoga', 'FooterFormball', 'hokey', 'dancing'];

class App extends Component {
  state = {
    formData: {},
  };

  getFormData = async formData => {
    try {
      console.log(formData);
      await makesAPIrequests(formData);

      this.state = {
        formData,
      };
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {/* <Header fruits={fruits} /> */}
        <CheckboxForm interests={INTERESTS} />
        {/* <Main>
        <Photos images={images} />
      </Main> */}

        <Footer onSubmit={this.getFormData} />
      </>
    );
  }
}

export default App;
