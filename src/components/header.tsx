import styled from "styled-components";
import SaveBtn from "./buttons/saveBtn";
import Card from "./wrappers/card";

const Wrapper = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.h1`
  margin: 0;
`;

export default function Header() {
  return (
    <Card>
      <Wrapper>
        <HeaderText>Form-Builder</HeaderText>
        <SaveBtn />
      </Wrapper>
    </Card>
  );
}
