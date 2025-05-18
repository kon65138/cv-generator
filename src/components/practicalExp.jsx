import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

function ExpForm() {
  return (
    <form action="/" className="ExpForm">
      <p>
        <label htmlFor="companyName">
          <span>Company name:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input type="text" id="companyName" name="company_name" />
      </p>
      <p>
        <label htmlFor="positionTitle">
          <span>Title of position:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input type="text" id="positionTitle" name="position_name" />
      </p>
      <p>
        <span className="doubleLabel">
          <label htmlFor="ExpStartDate">
            <span>Start date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <label htmlFor="ExpEndDate">
            <span>End date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
        </span>
        <span className="doubleInput">
          <input type="date" id="ExpStartDate" name="start_date" required />
          <input type="date" id="ExpEndDate" name="end_date" required />
        </span>
      </p>
      <div className="jobCheckboxContainer">
        <label htmlFor="currentJob">
          <span>I'm currently employed here:</span>
        </label>
        <input type="checkbox" id="currentJob" name="is_current_job" />
      </div>
      <p>
        <label htmlFor="positionResponsibilities">
          <span>Main responsibilities:</span>
        </label>
        <input
          type="text"
          id="positionResponsibilities"
          name="position_responsibilities"
        />
      </p>
      <p>
        <label htmlFor="companyLocation">
          <span>Location:</span>
        </label>
        <input type="text" id="companyLocation" name="company_location" />
      </p>
      <div className="cancelSubmitBtnContainer">
        <button
          className="cancelBtn"
          onClick={(e) => {
            e.preventDefault();
            const form = document.querySelector('.ExpForm');
            const overview = document.querySelector('.expOverview');
            form.style.display = 'none';
            overview.style.display = 'flex';
          }}
        >
          Cancel
        </button>
        <button className="submitBtn">Submit</button>
      </div>
    </form>
  );
}

export function Experience({ info, onChange }) {
  return (
    <div className="Experience">
      <button
        className="ExpBtn"
        onClick={(e) => {
          e.preventDefault();
          const elmt = document.querySelector('.ExpDropdown');
          const elmtDisplay = window.getComputedStyle(elmt).display;
          elmtDisplay === 'none'
            ? (elmt.style.display = 'flex')
            : (elmt.style.display = 'none');
        }}
      >
        <h4 className="expTitle">Experience</h4>
        <img src={dropDownSvg} alt="arrow" />
      </button>
      <div className="ExpDropdown">
        <ExpForm />
        <div className="expOverview">
          <div className="currentExpContainer"></div>
          <div className="newFormBtnContainer">
            <button
              className="newFormBtn"
              onClick={(e) => {
                e.preventDefault();
                const overview = document.querySelector('.expOverview');
                const form = document.querySelector('.ExpForm');
                overview.style.display = 'none';
                form.style.display = 'flex';
              }}
            >
              + experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
