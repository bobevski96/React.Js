import { Component } from "react";
class Character extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor");
    console.log(props.getData)
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h3>HomeWork 03</h3>
      </div>
    );
  }
}

export default Character;
