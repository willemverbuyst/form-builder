import { MdTextFields } from "react-icons/md";
import DesignerComponent from "../designerComponents/textField";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../formElememtType";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text Field",
  helperText: "This is a text input",
  required: false,
  placeholder: "Some value",
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};
