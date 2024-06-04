import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = memo(
  ({ className = "", brandName, months, propMinWidth, propColor }) => {
    const brandNameStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const monthsStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div className={`brand-name-parent1 ${className}`}>
        <div className="brand-name3" style={brandNameStyle}>
          {brandName}
        </div>
        <div className="frame-wrapper15">
          <div className="months-parent">
            <div className="months3" style={monthsStyle}>
              {months}
            </div>
            <img
              className="form-fieldschevron-down-icon"
              alt=""
              src="/form-fieldschevrondown.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

FrameComponent.propTypes = {
  className: PropTypes.string,
  brandName: PropTypes.string,
  months: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propColor: PropTypes.any,
};

export default FrameComponent;
