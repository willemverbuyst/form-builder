import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import styled from "styled-components";
import { idGenerator } from "../lib/idGenerator";
import DesignerElementWrapper from "./designerElementWrapper";
import { ElementsType, FormElements } from "./formElememtType";
import useDesigner from "./hooks/useDesigner";
import Sidebar from "./sidebar";
import Card from "./wrappers/card";

const Section = styled.section`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  flex: 1;
  background-color: var(--color-white);
  padding: 0.5rem;
  gap: 1rem;
`;

const DropInstruction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Droppable = styled.div`
  height: 5rem;
  background-color: var(--color-grey);
  border-radius: 5px;
`;

const DesignerElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

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
    <Section>
      <Sidebar />
      <Card customStyles={{ flex: 1 }}>
        <Container ref={droppable.setNodeRef}>
          {!droppable.isOver && elements.length === 0 && (
            <DropInstruction>
              <h3>Drop here</h3>
            </DropInstruction>
          )}
          <DesignerElements>
            {droppable.isOver && <Droppable />}
            {elements.length > 0 && (
              <>
                {elements.map((element) => (
                  <DesignerElementWrapper key={element.id} element={element} />
                ))}
              </>
            )}
          </DesignerElements>
        </Container>
      </Card>
    </Section>
  );
}
