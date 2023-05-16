import "./App.css";
import reducer, { initialState } from "./Context/Reducer";
import { StateProvider } from "./Context/StateProvider";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header />
        <Home />
      </StateProvider>
    </div>
  );
}

export default App;
