import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import UseLayoutEffect from "./components/useLayoutEffect/UseLayoutEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseReducer from "./components/useReducer/UseReducer";
import UseRef from "./components/useRef/UseRef";
import GenerateRamdomColor from "./components/useState/GenerateRamdomColor";
import UseState from "./components/useState/UseState";

function App() {
  return (
    <div>
      {/* <h1>1. useState </h1>
      <UseState />
      <h1>2. useEffect </h1>
      <UseEffect />
      <h1>3. useContext </h1>
      <UseContext />
      <h1>4. useReducer </h1>
      <UseReducer />
      <h1>5. useRef </h1>
      <UseRef />
      <h1>6. useLayoutEffect </h1>
      <UseLayoutEffect /> */}
      <h1>7. useMemo </h1>
      <UseMemo />
      {/* <h1>Generate Random Color</h1>
      <GenerateRamdomColor /> */}
    </div>
  );
}

export default App;
