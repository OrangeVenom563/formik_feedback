import React from "react";

const FormInputText = ({name,lable,formik}) =>{
    return(
    <div className="form-box">
    <label htmlFor={name}>{lable}<span>*</span></label><br/><br/>
    <input
      type="text"
      name={name}
      id={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
    />
    </div>
    )
}

export default FormInputText;