import { ReactNode } from "react";
import styled from "styled-components";

const Section = styled.section`
  border: 3px solid var(--color-blue);
  border-radius: 10px;
  background-color: var(--color-white);
  color: var(--color-teal);
`;

type CardProps = {
  children: ReactNode;
  customStyles?: React.CSSProperties;
};

export default function Card({ customStyles, children }: CardProps) {
  return <Section style={customStyles}>{children}</Section>;
}
