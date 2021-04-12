import "./App.css";
import InputSection from "./components/InputSection";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="main">
      <h2>Grocery Bud</h2>

      <section>
        <InputSection />
      </section>

      <section>
        <ListItems />
      </section>
    </div>
  );
}

export default App;
