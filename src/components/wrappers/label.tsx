import { ReactNode } from "react";
import styled from "styled-components";

const StyledLabel = styled.p`
  margin: 0;
  padding: 0;
`;

type LabelProps = {
  children: ReactNode;
  customStyles?: React.CSSProperties;
};

export default function Label({ customStyles, children }: LabelProps) {
  return <StyledLabel style={customStyles}>{children}</StyledLabel>;
}
