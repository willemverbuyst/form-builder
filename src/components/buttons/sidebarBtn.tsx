import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "../formElememtType";

export default function SidebarBtnElement({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { icon: Icon, label } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <button
      className="btn"
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="btn-icon" />
      <p>{label}</p>
    </button>
  );
}

export function SidebarBtnElementDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { icon: Icon, label } = formElement.designerBtnElement;

  return (
    <button>
      <Icon className="btn-icon" />
      <p>{label}</p>
    </button>
  );
}