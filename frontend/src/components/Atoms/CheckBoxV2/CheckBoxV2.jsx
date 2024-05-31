import React from "react";
import { useFormContext } from "react-hook-form";
import {
  findInputError,
  isFormInvalid,
} from "../../../utils/validations/validationsMethods";
import { CheckBoxWrapper } from "./CheckBoxV2.styled";

const CheckBoxV2 = ({
  label,
  validation = {},
  field = "",
  customValidate = () => {},
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldName = field
    ? field.replace(" ", "").toLowerCase()
    : label.replace(" ", "").toLowerCase();

  const inputErrors = findInputError(errors, fieldName);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <CheckBoxWrapper>
      <label>
        <input
          type="checkbox"
          {...props}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
        <span className="label-content">{label}</span>
      </label>
    </CheckBoxWrapper>
  );
};

export default CheckBoxV2;
