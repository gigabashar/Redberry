import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./forms.css";

function Select(props) {
  const [openedTeam, setOpenedTeam] = useState(false);

  return (
    <div
      className={props.firstForm ? "first-form-select" : "second-form-select"}
    >
      <div
        className="active"
        onClick={() => {
          setOpenedTeam(!openedTeam);
        }}
      >
        {props.value}

        <span
          style={{
            transition: ".4s",
            transform: openedTeam ? "rotate(-180deg)" : "rotate(0)",
          }}
        >
          <IoIosArrowDown />
        </span>
      </div>

      <div
        className="dropdown"
        style={{
          transformOrigin: "top left",
          transform: openedTeam ? "scaleY(1)" : "scaleY(0)",
          opacity: openedTeam ? 1 : 0,
        }}
      >
        {props.list.map((element) => {
          return (
            <div
              className="option"
              onClick={() => {
                props.setValue(element);
                setOpenedTeam(!openedTeam);
              }}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
