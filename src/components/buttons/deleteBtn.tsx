import { BiSolidTrash } from "react-icons/bi";
import Button from "../wrappers/button";
import Icon from "../wrappers/icon";

type DeleteBtnProps = {
  handleClick: () => void;
};

export default function DeleteBtn({ handleClick }: DeleteBtnProps) {
  return (
    <Button
      customStyles={{
        backgroundColor: "red",
        color: "white",
        width: "4rem",
      }}
      handleClick={handleClick}
    >
      <Icon>
        <BiSolidTrash />
      </Icon>
    </Button>
  );
}
