import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./classComponent/ClassCounter";
import FunctionCounter from "./functionComponent/FunctionCounter";
import FunctionDynamicProps from "./functionComponent/FunctionDynamicProps";
import ClassDynamicProps from "./classComponent/ClassDynamicProps";
import FunctionFormDemo from "./functionComponent/FunctionFormDemo";
import ClassFormDemo from "./classComponent/ClassFormDemo";
import FunctionToggle from "./functionComponent/FunctionToggle";
import FunctionDisplayHidden from "./functionComponent/FunctionDisplayHidden";
import FunctionMap from "./functionComponent/FunctionMap";
import FunctionTableList from "./functionComponent/FunctionTableList";
import FunctionUseEffect from "./functionComponent/FunctionUseEffect";
import FunctionUseEffectWithProps from "./functionComponent/FunctionUseEffectWithProps";
import FuncionUseRef from "./functionComponent/FunctionUseRef";
import FunctionForwardRef from "./functionComponent/FunctionForwardRef";
import FunctionControlComponent from "./functionComponent/FunctionControlComponent";
import FunctionUncontrolComponent from "./functionComponent/FunctionUncontrolComponent";
import ComA from "./functionComponent/useContext/ComA";

function App() {
  return (
    <div className="App">
      {/* <div className="cal">
        <ClassCounter />
        <FunctionCounter />
      </div>
      <hr />
      <div className="cal">
        <ClassDynamicProps name="Niyati Sheth" />
        <FunctionDynamicProps name="Niyu Sheth" />
      </div>
      <hr />
      <div className="cal">
        <ClassFormDemo />
       <div> <FunctionFormDemo/></div>
      </div>
      <hr />
      <div className="cal">
        <FunctionToggle />
        <FunctionDisplayHidden/>
      </div>
      <hr /> */}
      {/* <div>
        <FunctionMap/>
      </div> */}
      {/* <hr />  */}
      {/* <div>
        <FunctionTableList/>
      </div>
      <hr/> */}
      {/* <div>
        <FunctionUseEffect/>
      </div>
      <hr/> */}
      {/* <div>
        <FunctionUseEffectWithProps/>
      </div>
      <hr/> */}
      {/* <div>
        <FuncionUseRef/>
      </div>
      <hr/> */}
      {/* <div>
        <FunctionForwardRef/>
      </div>
      <hr/> */}
      {/* <div>
        <FunctionControlComponent/>
      </div>
      <hr/>
      <div>
        <FunctionUncontrolComponent/>
      </div>
      <hr/> */}
      <div>
        <ComA />
      </div>
      <hr />
    </div>
  );
}

export default App;
