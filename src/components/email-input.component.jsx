import React from "react";

const FormInputEmail = ({name,lable,formik})=>{
    return(
      <div className="form-box">
      <label htmlFor={name}>{lable}<span>*</span></label><br/><br/>
      <input
        type="email"
        name={name}
        id={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      </div>
    )
}

export default FormInputEmail