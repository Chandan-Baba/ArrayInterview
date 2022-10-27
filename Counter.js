/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzKMXX
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
const App = () => {
  const [counter,setCounter] = React.useState(0);
  
  const onIncrement = () => {
    setCounter(counter+1)
  }
  const onDecrement = () => {
    if(counter > 0){
    setCounter(counter-1)
    }
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
