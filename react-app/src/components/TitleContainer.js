import React from 'react';
import * as PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const typeStyles = () => ({
  h1: {
    title: {
      fontSize: '4rem',
      lineHeight: '4rem',
    },
    icon: {
      width: 84,
      height: 84,
      fontSize: '4rem',
    },
    marginBottom: 32,
  },
  h2: {
    title: {
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    icon: {
      width: 64,
      height: 64,
      fontSize: '3rem',
    },
    marginBottom: 32,
  },
  h3: {
    title: {
      fontSize: '2.5rem',
      lineHeight: '2.5rem',
    },
    icon: {
      width: 56,
      height: 56,
      fontSize: '2.5rem',
    },
    marginBottom: 24,
  },
  h4: {
    title: {
      fontSize: '2rem',
      lineHeight: '2rem',
    },
    icon: {
      width: 48,
      height: 48,
      fontSize: '2rem',
    },
    marginBottom: 24,
  },
  h5: {
    title: {
      fontSize: '1.8rem',
      lineHeight: '1.8rem',
    },
    icon: {
      width: 48,
      height: 48,
      fontSize: '1.8rem',
    },
    marginBottom: 16,
  },
  h6: {
    title: {
      fontSize: '1.4rem',
      lineHeight: '1.77rem',
    },
    icon: {
      width: 48,
      height: 48,
      fontSize: '1.4rem',
    },
    marginBottom: 8,
  },
});

const styles = (type) => {
  const specificStyle = typeStyles()[type];
  return {
    color: '#212121',
    display: 'flex',
    marginBottom: specificStyle.marginBottom,
    '> .icon-container': {
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      '> button': {
        ...specificStyle.icon,
      },
    },
    '> .title': {
      display: 'flex',
      alignItems: 'center',
    },
    [`> .title, > .title > ${type}`]: {
      width: '100%',
      ...specificStyle.title,
    },
  };
};

const TitleContainer = ({ type, className, children, ...props }) => {
  return (
    <div className={cx(css(styles(type)), className)} {...props}>
      {children}
    </div>
  );
};

TitleContainer.defaultProps = {
  className: undefined,
};

TitleContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

export default TitleContainer;
