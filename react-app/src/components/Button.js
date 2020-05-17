import React from "react";
import * as PropTypes from "prop-types";
import { css, cx } from "emotion";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";

export const buttonStyle = ({ raised, unelevated, outlined }) => ({
  fontFamily: "inherit",
  borderRadius: 18,
  letterSpacing: "inherit",
  color: `#666666!important`,
  borderColor: outlined && `#666666!important`,
  "&::before, &::after": {
    backgroundColor: "#32325d"
  },
  "&:not(:disabled)": {
    backgroundColor:
      raised || unelevated ? `#6772e5!important` : `transparent!important`,
    color: raised || unelevated ? `#ffffff!important` : `#6772e5!important`,
    borderColor: outlined && `#6772e5!important`
  }
});

const CustomButton = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Button
      className={cx(css(buttonStyle(props)), "goovee-btn", className)}
      ref={ref}
      {...props}
    />
  );
});

CustomButton.defaultProps = {
  className: undefined,
  dense: undefined,
  disabled: undefined,
  icon: undefined,
  onClick: undefined,
  outlined: undefined,
  raised: undefined,
  trailingIcon: undefined,
  unelevated: undefined
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  raised: PropTypes.bool,
  trailingIcon: PropTypes.element,
  unelevated: PropTypes.bool
};

CustomButton.displayName = "Button";

export default CustomButton;
