import React from 'react';
import { connect } from 'react-redux';
import { closeModal, updateItem } from './../../redux/actionCreators';
import Popap from './Popap';


const PopapContainer = (props) => {

  const handleSubmit = (values) => {
    props.updateItem(props.id, values.editform);
  }

  if(!props.isOpenModal) {
    return null;
  }
  
  return (
    <Popap onSubmit={handleSubmit} 
            value={props.value}
            isOpenModal={props.isOpenModal}
            closeModal={props.closeModal}/>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpenModal: state.modal.isOpenModal,
    value: state.modal.clickTitle,
    id: state.modal.clickId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal())
    },
    updateItem: (id, title) => {
      dispatch(updateItem(id, title));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopapContainer);