/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [disable,setdisable] = React.useState(false);
  const [val,setVal] =React.useState("")
  const handleChange =(e) =>{
    setVal(e.target.value)
    
  }
  
  
  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e)=> handleChange(e)} value={val} />
      <button disabled={val.length>0 ?false :true}>Submit</button>
      <p>{val}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
