import React from 'react';

const renderField = ({meta, input, ...props}) => {
  return (
    <>
      <input {...input} {...props} />
      {meta.error && <span className="form__error">{meta.error}</span>}
    </>
  )
}

export default renderField;