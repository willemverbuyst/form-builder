import { ReactNode } from "react";
import styled from "styled-components";

const Section = styled.section`
  border-radius: 10px;
  background-color: inherit;
  color: var(--color-white);
`;

type CardProps = {
  children: ReactNode;
  customStyles?: React.CSSProperties;
};

export default function Card({ customStyles, children }: CardProps) {
  return <Section style={customStyles}>{children}</Section>;
}
