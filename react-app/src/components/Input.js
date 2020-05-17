import React, { forwardRef, useRef } from 'react';
import * as PropTypes from 'prop-types';
import InputContainer from './InputContainer';

const Input = forwardRef(
  (
    {
      className,
      defaultValue,
      disabled,
      error,
      label,
      name,
      onChange,
      onBlur,
      readOnly,
      required,
      value,
      ...props
    },
    parentRef,
  ) => {
    const internalRef = useRef(null);

    const field = { ...props.field };
    if (Object.keys(field).length !== 0) {
      delete props.form;
      delete props.field;
    }

    let ref = parentRef;
    if (!ref) {
      ref = internalRef;
    }

    return (
      <InputContainer
        className={className}
        label={label}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        ref={ref}
      >
        <input
          name={name}
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          {...field}
          {...props}
        />
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = {
  className: undefined,
  defaultValue: undefined,
  disabled: undefined,
  error: undefined,
  field: undefined,
  form: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: undefined,
  required: undefined,
  type: 'text',
  value: undefined,
};

Input.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  /**
   * field and form props are used by Formik
   */
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
