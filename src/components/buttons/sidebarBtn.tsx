import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "../formElememtType";
import Button from "../wrappers/button";
import Icon from "../wrappers/icon";
import Label from "../wrappers/label";

export default function SidebarBtnElement({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { icon: BtnElementIcon, label } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Button>
        <Icon>
          <BtnElementIcon className="btn-icon" />
        </Icon>
        <Label>{label}</Label>
      </Button>
    </div>
  );
}

export function SidebarBtnElementDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { icon: BtnElementIcon, label } = formElement.designerBtnElement;

  return (
    <Button>
      <Icon>
        <BtnElementIcon className="btn-icon" />
      </Icon>
      <p>{label}</p>
    </Button>
  );
}
