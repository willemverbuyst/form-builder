import { useContext } from "react";
import { DesignerContext } from "../context/designerContext";

export default function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
}
