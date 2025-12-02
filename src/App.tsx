import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resume from "./Pages/Resume";
import Sells from "./Pages/Sells";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Sells />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
