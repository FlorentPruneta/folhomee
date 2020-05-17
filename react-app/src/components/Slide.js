import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const enterTransition = { duration: 0.35, ease: [0, 0, 0.58, 1] };
const exitTransition = { duration: 0.35, ease: [0.42, 0, 1, 1] };

export const Slide = ({ direction, ...props }) => {
  const variants = useMemo(
    () => ({
      init: {
        opacity: 0,
        x: direction === 'right' ? '100%' : '-100%',
      },
      enter: {
        opacity: 1,
        x: 0,
        transition: enterTransition,
      },
      exit: {
        opacity: 0,
        x: direction === 'right' ? '100%' : '-100%',
        transition: exitTransition,
      },
    }),
    [direction],
  );

  return <motion.div variants={variants} initial="init" animate="enter" exit="exit" {...props} />;
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
};

Slide.defaultProps = {
  className: undefined,
  direction: 'left',
};
