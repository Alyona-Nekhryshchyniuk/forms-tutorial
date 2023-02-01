import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { FooterForm } from './FooterForm.styled';
import { StyledForm } from './FooterForm.styled';
import { Input } from './FooterForm.styled';
import { Label } from './FooterForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.number().required(),
});

const STATE = {
  surname: '',
  password: '',
  salary: '',
  subscribe: false,
  under18: false,
  satisfied: 0,
  knowledge: [],
  additionalInfo: '',
};

class Footer extends Component {
  //   state = {
  //     ...STATE,
  //   };
  reset = () => {
    this.setState({
      ...STATE,
    });
  };

  //   nameGet = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  getCheckboxValue = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  getMultipleCheckboxValue = e => {
    let value = e.target.value;
    let stateArray = this.state.knowledge;

    let addIfLackExcludeIfHas =
      !this.state.knowledge.join(' ').includes(value) && e.target.checked
        ? [...stateArray, value]
        : [...stateArray.filter(el => el !== value)];

    this.setState({
      [e.target.name]: addIfLackExcludeIfHas,
    });
  };

  //   handleSubmit = e => {
  //     e.preventDefault();

  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  render() {
    let newId = [
      'f',
      'g',
      'h',
      'd',
      's',
      'w',
      'a',
      'k',
      'o',
      'e',
      'r',
      't',
      'y',
    ].map(el => (el = nanoid()));

    return (
      <FooterForm>
        <Formik
          validationSchema={schema}
          initialValues={{
            surname: '',
            password: '',
            salary: '',
            subscribe: false,
            under18: false,
            satisfied: 0,
            knowledge: [],
            additionalInfo: '',
          }}
          async
          onSubmit={(values, actions) => {
            this.props.onSubmit(values);
            actions.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <StyledForm>
              <Label htmlFor={newId[0]} primary>
                Name
              </Label>
              <Input
                type="text"
                name="surname"
                id={newId[0]}
                onChange={handleChange}
                //   value={this.state.surname}
                value={values.surname}
              />
              <ErrorMessage name="surname" />
              <Label htmlFor={newId[1]} primary>
                {' '}
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id={newId[1]}
                onChange={handleChange}
                //   value={this.state.password}
                value={values.password}
              />
              <ErrorMessage name="password" />
              <button type="submit">Submit</button>
            </StyledForm>
          )}
        </Formik>
        {/* 
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={newId[2]}>Do you want to subscribe?</Label>
          <Input
            name="subscribe"
            type="checkbox"
            id={newId[2]}
            onChange={this.getCheckboxValue}
            value={this.state.subscribe}
          />
          <Label htmlFor={newId[3]}>Under 18? </Label>
          <Input
            type="checkbox"
            name="under18"
            id={newId[3]}
            onChange={this.getCheckboxValue}
            value={this.state.under18}
          />
          <button type="submit">Submit</button>
        </Form>

        <Form primary onSubmit={this.handleSubmit}>
          <Label htmlFor={newId[5]}>How much are you satisfied?</Label>
          <Input
            type="range"
            id={newId[5]}
            onChange={this.nameGet}
            name="satisfied"
            value={this.state.satisfied}
          />

          <p>highly-anticipated salary</p>
          <Label htmlFor={newId[6]}>200$</Label>
          <Input
            type="radio"
            id={newId[6]}
            name="salary"
            onChange={this.nameGet}
            value="200$"
          />
          <Label htmlFor={newId[7]}>400$</Label>
          <Input
            type="radio"
            id={newId[7]}
            name="salary"
            onChange={this.nameGet}
            value="400$"
            checked={this.state.salary === '400$'}
          />
          <Label htmlFor={newId[8]}>800$</Label>
          <Input
            type="radio"
            id={newId[8]}
            name="salary"
            onChange={this.nameGet}
            value="800$"
            checked={this.state.salary === '800$'}
          />
          <textarea
            onChange={this.nameGet}
            name="additionalInfo"
            style={{ marginBottom: 30 }}
            placeholder="Additional information"
            rows="8"
            cols="12"
            value={this.state.additionalInfo}
          ></textarea>
          <button type="submit">Submit</button>
        </Form>

        <Form primary onSubmit={this.handleSubmit}>
          <p>High-priority Knowledge:</p>
          <Label htmlFor={newId[11]}>History</Label>
          <Input
            type="checkbox"
            id={newId[11]}
            name="knowledge"
            onChange={this.getMultipleCheckboxValue}
            // checked={this.state.knowledge === "History"}
            value="history"
          />
          <Label htmlFor={newId[12]}>Math</Label>
          <Input
            type="checkbox"
            id={newId[12]}
            name="knowledge"
            onChange={this.getMultipleCheckboxValue}
            value="math"

            // checked={this.state.knowledge === "Math"}
          />
          <Label htmlFor={newId[13]}>IT</Label>
          <Input
            type="checkbox"
            id={newId[13]}
            name="knowledge"
            onChange={this.getMultipleCheckboxValue}
            value="IT"
            // value={this.state.salary}
            // checked={this.state.knowledge === "IT"}
          />

          <button type="submit">Submit</button>
        </Form> */}
      </FooterForm>
    );
  }
}

export default Footer;
