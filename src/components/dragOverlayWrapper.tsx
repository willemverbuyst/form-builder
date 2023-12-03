import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import styled from "styled-components";
import SidebarBtnElementDragOverlay from "./buttons/sidebarBtn";
import { ElementsType, FormElements } from "./formElememtType";
import useDesigner from "./hooks/useDesigner";

const Wrapper = styled.section`
  background-color: var(--color-grey);
  border-radius: 10px;
  opacity: 0.5;
`;

function DragOverlayWrapper() {
  const { elements } = useDesigner();
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

  const isDesignerElement = draggeditem.data?.current?.isDesignerElement;

  if (isDesignerElement) {
    const elementId = draggeditem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);

    if (!element) {
      node = <div>element not found</div>;
    } else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;
      node = (
        <Wrapper>
          <DesignerElementComponent elementInstance={element} />
        </Wrapper>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
