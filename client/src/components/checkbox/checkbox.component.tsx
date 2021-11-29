import React, { ChangeEvent, useState } from "react";

export const Checkbox = (
  {label, checked: checkedInitially, onChange} : {
    label: string, 
    checked?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
  }
) => {

  const [checked, setChecked] = useState(checkedInitially || false);

  /**
   * Sets the checked value and dispatches
   * the optional onChange event.
   * 
   * @param event 
   */
  const checkboxOnChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={checkboxOnChange}
      />
      {label}
    </label>
  )
}

export default Checkbox;