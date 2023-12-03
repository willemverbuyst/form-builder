import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import styled from "styled-components";
import DeleteBtn from "./buttons/deleteBtn";
import { FormElementInstance, FormElements } from "./formElememtType";
import useDesigner from "./hooks/useDesigner";

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

const MouseIsOverText = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const MouseIsOverBtn = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

const Wrapper = styled.section`
  background-color: var(--color-grey);
  border-radius: 10px;
  position: relative;
  height: 10rem;

  &.mouse {
    border: 2px solid var(--color-teal);
  }
`;

export default function DesignerElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const { removeElement } = useDesigner();
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
      className={mouseIsOver ? "mouse" : ""}
    >
      <Top ref={topHalf.setNodeRef} />
      <Bottom ref={bottomHalf.setNodeRef} />
      {mouseIsOver && (
        <>
          <MouseIsOverText>
            <p>Click for properties or drag to move</p>
          </MouseIsOverText>
          <MouseIsOverBtn>
            <DeleteBtn handleClick={() => removeElement(element.id)} />
          </MouseIsOverBtn>
        </>
      )}
      <div>
        <DesignerElement elementInstance={element} />
      </div>
    </Wrapper>
  );
}
