import DesignerContextProvider from "./components/context/designerContext";
import FormBuilder from "./components/formBuilder";
import Header from "./components/header";

function App() {
  return (
    <DesignerContextProvider>
      <main className="main">
        <Header />
        <FormBuilder />
      </main>
    </DesignerContextProvider>
  );
}

export default App;
