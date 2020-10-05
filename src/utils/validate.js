const validate = (value) => {
  const errors = {};
  if(!value.editform){
    errors.editform = 'Заголовок не может быть пустым'
  }
  return errors;
}

export default validate;