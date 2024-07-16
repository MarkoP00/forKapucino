export default function FormDataExample() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target); // pokupio je sve elemente, ali ih treba konvertovati (complex object)

    const email = formData.get("email"); //pristup jednom elementu (u zagradu ubaciti name attribut sa inputa)

    const checkBoxInputs = formData.getAll("acquisition"); //posto checkBox ubacuje u array, pokupiti ga sa getAll (u zagradu opet name atribut sa checkBoxova)

    const data = Object.fromEntries(formData.entries());

    data.acquisition = checkBoxInputs; //dodao sam checkBox array u data

    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        {/* password */}
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" minLength={6} />
        </div>
        {/* confirm */}
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
        {/* select */}
        <div className="control">
          <label htmlFor="role">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* checkBox */}
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input type="checkbox" name="acquisition" value="google" />
            <label htmlFor="google">Google</label>
          </div>
          <div className="control">
            <input type="checkbox" name="acquisition" value="friend" />
            <label htmlFor="friend">Referred by friend</label>
          </div>
          <div className="control">
            <input type="checkbox" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
        {/* single checkBox */}
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" name="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
