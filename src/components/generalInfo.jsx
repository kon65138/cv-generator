import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';

function GIform({ info, onChange, isOpen }) {
  function update(e) {
    const nextGI = { ...info.generalInfo, [e.target.id]: e.target.value };
    const nextInfo = { ...info, generalInfo: nextGI };
    onChange(nextInfo);
  }
  return (
    <form
      action="/"
      className="GIform"
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <p>
        <label htmlFor="fullName">
          <span>Full name:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          type="text"
          id="fullName"
          name="full_name"
          maxLength={60}
          onChange={update}
          value={info.generalInfo.fullName}
          required
        />
      </p>
      <p>
        <label htmlFor="email">
          <span>Email:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          type="email"
          id="email"
          name="email_address"
          maxLength={100}
          onChange={update}
          value={info.generalInfo.email}
          required
        />
      </p>
      <p>
        <label htmlFor="homeLocation">
          <span>Location:</span>
        </label>
        <input
          type="text"
          id="homeLocation"
          name="home_location"
          maxLength={100}
          onChange={update}
          value={info.generalInfo.homeLocation}
        />
      </p>
      <p>
        <label htmlFor="phoneNum">
          <span>Phone number:</span>
        </label>
        <input
          type="tel"
          id="phoneNum"
          name="phone_number"
          maxLength={15}
          onChange={update}
          value={info.generalInfo.phoneNum}
        />
      </p>
      <p>
        <label htmlFor="generalAbout">
          <span>About:</span>
        </label>
        <input
          type="text"
          id="generalAbout"
          name="general_about"
          maxLength={300}
          onChange={update}
          value={info.generalInfo.generalAbout}
        />
      </p>
    </form>
  );
}

export function GeneralInfo({ info, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="GeneralInfo">
      <button
        className="GIbtn"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <h2 className="genInfoTitle">General Info</h2>
        <img src={dropDownSvg} alt="arrow" />
      </button>
      <GIform info={info} onChange={onChange} isOpen={isOpen} />
    </div>
  );
}
