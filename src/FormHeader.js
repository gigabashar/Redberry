import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function FormHeader({ firstForm, setFirstForm }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="button-goBack"
        onClick={() => {
          if (firstForm) navigate(-1);
          setFirstForm(true);
        }}
      >
        <IoIosArrowBack
          style={{
            position: "absolute",
            fontSize: "2rem",
            left: "1.7rem",
            top: "1.7rem",
            color: "black",
          }}
        />
      </div>
      <div className="form-heading">
        <div>
          <h1>თანამშრომლის ინფო</h1>
          {firstForm && (
            <div
              style={{
                position: "relative",
                border: " 1px solid #000000",
                borderRadius: "1px",
                backgroundColor: "#000000",
                width: "70%",
                margin: "auto",
                top: "10px",
                boxSizing: "content-box",
              }}
            ></div>
          )}
        </div>
        <div>
          <h1>ლეპტოპის მახასიათებლები</h1>
          {!firstForm && (
            <div
              style={{
                position: "relative",
                border: " 1px solid #000000",
                borderRadius: "1px",
                backgroundColor: "#000000",
                width: "70%",
                margin: "auto",
                top: "10px",
                boxSizing: "content-box",
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}

export default FormHeader;
