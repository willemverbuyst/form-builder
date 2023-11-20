import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { idGenerator } from "../lib/idGenerator";
import DesignerSidebar from "./designerSidebar";
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from "./formElememtType";
import useDesigner from "./hooks/useDesigner";

export default function Designer() {
  const { elements, addElement } = useDesigner();

  const droppable = useDroppable({
    id: "form-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      const isDroppingOverDesignerDropArea =
        over.data?.current?.isDesignerDropArea;

      const droppingSidebarBtnOverDesignerDropArea =
        isDesignerBtnElement && isDroppingOverDesignerDropArea;

      if (droppingSidebarBtnOverDesignerDropArea) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );

        addElement(elements.length, newElement);
        return;
      }
    },
  });

  return (
    <section className="form-section">
      <DesignerSidebar />
      <div className="card form" ref={droppable.setNodeRef}>
        {!droppable.isOver && elements.length === 0 && (
          <div className="drop-instruction">
            <h3>Drop here</h3>
          </div>
        )}
        {droppable.isOver && <div className="droppable"></div>}
        {elements.length > 0 && (
          <div>
            {elements.map((element) => (
              <DesignerElementWrapper key={element.id} element={element} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DesignerElementWrapper({ element }: { element: FormElementInstance }) {
  const DesignerElement = FormElements[element.type].designerComponent;

  return <DesignerElement elementInstance={element} />;
}
