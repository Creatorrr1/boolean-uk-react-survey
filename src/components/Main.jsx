import { useState } from "react";
import "../styles/styles.css";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialState = {
    Ratings: "",
    RubberDuckTime: "",
    RubberDuckText: "",
    Name: "",
    Email: "",
  };
  const [userData, setUserData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    // console log the user data once the form is submitted
  }

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    console.log("name:", name, "type:", type, "value:", value, checked);
    // Helps you see the name and type when it's not shown
    if (name === "color" && type === "radio") {
      setUserData({ ...userData, Ratings: value });
    }
    if (name === "spend-time" && type === "checkbox") {
      setUserData({ ...userData, RubberDuckTime: value });
    }
    if (name === "review") {
      setUserData({ ...userData, RubberDuckText: value });
    }
    if (name === "username" && type === "text") {
      setUserData({ ...userData, Name: value });
    }
    if (name === "email" && type === "email") {
      setUserData({ ...userData, Email: value });
    }
    type === "submit"
      ? console.log(userData)
      : console.log("Complete the survey");
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        {/* a form should be here */}
        {/* ------------------------------------------------------------------------------- */}
        <form class="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            {/* ------------------------------------------------------------------------------- */}
            {/* <!-- This is a radio buttons group --> */}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange} // 1
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange} // 2
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange} // 3
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange} //4
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            {/* ------------------------------------------------------------------------------- */}
            {/* <!-- This is a checkboxes group --> */}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange === "swimming"} // Checkbox
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange === "bathing"} // Checkbox
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange === "chatting"} // Checkbox
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange === "noTime"} // Checkbox
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange} // PlaceHolder
              // value not shown but is present
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={userData.Name}
              onChange={handleChange} // Name
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={userData.Email}
              onChange={handleChange} // Email
            />
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
