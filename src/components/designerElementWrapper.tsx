import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import styled from "styled-components";
import { FormElementInstance, FormElements } from "./formElememtType";

const Bottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0rem;
  height: 50%;
  border-radius: 0 0 5px 5px;
`;

const Top = styled.div`
  width: 100%;
  position: absolute;
  top: 0rem;
  height: 50%;
  border-radius: 5px 5px 0 0;
`;

const MouseIsOver = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const Wrapper = styled.section`
  background-color: var(--color-grey);
  border-radius: 10px;
  position: relative;
`;

export default function DesignerElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const DesignerElement = FormElements[element.type].designerComponent;

  return (
    <Wrapper
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Top ref={topHalf.setNodeRef} />
      <Bottom ref={bottomHalf.setNodeRef} />
      {mouseIsOver && (
        <>
          <MouseIsOver>
            <p>Click for properties or drag to move</p>
          </MouseIsOver>
        </>
      )}
      <div>
        <DesignerElement elementInstance={element} />
      </div>
    </Wrapper>
  );
}
