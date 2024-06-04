import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = memo(({ className = "" }) => {
  return (
    <header className={`rectangle-container ${className}`}>
      <div className="frame-child7" />
      <div className="frame-wrapper11">
        <div className="frame-parent23">
          <div className="frame-wrapper12">
            <div className="arrowarrow-left-wrapper">
              <img
                className="arrowarrow-left-icon"
                alt=""
                src="/arrowarrowleft.svg"
              />
            </div>
          </div>
          <div className="frame-parent24">
            <div className="instance-frame">
              <div className="warranty-parent">
                <b className="warranty">Ticket #WRVKGYIZZ</b>
                <div className="view-add-and">
                  View, add and manage all your service requests.
                </div>
              </div>
            </div>
            <div className="frame-parent25">
              <div className="frame-parent26">
                <div className="medium-wrapper">
                  <div className="medium">Medium</div>
                </div>
                <div className="warranty-claim-wrapper">
                  <div className="warranty-claim">Warranty Claim</div>
                </div>
              </div>
              <div className="assignee-parent">
                <div className="assignee">Assignee</div>
                <div className="saurabh-agrawal-container">
                  <div className="saurabh-agrawal2">{`Saurabh Agrawal `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent27">
        <div className="frame-wrapper13">
          <img
            className="frame-child8"
            loading="lazy"
            alt=""
            src="/group-238372.svg"
          />
        </div>
        <div className="frame-wrapper14">
          <div className="status-parent">
            <div className="status">Status</div>
            <div className="open-parent">
              <div className="open">Open</div>
              <img
                className="component-1-icon2"
                alt=""
                src="/component-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
