import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import SidebarBtnElementDragOverlay from "./buttons/sidebarBtn";
import { ElementsType, FormElements } from "./formElememtType";

function DragOverlayWrapper() {
  const [draggeditem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggeditem) {
    return null;
  }

  let node = <div>no drag overlay</div>;

  const isSideBarBtnElement = draggeditem.data?.current?.isDesignerBtnElement;

  if (isSideBarBtnElement) {
    const type = draggeditem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
