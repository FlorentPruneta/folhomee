import React, { forwardRef, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const styles = (hasLabel, hasError, readOnly) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '> .error': {
    position: 'absolute',
    top: hasLabel ? 50 : 32,
    fontSize: '0.820rem',
    lineHeight: '1.15rem',
    color: '#B4443C',
    padding: `0 4px`,
  },
  '> .input-container': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: readOnly
      ? 'transparent'
      : hasError
      ? '#B4443C'
      : 'rgba(60,64,67, 0.1)',
    padding: 4,
    marginTop: 10,
    borderRadius: 4,
    transition: 'all ease-in 0.2s',
    '> .label-wrapper': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '0.820rem',
      lineHeight: '1.15rem',
      transition: 'color ease-in 0.2s',
      color: '#666666',
      '> .indicator': {
        color: hasError ? '#B4443C' : 'inherit',
      },
    },
    '> .input-wrapper > input, > .input-wrapper > textarea': {
      width: '100%',
      font: 'inherit',
      fontSize: '1rem',
      lineHeight: '1.4rem',
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
      color: '#121212',
      outline: 'none',
      textOverflow: 'ellipsis',
    },
    '> .input-wrapper': {
      '.select-value, .input-like': {
        lineHeight: '1.4rem',
        minHeight: '1.4rem',
        outline: 'none',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        color: '#121212',
      },
    },
    '&:focus-within': {
      borderColor: '#6772e5',
      '> .label-wrapper': {
        color: '#6772e5',
      },
    },
  },
});

const InputContainer = forwardRef(
  ({ children, className, disabled, error, label, readOnly, required }, ref) => {
    const readonly = disabled || readOnly;
    const hasError = !!error;

    const focus = useCallback(() => {
      ref && ref.current.focus();
    }, [ref]);

    return (
      <div
        className={cx(css(styles(false, hasError, readonly)), className)}
        onClick={focus}
      >
        <div className="input-container">
          {!!label && (
            <div className="label-wrapper">
              {label}
              {required && <span className="indicator"> *</span>}
            </div>
          )}
          <div className="input-wrapper">{children}</div>
        </div>
        {hasError && <div className="error">{error}</div>}
      </div>
    );
  },
);

InputContainer.displayName = 'InputContainer';

InputContainer.defaultProps = {
  className: undefined,
  disabled: undefined,
  error: undefined,
  label: undefined,
  readOnly: undefined,
  required: undefined,
};

InputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.node,
  label: PropTypes.node,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export default InputContainer;
