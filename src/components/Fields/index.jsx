import React from "react";
import ReactJson from "react-json-view";

const CustomInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      {(meta.error && meta.touched) && (
          <div style={{color: 'red'}}>{meta.error}</div>
      )}
    </div>
  );
};

const CustomSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      <ReactJson src={props.meta} />
    </div>
  );
};

export { CustomInput, CustomSelect };
