import React from "react";

const FormInputEmail = ({name,lable,formik})=>{
    return(
      <div className="form-box">
      <label htmlFor={name}>{lable}<span> *</span></label><br/><br/>
      <input
        type="email"
        name={name}
        id={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
    />  {formik.touched[name]&&formik.errors[name]? <span >{formik.errors[name]}</span>:null}
      </div>
    )
}

export default FormInputEmail