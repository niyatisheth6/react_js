import React,{Component} from 'react'
class ClassCounter extends Component {
  constructor(){
    super();
    this.state={
      data:0
    }
  }
  render() {
    return (
      <div>
        <h2>ClassCounter</h2>
        <h3>Counter {this.state.data}</h3>
        <button onClick={() =>this.setState({data:this.state.data+1})}>Add</button>
        <button onClick={() =>this.setState({data:this.state.data-1})}>Sub</button>
      </div>
    );
  }
}
export default ClassCounter;
