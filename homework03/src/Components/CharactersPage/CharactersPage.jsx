import { Component } from "react";
import Character from "../Character/Character.jsx"
export default class CharacterPage extends Component {
    URL="https://swapi.dev/api/people";
  constructor() {
      super();
    this.state = {
      characters: [],
    };
  }

  getData=async()=>{
    const response = await fetch(this.URL)
    const data = await response.json()
    this.setState({
      characters:data.results
    })
    console.log(this.state.characters)
  };
   
    
 componentDidMount() {
   this.getData()
    console.log("COMPONENT DID MOUNT");

  }

  render() {
    return (
      <div>
        <h1>Home Work 03</h1>
       
        {this.state.characters.map((character)=>{
          return<Character key={character.id} data={character}/>
        })}
      
      </div>
    );
  }
}
