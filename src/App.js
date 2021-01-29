import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Addresse from "./Component/Profile/Address";
function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Addresse />
    </div>
  );
}

export default App;
