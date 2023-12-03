import styled from "styled-components";
import SidebarBtnElement from "./buttons/sidebarBtn";
import { FormElements } from "./formElememtType";
import Card from "./wrappers/card";

const Section = styled.section`
  width: 10rem;
`;

export default function Sidebar() {
  return (
    <Card
      customStyles={{
        padding: "0.5rem",
        backgroundColor: "var(--color-blue-dark)",
      }}
    >
      <Section>
        <SidebarBtnElement formElement={FormElements.TextField} />
      </Section>
    </Card>
  );
}
