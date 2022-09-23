import React, { useState } from "react";
import FormHeader from "./FormHeader";
import "./forms.css";
import Select from "./Select";

const GeorgianAlphabet = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჟ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "ყ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

function Forms() {
  const [firstForm, setFirstForm] = useState(true);

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    laptopName: "",
    cpuCore: "",
    cpuThread: "",
    laptopRAM: "",
    date: "",
    price: "",
  };

  const [formValues, setFormValues] = React.useState(initialValues);
  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  const teamStartValue = "თიმი";
  const teams = ["დეველოპმენტი", "გაყიდვები", "HR", "დიზაინი", "მარკეტინგი"];
  const [team, setTeam] = useState(teamStartValue);

  const positionStartValue = "პოზიცია";
  const positions = ["ინტერნი", "HR ბიზნეს დეველოპერი"];
  const [position, setPosition] = useState(positionStartValue);

  const laptopBrandStartValue = "ლეპტოპის ბრენდი";
  const laptopBrands = ["ლენოვო", "ეფლი", "დელი", "სამსუნგი"];
  const [laptopBrand, setLaptopBrand] = useState(laptopBrandStartValue);

  const cpuStartValue = "CPU";
  const cpuList = ["i3", "i5", "i7", "i9"];
  const [cpu, setCpu] = useState(cpuStartValue);

  const [memoryType, setMemoryType] = useState(null);
  const [laptopCondition, setLaptopConditon] = useState(null);

  const [firstFormErrors, setFirstformErrors] = useState({});
  const [secondFormErrors, setSecondFormErrors] = useState({});

  function checkAlphabet(string) {
    let result = true;
    for (var letter = 0; letter < string.length; letter++) {
      if (!GeorgianAlphabet.includes(string.charAt(letter))) result = false;
    }
    return result;
  }

  function emailValidation(email) {
    let emailRegex = new RegExp("[a-z0-9]+@redberry.ge");
    return emailRegex.test(email);
  }

  function phoneNumberValidatoin(number) {
    let phoneNumberRegex = new RegExp(
      "^[+]?[(]?[9]{2}[5][)]?[-s.]?[5][0-9]{2}[-s.]?[0-9]{6}$"
    );

    return phoneNumberRegex.test(number);
  }

  function checkEnglish(string) {
    let englishRegex = /^[0-9A-Za-z\s\-]+$/;
    return englishRegex.test(string);
  }

  function checkNumericInput(value) {
    let numericRegex = new RegExp("[0-9]+");
    return numericRegex.test(value);
  }

  function validateFirstForm() {
    const errors = {};
    if (!formValues.name) {
      errors.name = "enter name";
    } else if (formValues.name.length < 2) {
      errors.name = "enter long name";
    } else if (!checkAlphabet(formValues.name)) {
      errors.engName = "enter georgian";
    }

    if (!formValues.surname) {
      errors.surname = "enter surname";
    } else if (formValues.surname.length < 2) {
      errors.surname = "enter long name";
    } else if (!checkAlphabet(formValues.surname)) {
      errors.engSurname = "enter georgian";
    }

    if (position === positionStartValue) {
      errors.position = "choose position";
    }

    if (team === teamStartValue) {
      errors.team = "choose team";
    }

    if (!formValues.email) {
      errors.email = "enter email";
    } else if (!emailValidation(formValues.email)) {
      errors.validEmail = "enter email with redberry domain";
    }

    if (!formValues.phoneNumber) {
      errors.phoneNumber = "enter a phone number";
    } else if (!phoneNumberValidatoin(formValues.phoneNumber)) {
      errors.phoneNumber = "there is an error";
    }

    return errors;
  }
  function validateSecondForm() {
    const errors = {};

    if (!formValues.laptopName) {
      errors.laptopName = "Please enter laptop name";
    } else if (!checkEnglish(formValues.laptopName)) {
      errors.laptopName = "enter english";
    }

    if (laptopBrand === laptopBrandStartValue) {
      errors.laptopBrand = "Please choose laptop brand";
    }

    if (cpu === cpuStartValue) {
      errors.cpu = "Please choose cpu";
    }

    if (!formValues.cpuCore) {
      errors.cpuCore = "please enter value";
    } else if (!checkNumericInput(formValues.cpuCore)) {
      errors.cpuCore = "please enter numbers";
    }

    if (!formValues.cpuThread) {
      errors.cpuThread = "please enter value";
    } else if (!checkNumericInput(formValues.cpuThread)) {
      errors.cpuThread = "please enter numbers";
    }
    if (!formValues.laptopRAM) {
      errors.laptopRAM = "please enter value";
    } else if (!checkNumericInput(formValues.laptopRAM)) {
      errors.laptopRAM = "please enter numbers";
    }
    if (!formValues.price) {
      errors.price = "please enter value";
    } else if (!checkNumericInput(formValues.price)) {
      errors.price = "please enter numbers";
    }

    if (memoryType === null) {
      errors.memoryType = "blank";
    }
    if (laptopCondition === null) {
      errors.laptopCondition = "blank";
    }
    if (!imageSource) {
      errors.uploadedImage = "blank";
    }

    return errors;
  }

  async function handleFirstFormSubmit() {
    setFirstformErrors(validateFirstForm());
    Object.keys(validateFirstForm()).length === 6 && setFirstForm(false);
  }
  function handleSecondFormSubmit() {
    setSecondFormErrors(validateSecondForm());
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const [imageSource, setImageSource] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState("");
  function loadFile(event) {
    setImageSource(URL.createObjectURL(event.target.files[0]));
    setImageName(event.target.files[0].name);
    setImageSize((event.target.files[0].size / (1024 * 1024)).toFixed(1));
  }

  return (
    <div>
      <FormHeader firstForm={firstForm} setFirstForm={(e) => setFirstForm(e)} />
      <form autoComplete="off" onSubmit={handleSubmit}>
        {firstForm && (
          <div className="first-form">
            <div
              className={`form-input-fields ${
                firstFormErrors?.name || firstFormErrors?.engName ? "error" : ""
              }`}
            >
              <label>სახელი</label>
              <input
                type="text"
                name="name"
                placeholder="გრიშა"
                onChange={handleChange}
                value={formValues.name}
                required
              />

              <span>
                {firstFormErrors.name
                  ? "გამოიყენე ქართული ასოები"
                  : "მინიმუმ 2 სიმბოლო ქართული ასოები"}
              </span>
            </div>
            <div
              className={`form-input-fields ${
                firstFormErrors?.surname || firstFormErrors?.engSurname
                  ? "error"
                  : ""
              }`}
            >
              <label>გვარი</label>
              <input
                type="text"
                name="surname"
                placeholder="ბაგრატიონი"
                onChange={handleChange}
                value={formValues.surname}
              />
              <span>
                {firstFormErrors?.surname
                  ? "გამოიყენე ქართული ასოები"
                  : "მინიმუმ 2 სიმბოლო ქართული ასოები"}
              </span>
            </div>
            <div
              className={`select grid-item-3 ${
                firstFormErrors.team && "select-error"
              }`}
            >
              <Select
                list={teams}
                value={team}
                setValue={(newValue) => setTeam(newValue)}
                firstForm={firstForm}
              />
            </div>
            <div
              className={`select grid-item-4 ${
                firstFormErrors.position && "select-error"
              }`}
            >
              <Select
                list={positions}
                value={position}
                setValue={(newValue) => setPosition(newValue)}
                firstForm={firstForm}
              />
            </div>

            <div
              className={`form-input-fields grid-item-5 ${
                firstFormErrors.email || firstFormErrors.validEmail
                  ? "error"
                  : ""
              }`}
            >
              <label>მეილი</label>
              <input
                type="mail"
                name="email"
                placeholder="grish666@redberry.ge"
                onChange={handleChange}
                value={formValues.email}
              />
              <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div
              className={`form-input-fields grid-item-6 ${
                firstFormErrors.phoneNumber && "error"
              }`}
            >
              <label>ტელეფონის ნომერი</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+995 598 00 07 01"
                onChange={handleChange}
                value={formValues.phoneNumber}
              />
              <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>
            <div
              className="next-button"
              onClick={() => {
                handleFirstFormSubmit();
              }}
            >
              <span>შემდეგი</span>
            </div>
          </div>
        )}
        {!firstForm && (
          <div className="second-form">
            <div
              className={`photo-upload ${
                secondFormErrors.uploadedImage && "not-uploaded"
              } ${imageSource && "uploaded-image"}`}
            >
              {!imageSource ? (
                <>
                  {secondFormErrors.uploadedImage && (
                    <img
                      src={process.env.PUBLIC_URL + `/images/Vector.png`}
                      alt="sheni"
                    />
                  )}
                  <div>
                    <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                  </div>

                  <label htmlFor="inputTag">ატვირთე</label>
                  <input
                    id="inputTag"
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    name="image"
                    onChange={loadFile}
                    style={{
                      display: "none",
                    }}
                  />
                </>
              ) : (
                <>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                    src={process.env.PUBLIC_URL + imageSource}
                    alt="uploaded file"
                  />
                </>
              )}
            </div>
            {imageSource && (
              <div className="uploaded-img">
                <div className="uploaded-image-info">
                  <div className="uploaded-image-info-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/akar-icons_circle-check-fill.png`
                      }
                      alt=""
                    />
                  </div>
                  <span className="uploaded-image-info-name">{imageName},</span>
                  <span className="uploaded-image-info-size">
                    {imageSize} mb
                  </span>
                </div>
                <div
                  className="reupload"
                  style={{
                    display: "block",
                  }}
                >
                  <label htmlFor="inputTag">თავიდან ატვირთე</label>
                  <input
                    id="inputTag"
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    name="image"
                    onChange={loadFile}
                    style={{
                      display: "none",
                    }}
                  />
                </div>
              </div>
            )}

            <div className="second-form-div1">
              <div
                className={`form-input-fields ${
                  secondFormErrors.laptopName && "error"
                } `}
              >
                <label>ლეპტოპის სახელი</label>
                <input
                  type="text"
                  name="laptopName"
                  placeholder="HP"
                  onChange={handleChange}
                  value={formValues.laptopName}
                />
                <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
              </div>
              <div className={secondFormErrors.laptopBrand && "select-error"}>
                <Select
                  list={laptopBrands}
                  value={laptopBrand}
                  setValue={(newValue) => setLaptopBrand(newValue)}
                />
              </div>
            </div>
            <hr style={{ color: "#C7C7C7", opacity: "0.5" }} />
            <div className="second-form-div2">
              <div className={secondFormErrors.cpu && "select-error"}>
                <Select
                  list={cpuList}
                  value={cpu}
                  setValue={(newValue) => setCpu(newValue)}
                />
              </div>
              <div
                className={`form-input-fields ${
                  secondFormErrors.cpuCore && "error"
                }`}
              >
                <label>CPU-ს ბირთვი</label>
                <input
                  type="text"
                  name="cpuCore"
                  placeholder="14"
                  onChange={handleChange}
                  value={formValues.cpuCore}
                />
                <span>მხოლოდ ციფრები </span>
              </div>
              <div
                className={`form-input-fields ${
                  secondFormErrors.cpuThread && "error"
                }`}
              >
                <label>CPU-ს ნაკადი</label>
                <input
                  type="text"
                  name="cpuThread"
                  placeholder="365"
                  onChange={handleChange}
                  value={formValues.cpuThread}
                />
                <span>მხოლოდ ციფრები </span>
              </div>
            </div>
            <div className="second-form-div3">
              <div
                className={`form-input-fields ${
                  secondFormErrors.laptopRAM && "error"
                }`}
              >
                <label>ლეპტოპის RAM (GB)</label>
                <input
                  type="text"
                  name="laptopRAM"
                  placeholder="16"
                  onChange={handleChange}
                  value={formValues.laptopRAM}
                />
                <span>მხოლოდ ციფრები </span>
              </div>
              <div className="second-form-radios">
                <div
                  className="label"
                  style={
                    secondFormErrors.memoryType && {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }
                  }
                >
                  <label
                    style={
                      secondFormErrors.memoryType && {
                        color: "red",
                      }
                    }
                  >
                    მეხსიერების ტიპი
                  </label>

                  {secondFormErrors.memoryType && (
                    <img
                      src={process.env.PUBLIC_URL + `/images/Vector.png`}
                      alt="sheni"
                    />
                  )}
                </div>
                <div className="second-form-radios-flex">
                  <div>
                    <div
                      onClick={() => setMemoryType("ssd")}
                      className="customRadio"
                    >
                      <div
                        className={memoryType === "ssd" && "radioChecked"}
                      ></div>
                    </div>
                    <label>SSD</label>
                  </div>
                  <div>
                    <div
                      onClick={() => setMemoryType("hdd")}
                      className="customRadio"
                    >
                      <div
                        className={`${memoryType === "hdd" && "radioChecked"}`}
                      ></div>
                    </div>
                    <label>HDD</label>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ color: "#C7C7C7", opacity: "0.5" }} />
            <div className="second-form-div4">
              <div className="form-input-fields">
                <label>შეძენის რიცხვი (არჩევითი)</label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={formValues.date}
                />
              </div>
              <div
                className={`form-input-fields ${
                  secondFormErrors.price && "error"
                }`}
              >
                <label>ლეპტოპის ფასი</label>
                <div>
                  <input
                    type="text"
                    name="price"
                    placeholder="0000"
                    onChange={handleChange}
                    value={formValues.price}
                  />
                  <span>₾</span>
                </div>
                <span>მხოლოდ ციფრები </span>
              </div>
            </div>
            <div className="second-form-div5">
              <div className="second-form-radios">
                <div
                  className="label"
                  style={
                    secondFormErrors.laptopCondition && {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }
                  }
                >
                  <label
                    style={
                      secondFormErrors.laptopCondition && {
                        color: "red",
                      }
                    }
                  >
                    ლეპტოპის მდგომარეობა
                  </label>

                  {secondFormErrors.laptopCondition && (
                    <img
                      src={process.env.PUBLIC_URL + `/images/Vector.png`}
                      alt="sheni"
                    />
                  )}
                </div>
                <div className="second-form-radios-flex">
                  <div>
                    <div
                      onClick={() => setLaptopConditon("new")}
                      className="customRadio"
                    >
                      <div
                        className={`${
                          laptopCondition === "new" && "radioChecked"
                        }`}
                      ></div>
                    </div>
                    <label>ახალი</label>
                  </div>
                  <div>
                    <div
                      onClick={() => setLaptopConditon("old")}
                      className="customRadio"
                    >
                      <div
                        className={`${
                          laptopCondition === "old" && "radioChecked"
                        }`}
                      ></div>
                    </div>
                    <label>ძველი</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-form-div6">
              <span
                style={{
                  fontFamily: "HelveticaNeue",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "12px",
                  letterSpacing: "0.08em",
                  color: "#62A1EB",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFirstForm(true);
                }}
              >
                უკან
              </span>
              <div>
                <button
                  onClick={() => {
                    handleSecondFormSubmit();
                  }}
                >
                  დამახსოვრება
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className="bottom-logo">
        <img
          src={process.env.PUBLIC_URL + `/images/LOGO2.png`}
          alt="bottom-logo"
        />
      </div>
    </div>
  );
}

export default Forms;
