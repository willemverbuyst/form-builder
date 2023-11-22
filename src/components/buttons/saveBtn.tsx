import { IoSaveOutline } from "react-icons/io5";
import styled from "styled-components";

const Button = styled.button`
  width: 4rem;
`;

export default function SaveBtn() {
  return (
    <Button>
      <IoSaveOutline className="btn-icon" />
    </Button>
  );
}
