const Input = ({onChange ,value,name ,Label}) => {
    return (  <div className="mb-3">
    <label htmlFor={name}>{Label}:</label>
    <input
      onChange={onChange}
      value={value}
      name={name}
      id={name}
      className="form-control"
      type="text"
    />
    </div> );
}
 
export default Input;