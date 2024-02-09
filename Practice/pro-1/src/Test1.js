function Test1() {
  let name = "niyati sheth";
  function apple() {
    name="khushi"
    alert(name);
  }
  return (
    <div>
      <h1>{name}</h1>
      {/* //create function // 
      <button onClick={apple}>click me</button>
      //create arraw function //{" "}
      <button onClick={() => alert("alert call")}>click me</button> */}
      <button onClick={() => apple()}>click me</button>
    </div>
  );
}
export default Test1;
//not update value in both funtion for that reason we use state