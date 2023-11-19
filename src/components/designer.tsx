import { useDroppable } from "@dnd-kit/core";
import DesignerSidebar from "./designerSidebar";

export default function Designer() {
  const droppable = useDroppable({
    id: "form-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <section className="form-section">
      <DesignerSidebar />
      <div className="card form" ref={droppable.setNodeRef}>
        {!droppable.isOver && (
          <div className="drop-instruction">
            <h3>Drop here</h3>
          </div>
        )}
        {droppable.isOver && <div className="droppable"></div>}
      </div>
      ;
    </section>
  );
}