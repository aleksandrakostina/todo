import React from 'react';
import AddForm from './AddForm';
import { addItem } from './../../redux/actionCreators';
import { connect } from 'react-redux';

const AddFormContainer = (props) => {
  
  const handleAddItem = (values) => {
    if(Object.keys(values).length && values.item.trim()) {
      const title = values.item;
      props.addItem(title.trim());
    } else {
      alert('Введите задачу');
    }
  }

  return (
    <AddForm onSubmit={handleAddItem} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title) => {
      dispatch(addItem(title));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddFormContainer);