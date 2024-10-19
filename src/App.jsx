import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  let names = ["Sayeed", "Altaf", "John", "Vinod", "Imad"];

  return (
    <>
      <div>
        {names.map((ele, idx) => (
          <div key={ele + idx}>
            <Greeting name={ele} />
          </div>
        ))}
        <Counter />
      </div>
    </>
  );
}

export default App;
