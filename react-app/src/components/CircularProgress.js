import React from 'react';
import * as PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/circular-progress.css';

const styles = () => ({
  color: '#6772e5',
});

const CustomCircularProgress = ({ className, ...props }) => {
  return <CircularProgress className={cx(css(styles()), className)} {...props} />;
};

CustomCircularProgress.defaultProps = {
  className: undefined,
};

CustomCircularProgress.propTypes = {
  className: PropTypes.string,
};

export default CustomCircularProgress;
