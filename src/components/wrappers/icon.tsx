import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type IconProps = {
  children: ReactNode;
  customStyles?: React.CSSProperties;
};

export default function Icon({ customStyles, children }: IconProps) {
  return <Wrapper style={customStyles}>{children}</Wrapper>;
}
