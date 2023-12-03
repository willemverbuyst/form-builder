import styled from "styled-components";
import SaveBtn from "./buttons/saveBtn";

const Wrapper = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: var(--color-gold);
`;

export default function Header() {
  return (
    <Wrapper>
      <HeaderText>Form Builder</HeaderText>
      <SaveBtn />
    </Wrapper>
  );
}
