import { IoPrintOutline, IoSaveOutline } from "react-icons/io5";
import styled from "styled-components";
import Button from "./wrappers/button";
import Icon from "./wrappers/icon";

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

const Buttons = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export default function Header() {
  const customBtnStyles = {
    width: "4rem",
    backgroundColor: "var(--color-gold)",
    color: "var(--color-black)",
  };

  return (
    <Wrapper>
      <HeaderText>Form Builder</HeaderText>
      <Buttons>
        <Button customStyles={customBtnStyles}>
          <Icon>
            <IoPrintOutline />
          </Icon>
        </Button>
        <Button customStyles={customBtnStyles}>
          <Icon>
            <IoSaveOutline />
          </Icon>
        </Button>
      </Buttons>
    </Wrapper>
  );
}
