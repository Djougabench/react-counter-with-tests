import logo from "./logo.svg"
import "./App.css"
import Counter from "./components/Counter"
import CounterWithProps from "./components/CounterWithProps"
function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterWithProps initialCount={10} increment={10} />
    </div>
  )
}

export default App
