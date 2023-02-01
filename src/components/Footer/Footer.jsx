// import { nanoid } from "nanoid";
// import React, { Component } from "react";
// import { Foot } from "./Footer.styled";
// import { Form } from "./Footer.styled";
// import { Input } from "./Footer.styled";
// import { Label } from "./Footer.styled";

// class Footer extends Component {
//   state = {
//     surname: "",
//     password: "",
//     salary: "",
//     subscribe: false,
//     under18: false,
//     knowledge: [],
//   };
//   reset = () => {
//     this.setState({
//       surname: "",
//       password: "",
//       salary: false,
//       subscribe: false,
//       under18: false,
//     });
//   };

//   nameGet = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   checkboxHandle = (e) => {
//     this.setState((prevState) => {
//       prevState.knowledge.push(e.target.value);
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.data(this.state);
//     this.reset();
//   };

//   render() {
//     let fo = [
//       "f",
//       "g",
//       "h",
//       "d",
//       "s",
//       "w",
//       "a",
//       "k",
//       "o",
//       "e",
//       "r",
//       "t",
//       "y",
//     ].map((el) => (el = nanoid()));

//     return (
//       <Foot>
//         <Form primary onSubmit={this.handleSubmit}>
//           <Label htmlFor={fo[0]}> Name</Label>
//           <Input
//             type="text"
//             name="surname"
//             id={fo[0]}
//             onChange={this.nameGet}
//             value={this.state.surname}
//           />
//           <Label htmlFor={fo[1]}> Parol</Label>
//           <Input
//             type="password"
//             name="password"
//             id={fo[1]}
//             onChange={this.nameGet}
//             value={this.state.password}
//           />
//           <button type="submit">Submit</button>
//         </Form>

//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor={fo[2]}>Do you want to subscribe?</Label>
//           <Input
//             name="subscribe"
//             type="checkbox"
//             id={fo[2]}
//             onChange={this.nameGet}
//             value={this.state.subscribe}
//           />
//           <Label htmlFor={fo[3]}>Under 18? </Label>
//           <Input
//             type="checkbox"
//             name="under18"
//             id={fo[3]}
//             onChange={this.nameGet}
//             value={this.state.under18}
//           />
//           <button type="submit">Submit</button>
//         </Form>

//         {/* <Form primary onSubmit={this.handleSubmit}>
//           <Label htmlFor={fo[4]}> </Label>
//           <Input type="search" name="joy" id={fo[4]} onChange={this.nameGet} />
//           <Label htmlFor={fo[5]}>How much are you satisfied?</Label>
//           <Input type="range" id={fo[5]} onChange={this.nameGet} />

//           <p>Salary</p>
//           <Label htmlFor={fo[6]}>200$</Label>
//           <Input
//             type="radio"
//             id={fo[6]}
//             name="salary"
//             onChange={this.nameGet}
//             checked={this.state.salary === "200$"}
//             value="200$"
//           />
//           <Label htmlFor={fo[7]}>400$</Label>
//           <Input
//             type="radio"
//             id={fo[7]}
//             name="salary"
//             onChange={this.nameGet}
//             value="400$"
//             // value={this.state.salary}
//             checked={this.state.salary === "400$"}
//           />
//           <Label htmlFor={fo[8]}>800$</Label>
//           <Input
//             type="radio"
//             id={fo[8]}
//             name="salary"
//             onChange={this.nameGet}
//             value="800$"
//             // value={this.state.salary}
//             checked={this.state.salary === "800$"}
//           />
//           <textarea></textarea>
//           <button type="submit">Submit</button>
//         </Form> */}

//         <Form primary onSubmit={this.handleSubmit}>
//           {/* <Label htmlFor={fo[9]}> </Label>
//           <Input type="search" name="joy" id={fo[9]} onChange={this.nameGet} />
//           <Label htmlFor={fo[10]}>How much are you satisfied?</Label>
//           <Input type="range" id={fo[10]} onChange={this.nameGet} /> */}

//           <p>Knowledge</p>
//           <Label htmlFor={fo[11]}>History</Label>
//           <Input
//             type="checkbox"
//             id={fo[11]}
//             name="knowledge"
//             onChange={this.checkboxHandle}
//             // checked={this.state.knowledge === "History"}
//             value="History"
//           />
//           <Label htmlFor={fo[12]}>Math</Label>
//           <Input
//             type="checkbox"
//             id={fo[12]}
//             name="knowledge"
//             onChange={this.checkboxHandle}
//             value="Math"

//             // checked={this.state.knowledge === "Math"}
//           />
//           <Label htmlFor={fo[13]}>IT</Label>
//           <Input
//             type="checkbox"
//             id={fo[13]}
//             name="knowledge"
//             onChange={this.checkboxHandle}
//             value="IT"
//             // value={this.state.salary}
//             // checked={this.state.knowledge === "IT"}
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </Foot>
//     );
//   }
// }

// export default Footer;
