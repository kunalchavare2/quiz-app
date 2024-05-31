import axios from "axios";
import InputBoxV2 from "../../Molecules/InputBoxV2/InputBoxV2";
import {
  AddResourceFormStyle,
  AddResourceFormWrapper,
} from "./AddResourceForm.styled";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import { FormProvider, useForm } from "react-hook-form";
import {
  category_validation,
  desc_validation,
  imgUrl_validation,
  link_validation,
  name_validation,
  tag_validation,
} from "../../../utils/validations/inputValidations";
import { toast } from "react-toastify";
import Button from "../../Atoms/Button/Button";

const AddResourceForm = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);

    axios
      .get(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("Resource added successfully!");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });

    methods.reset();
  });

  const data = [
    {
      name: "User",
      value: "select",
    },
    {
      name: "Request",
      value: "select",
    },
  ];

  return (
    <FormProvider {...methods}>
      <AddResourceFormWrapper>
        <AddResourceFormStyle
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <h1 className="form-title">Item Details</h1>
          <InputBoxV2
            label="ITEM TITLE"
            validation={name_validation.validation}
            onChangeHandler={(e) => {
              console.log(e);
            }}
          />
          <InputBoxV2
            color="#0B69FF"
            label="LINK"
            validation={link_validation.validation}
            onChangeHandler={(e) => {
              console.log(e);
            }}
          />
          <InputBoxV2
            color="#0B69FF"
            label="ICON URL"
            validation={imgUrl_validation.validation}
            onChangeHandler={(e) => {
              console.log(e);
            }}
          />
          <SelectMenu
            list={data}
            label="TAG NAME"
            validation={tag_validation.validation}
            onChange={(val) => {
              console.log(val.target.value);
            }}
          />
          <InputBoxV2
            label="CATEGORY"
            validation={category_validation.validation}
            onChangeHandler={(e) => {
              console.log(e);
            }}
          />
          <InputBoxV2
            type="textarea"
            label="DESCRIPTION"
            validation={desc_validation.validation}
            onChangeHandler={(e) => {
              console.log(e);
            }}
            maxLength="100"
            cols="6"
            rows="2"
            placeholder="Enter description"
            name="description"
            resize="none"
          />
          <Button title="CREATE" color="#0B69FF" onClick={onSubmit} />
        </AddResourceFormStyle>
      </AddResourceFormWrapper>
    </FormProvider>
  );
};

export default AddResourceForm;
