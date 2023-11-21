import { CustomInstance } from "../fields/textField";
import { FormElementInstance } from "../formElememtType";

export default function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;

  if (typeof label === "string") {
    return (
      <div className="designer-component">
        <label>
          {label}
          {required && "*"}
        </label>
        <input readOnly disabled placeholder={placeholder} />
        {helperText && <p>{helperText}</p>}
      </div>
    );
  }

  return null;
}
