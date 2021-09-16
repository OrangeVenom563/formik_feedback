import React from "react";
import "./App.css";
import { useFormik } from "formik";
import FormInputText from "./components/text-input.component";
import FormInputEmail from "./components/email-input.component";

const initialValues = {
  email: "",
  name: "",
  mentor_name: "",
  batch: "",
  session: "",
  rating: "",
  takeaway: "",
  comment: "",
  feedback: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.email) errors.email = "required";
  if (!values.name) errors.name = "required";
  if (!values.takeaway) errors.takeaway = "required";
  if (!values.comment) errors.comment = "required";
  if (!values.feedback) errors.feedback = "required";

  return errors;
};

const onSubmit = (values) => {
  console.log(values);
};

function App() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <div className="App">
      <div className="form-box">
        Zen Class feedback “Attend today, and achieve tomorrow.” ... Wishing you
        all Success! - Team GUVI lawrenceg563@gmail.com Switch accounts
        <span> * Required</span>
      </div>

      <form onSubmit={formik.handleSubmit}>
    
        <FormInputEmail name="email" lable="Email" formik={formik} />

        <FormInputText name="name" lable="Name" formik={formik} />

        <FormInputText
          name="takeaway"
          lable="What were your key take aways from this session?"
          formik={formik}
        />

        <FormInputText
          name="comment"
          lable="Any additional comments regarding the session or overall agenda?"
          formik={formik}
        />

        <FormInputText
          name="feedback"
          lable=" Any overall feedback for the session?"
          formik={formik}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;

{
  /* Mentor Name *
Chandramouli */
}
{
  /* <label htmlFor="mentor_name">Mentor Name</label>
        <input
          type="checkbox"
          name="mentor_name"
          id="montor_name"
          onChange={formik.handleChange}
          value={formik.values.montor_name}
        />{" "}
        <br /> */
}
{
  /* Batch */
}
{
  /* <fieldset>
        <legend>Batch</legend>
        <label htmlFor="batch">Batch</label>
        <input
          type="radio"
          name="batch"
          id="batch"
          onChange={formik.handleChange}
          value={formik.values.batch}
        />{" "}
        <br />
        </fieldset> */
}
{
  /* B231 WD
B232 WD
B241 WD
B242 WD
Session * */
}
{
  /* <fieldset>
        <label htmlFor="session">Session</label>
        <input
          type="checkbox"
          name="session"
          id="session"
          onChange={formik.handleChange}
          value={formik.values.session}
        />{" "}
        <br />
        </fieldset> */
}
{
  /* 07/09/2021
08/09/2021 */
}
{
  /* How satisfied were you with the session? *
Not very
1
2
3
4
5
Very much */
}
{
  /* <label htmlFor="rating"></label>
        <input
          type="radio"
          name="rating"
          id="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />{" "}
        <br /> */
}
