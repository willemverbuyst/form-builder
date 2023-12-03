import { ReactNode } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 10rem;
  background-color: var(--color-teal);
  outline: none;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  color: var(--color-white);
`;

type ButtonProps = {
  children: ReactNode;
  customStyles?: React.CSSProperties;
  handleClick?: () => void;
};

export default function Button({
  customStyles,
  children,
  handleClick,
}: ButtonProps) {
  return (
    <StyledBtn style={customStyles} onClick={handleClick}>
      {children}
    </StyledBtn>
  );
}
