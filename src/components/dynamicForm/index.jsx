import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import formInfo from "../../utils/validations";
import UIInput from "../input/index";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const firstField = watch("firstField");
  const { containerForm, stylesContainer, stylesInput, submit } = styles;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className={containerForm}
    >
      {formInfo.map((field, ind) => {
        if (field.name === "firstField") {
          return (
            <UIInput
              key={ind}
              {...field}
              divClassName={stylesContainer}
              className={stylesInput}
              register={register}
              errors={errors}
            />
          );
        }
        return null;
      })}
      {firstField &&
        firstField.length >= 5 &&
        firstField.length <= 15 &&
        formInfo.map((field, ind) => {
          if (field.name === "secondField") {
            return (
              <UIInput
                key={ind}
                {...field}
                divClassName={stylesContainer}
                className={stylesInput}
                register={register}
                errors={errors}
              />
            );
          }
          return null;
        })}

      {/* <div className={firstFieldContainer}>
        <label htmlFor="firstField">First Field </label>
        <input
          className={firstFieldInput}
          type="text"
          id="firstField"
          {...register("firstField", firstFieldInput)}
          placeholder={"more then 5 Symbols"}
        />
        {errors.firstField && <p>{errors.firstField.message}</p>}
      </div> */}

      {/* {firstField && firstField.length >= 5 && firstField.length <= 15 && (
        <div className={secondFieldContainer}>
          <label>Second Field</label>
          <input
            htmlFor="secondField"
            className={secondFieldInput}
            type="text"
            id="secondField"
            {...register("secondField", secondFieldInput)}
            placeholder={"Must not be empty"}
          />
          {errors.secondField && <p>{errors.secondField.message}</p>}
        </div>
      )} */}

      <input type="submit" className={submit} value={"Submit "} />
    </form>
  );
}

export default DynamicForm;
