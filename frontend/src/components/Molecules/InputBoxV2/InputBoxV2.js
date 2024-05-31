import React from "react";
import { InputBar, InputBoxV2Style, TextArea } from "./InputBoxV2.styled";
import { useFormContext } from "react-hook-form";
import {
  findInputError,
  isFormInvalid,
} from "../../../utils/validations/validationsMethods";
import { AnimatePresence } from "framer-motion";
import InputError from "../../Atoms/InputError/InputError";

const InputBoxV2 = ({
  label,
  type,
  placeholderValue,
  inputValue = null,
  onChangeHandler,
  inputKeyHandler,
  resize,
  validation,
  color,
  customValidate = () => {},
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = label.replace(" ", "").toLowerCase();

  const inputErrors = findInputError(errors, fieldName);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <InputBoxV2Style message={inputErrors.error && inputErrors.error.message}>
      <div className="label-wrapper">
        <label htmlFor={fieldName} className="label">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      {type !== "textarea" && (
        <InputBar
          className={`input-${type}-${fieldName}`}
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholderValue}
          onChange={onChangeHandler ?? (() => {})}
          onKeyUp={inputKeyHandler}
          {...props}
          color={color}
          value={inputValue}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
      )}
      {type === "textarea" && (
        <TextArea
          className={`input-${type}-${fieldName}`}
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholderValue}
          onChange={onChangeHandler ?? (() => {})}
          value={inputValue}
          onKeyUp={inputKeyHandler}
          resize={resize}
          {...props}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
      )}
    </InputBoxV2Style>
  );
};

export default InputBoxV2;
