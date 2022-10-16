import "./App.css";
import ChildComponents from "./components/ChildComponents";

function App() {
  return (
    <div className="App">
      <ChildComponents
        imgUrl={"https://www.w3schools.com/howto/img_avatar.png"}
        name={"Ronak"}
        jobdesc={"web developer"}
      />

      <ChildComponents
        imgUrl={"https://www.w3schools.com/howto/img_avatar.png"}
        name={"Ritesh"}
      />
    </div>
  );
}

export default App;
