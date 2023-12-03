import { IoSaveOutline } from "react-icons/io5";
import Button from "../wrappers/button";
import Icon from "../wrappers/icon";

export default function SaveBtn() {
  return (
    <Button
      customStyles={{
        width: "4rem",
        backgroundColor: "var(--color-gold)",
        color: "var(--color-black)",
      }}
    >
      <Icon>
        <IoSaveOutline />
      </Icon>
    </Button>
  );
}
