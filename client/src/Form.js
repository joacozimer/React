import { useState } from 'react';
const Form = props => {
  const [text, setText] = useState('');
  const { addTask } = props;
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviando Formulario...');
    let newTask = {
      text: text,
    };
    addTask(newTask);
    setText('');
  };
  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
      onChange={handleChange}
      type="text"
      value ={text}
      placeholder="Agrega tus Tareas" />
      <input className="btm-m" type="submit" value="Guardar"/>
    </form>
  );
};

export default Form;
