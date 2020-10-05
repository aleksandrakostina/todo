import React from 'react';
import './AddForm.css';
import { Field, reduxForm } from 'redux-form';

const AddForm = (props) => {

  return (
    <div className="form-add">
      <div className="wrapper">
        <form className="form" onSubmit={props.handleSubmit}>
          <Field component='input' 
                  name='item' 
                  type='text' 
                  className="input form-add__input" 
                  placeholder="Добавьте задачу" 
                  autoComplete="off" />
          <button type="submit" className="form__button">Добавить</button>
        </form>
      </div>    
    </div>
  )
}

export default reduxForm({
  form: 'add',
})(AddForm);