import { DndContext } from "@dnd-kit/core";
import Designer from "./designer";
import DragOverlayWrapper from "./dragOverlayWrapper";

export default function FormBuilder() {
  return (
    <DndContext>
      <Designer />

      <DragOverlayWrapper />
    </DndContext>
  );
}
