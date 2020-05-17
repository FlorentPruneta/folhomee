import React from 'react';
import * as PropTypes from 'prop-types';
import { cx } from 'emotion';
import TitleContainer from './TitleContainer';

const typeMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const Title = ({ onIconClick, type, className, children, ...props }) => {
  const Component = typeMap[type] || 'h1';
  return (
    <TitleContainer type={Component} className={cx('title-container', className)} {...props}>
      <div className="title">
        <Component>{children}</Component>
      </div>
    </TitleContainer>
  );
};

Title.defaultProps = {
  className: undefined,
  onIconClick: undefined,
  type: undefined,
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onIconClick: PropTypes.func,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default Title;
