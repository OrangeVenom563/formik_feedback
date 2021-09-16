import React from "react";

const FormInputText = ({name,lable,formik}) =>{
    console.log(formik.errors)
    return(
    <div className="form-box">
    <label htmlFor={name}>{lable}<span> *</span></label><br/><br/>
    
    <input
      type="text"
      name={name}
      id={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
    />  {formik.errors[name]? <span >{formik.errors[name]}</span>:null}
    </div>
    )
}

export default FormInputText;