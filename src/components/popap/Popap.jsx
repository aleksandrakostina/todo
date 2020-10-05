import React from 'react';
import './Popap.css';
import {ReactComponent as CloseIcon} from './../../assets/images/close.svg';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import renderField from './../renderField/RenderField';
import validate from './../../utils/validate';

const Popap = (props) => {

  return (
    <div className="popap">
      <div className="popap__content">
        <form className="form__popap" onSubmit={props.handleSubmit}>
          <div className="form__title">
            <span>Краткое описание</span>
            <CloseIcon onClick={props.closeModal} className="form__close" />
          </div>
          <Field component={renderField}
                  type="text"
                  name="editform"
                  className="input" 
                  autoFocus
                  autoComplete="off" />   
          <button type="submit" className="form__button popap__button" disabled={!props.valid}>Изменить</button>           
        </form>
      </div>
    </div>   
  )
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      editform: state.modal.clickTitle
    }
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'popap',
  validate
})(Popap));