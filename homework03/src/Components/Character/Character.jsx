import { Component } from "react";
import "./Character.css" 
class Character extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor");
    console.log(props.data)
    
  }
  render() {
    return (
      <div className="charactherDiv">
        <h2>{this.props.data.name}</h2>
        <h4>{this.props.data.height}</h4>
        <h4>{this.props.data.gender}</h4>
        <h4>{this.props.data.birth_year}</h4>
        <br/>
      </div>
    );
  }
}

export default Character;
