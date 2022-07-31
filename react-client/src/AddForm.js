import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

function CreateForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // error Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedbacka">{error}</div>;
  };

  const { onCreate } = props;
  const clearState = () => {
    return { name: "", card_number: "", balance: 0, card_limit: "" };
  };

  //luhn 10 check
  // Returns true if given
  // card number is valid (e.g  79927398713)
  const checkLuhn10 = (cardNo) => {
    let nDigits = cardNo.length;

    let nSum = 0;
    let isSecond = false;
    for (let i = nDigits - 1; i >= 0; i--) {
      let d = cardNo[i].charCodeAt() - "0".charCodeAt();

      if (isSecond == true) d = d * 2;

      // We add two digits to handle
      // cases that make two digits
      // after doubling
      nSum += parseInt(d / 10, 10);
      nSum += d % 10;

      isSecond = !isSecond;
    }
    return nSum % 10 == 0;
  };

  //end
  const [book, setBook] = useState(clearState);

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveTodo = (e) => {
    //   e.preventDefault()
    onCreate(book);
    //    alert("submitted successfully")
    clearState();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(saveTodo)}>
        <h2>Add</h2>
        <div className="container" aria-label="add form">
          <div className="form-group col-md-4 mb-3">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              {...register("name", { required: true })}
              onChange={(e) => onChange(e)}
            />
            {errors.name &&
              errors.name.type === "required" &&
              errorMessage(required)}
          </div>

          <div className="form-group col-md-4 mb-3">
            <label htmlFor="card_number">Card number</label>
            <input
              type="number"
              className="form-control"
              name="card_number"
              {...register("card_number", {
                required: true,
                maxLength: 16,
                pattern: /^(0|[1-9][0-9]*)$/,
                validate: {
                  cardValid: (value) => checkLuhn10(value) != false,
                },
              })}
              onChange={(e) => onChange(e)}
            />
            {errors.card_number &&
              errors.card_number.type === "required" &&
              errorMessage(required)}
            {errors.card_number && errors.card_number.type === "cardValid" && (
              <p className="invalid-feedbacka">Your Card is Invalid(e.g Luhn check failed)</p>
            )}
            {errors.card_number &&
              errors.card_number.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>

          <div className="form-group col-md-4 mb-3">
            <label htmlFor="card_limit">Card Limit</label>
            <input
              type="number"
              className="form-control"
              name="card_limit"
              {...register("card_limit", {
                required: true,
                validate: {
                  positiveNumber: (value) => parseFloat(value) > 0,
                },
              })}
              onChange={(e) => onChange(e)}
            />

            {errors.card_limit &&
              errors.card_limit.type === "positiveNumber" && (
                <p className="invalid-feedbacka">Your credit limit should be positive</p>
              )}
            {errors.card_limit &&
              errors.card_limit.type === "required" &&
              errorMessage(required)}
          </div>

          <button aria-label="add card details"
            className=" btn btn-secondary col-md-1 "
            type="submit"
          >Add
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default CreateForm;
