import React from "react";
import "./App.css";
import { useFormik } from "formik";



function App() {

  const formik = useFormik({
    initialValues: {
      email:"",
      name: "",
      mentor_name: "",
      batch: "",
      session: "",
      rating: "",
      takeaway: "",
      comment: "",
      feedback: "",
    },
    validate: values =>{
      let errors = {}
      if(!values.name) errors.name = 'required'
      if(!values.batch) errors.batch = 'required'
      if(!values.session) errors.session = 'required'
      if(!values.rating) errors.rating = 'required'
      console.log(errors)
    },
    onSubmit: values => {
      console.log(values)
    }
  });
  
  return (
    <div className="App">
      <p>
        {" "}
        Zen Class feedback “Attend today, and achieve tomorrow.” ... Wishing you
        all Success! - Team GUVI lawrenceg563@gmail.com Switch accounts
      </p>
      <form onSubmit={formik.handleSubmit}>
      <span>*Required</span>
      {/* Email  */}
      <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/> <br />
      {/* Name * */}
      <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name}/> <br />
      {/* Mentor Name *
Chandramouli */}
      <input type="checkbox" name="mentor_name" id="montor_name" onChange={formik.handleChange} value={formik.values.montor_name}/> <br />
      {/* Batch */}
      <input type="radio" name="batch" id="batch" onChange={formik.handleChange} value={formik.values.batch}/> <br />
      {/* B231 WD
B232 WD
B241 WD
B242 WD
Session * */}
      <input type="checkbox" name="session" id="session" onChange={formik.handleChange} value={formik.values.session}/> <br />
      {/* 07/09/2021
08/09/2021 */}
      {/* How satisfied were you with the session? *
Not very
1
2
3
4
5
Very much */}
      <input type="radio" name="rating" id="rating" onChange={formik.handleChange} value={formik.values.rating}/> <br />
      <p>
        What were your key take aways from this session? *
        <input type="text" name="takeaway" id="takeaway" onChange={formik.handleChange} value={formik.values.takeaway}/> <br />
        Any additional comments regarding the session or overall agenda? *
        <input type="text" name="comment" id="comment" onChange={formik.handleChange} value={formik.values.comment}/> <br />
        Any overall feedback for the session? *
        <input type="text" name="feedback" id="feedback" onChange={formik.handleChange} value={formik.values.feedback}/> <br />
      </p>
      <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
