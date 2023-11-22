import styled from "styled-components";
import DesignerContextProvider from "./components/context/designerContext";
import FormBuilder from "./components/formBuilder";
import Header from "./components/header";

const Main = styled.main`
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

function App() {
  return (
    <DesignerContextProvider>
      <Main>
        <Header />
        <FormBuilder />
      </Main>
    </DesignerContextProvider>
  );
}

export default App;
