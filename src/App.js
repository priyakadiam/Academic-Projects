import "./App.css";
import AcademicProjects from "./components/academicProjects/AcademicProjects.js";
import Domains from "./components/domains/Domains.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <AcademicProjects />
      <Domains />
    </div>
  );
}

export default App;
