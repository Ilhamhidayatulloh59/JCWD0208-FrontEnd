import { Counter } from "./components/counter";
import { Home } from "./components/home";

function App() {
  const onStorage = () => {
    localStorage.setItem("id", 10)
  }

  const data = localStorage.getItem("id")
  console.log(data)

  return (
    <div className="App">
      {/* <h1>INI HOME</h1>
      <button onClick={onStorage}>Storage</button>
      <Counter /> */}
      <Home />
    </div>
  );
}

export default App;
