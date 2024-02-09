import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextField = ({label,...props}) => {
const [field,meta] = useField(props)
  return (
   <div className='form-group' >
     <label className='form-label' htmlFor={field.name}>{label}</label>
     <input className={`form-control ${meta.touched && meta.error && 'invalid'}`} {...field} {...meta} autoComplete='off'/>
     <ErrorMessage component="div" className='error' name={field.name}/>
   </div>
  )
}

export default TextField