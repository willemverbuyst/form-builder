import Form from "./components/form";
import FormElements from "./components/formElements";
import Header from "./components/header";

function App() {
  return (
    <main className="main">
      <Header />
      <section className="form-section">
        <FormElements />
        <Form />
      </section>
    </main>
  );
}

export default App;
