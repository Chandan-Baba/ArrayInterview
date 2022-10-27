/** 
  Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.
  
  Solution: https://codepen.io/angelo_jin/pen/KKXoKgO
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function Child({setValue}) {
  
  const onClick = () => {
    console.log(setValue)
    setValue("hello Child")
  }
  
  return (
    <>
      <div>Child</div>
      <button onClick={onClick}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
