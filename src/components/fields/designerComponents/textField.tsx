import { FormElementInstance } from "../../formElememtType";

export default function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { label } = elementInstance.extraAttributes;

  if (typeof label === "string") {
    return <div>{label}</div>;
  }

  return null;
}
