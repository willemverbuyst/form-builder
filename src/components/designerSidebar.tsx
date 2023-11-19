import { FormElements } from "./formElememtType";
import SidebarBtnElement from "./sidebarBtnElement";

export default function DesignerSidebar() {
  return (
    <section className="card form-elements">
      <SidebarBtnElement formElement={FormElements.TextField} />
    </section>
  );
}
