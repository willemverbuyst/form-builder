import styled from "styled-components";
import SidebarBtnElement from "./buttons/sidebarBtn";
import Card from "./card";
import { FormElements } from "./formElememtType";

const Section = styled.section`
  width: 10rem;
  padding: 0.5rem;
`;

export default function Sidebar() {
  return (
    <Card>
      <Section>
        <SidebarBtnElement formElement={FormElements.TextField} />
      </Section>
    </Card>
  );
}
