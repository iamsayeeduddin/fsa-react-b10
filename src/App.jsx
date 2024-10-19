import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Tabs from "./components/Tabs";

function App() {
  let names = ["Sayeed", "Altaf", "John", "Vinod", "Imad"];
  const NewComp = Tabs;

  return (
    <>
      {/* <div>
        {names.map((ele, idx) => (
          <div key={ele + idx}>
            <Greeting name={ele} />
          </div>
        ))}
        <Counter />
      </div> */}
      <NewComp />
    </>
  );
}

export default App;
