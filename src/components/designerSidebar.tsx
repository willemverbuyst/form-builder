import SidebarBtnElement from "./buttons/sidebarBtn";
import { FormElements } from "./formElememtType";

export default function DesignerSidebar() {
  return (
    <section className="card form-elements">
      <SidebarBtnElement formElement={FormElements.TextField} />
    </section>
  );
}
