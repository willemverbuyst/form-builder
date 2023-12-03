import styled from "styled-components";
import { CustomInstance } from "../fields/textField";
import { FormElementInstance } from "../formElememtType";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.2rem;
`;

const HelperText = styled.p`
  font-size: 0.7rem;
  color: var(--color-grey-dark);
  font-style: italic;
  margin: 0;
`;

const TextInput = styled.input`
  width: 20rem;
`;

export default function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;

  if (typeof label === "string") {
    return (
      <Section>
        <label>
          {label}
          {required && "*"}
        </label>
        <TextInput readOnly disabled placeholder={placeholder} />
        {helperText && <HelperText>{helperText}</HelperText>}
      </Section>
    );
  }

  return null;
}
