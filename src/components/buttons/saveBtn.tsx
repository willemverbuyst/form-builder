import { IoSaveOutline } from "react-icons/io5";
import Button from "../wrappers/button";
import Icon from "../wrappers/icon";

export default function SaveBtn() {
  return (
    <Button customStyles={{ width: "4rem" }}>
      <Icon>
        <IoSaveOutline />
      </Icon>
    </Button>
  );
}
