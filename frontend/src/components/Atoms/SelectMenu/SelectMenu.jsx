import SelectMenuStyle, { SelectMenuWrapper } from "./SelectMenu.styled";
import {
  findInputError,
  isFormInvalid,
} from "../../../utils/validations/validationsMethods";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import InputError from "../InputError/InputError";

const SelectMenu = ({
  label,
  list,
  onChange,
  defaultValue,
  validation,
  isObj = true,
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
    <SelectMenuWrapper>
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
      <SelectMenuStyle
        name={fieldName}
        id={fieldName}
        onChange={onChange ?? (() => {})}
        defaultValue={defaultValue}
        {...register(fieldName, validation)}
      >
        {list.map((sort, i) => {
          if (isObj) {
            return <option value={list[i].name}>{list[i].name}</option>;
          } else {
            return <option value={sort}>{sort}</option>;
          }
        })}
      </SelectMenuStyle>
    </SelectMenuWrapper>
  );
};

export default SelectMenu;
