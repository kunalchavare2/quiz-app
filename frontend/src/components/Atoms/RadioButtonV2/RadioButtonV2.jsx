import React from "react";
import { RadioWrapper } from "./RadioButtonV2.styled";
import { useFormContext } from "react-hook-form";
import {
  findInputError,
  isFormInvalid,
} from "../../../utils/validations/validationsMethods";

const RadioButtonV2 = ({
  label,
  validation = {},
  group = "",
  customValidate = () => {},
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldName = group
    ? group.replace(" ", "").toLowerCase()
    : label.replace(" ", "").toLowerCase();

  const inputErrors = findInputError(errors, fieldName);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <RadioWrapper>
      <label>
        <input
          type="radio"
          {...props}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
        <span>{label}</span>
      </label>
    </RadioWrapper>
  );
};

export default RadioButtonV2;
