const OneCheckbox = ({ label, isSelected, value, change }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        value={value}
        onChange={change}
      />
      {label}
    </label>
  );
};

export default OneCheckbox;
