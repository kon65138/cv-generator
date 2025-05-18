import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import openEye from '../assets/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import closedEye from '../assets/visibility_off_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';

function EduBlock({
  schoolName,
  subject,
  info,
  onChange,
  id,
  isOpen,
  setIsOpen,
}) {
  function handleClick(e) {
    if (e.target !== document.querySelectorAll('.EduBlock')[id]) {
      return;
    }
    const nextEduArr = info.education.map((block) => {
      if (block.listId === id) {
        return { ...block, editing: true };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, education: nextEduArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: true,
      overview: false,
    });
  }

  function handleVisClick(e) {
    e.preventDefault();
    const nextExp = info.education.map((block) => {
      if (block.listId === id) {
        if (block.visible === true) {
          return { ...block, visible: false };
        } else if (block.visible === false) {
          return { ...block, visible: true };
        }
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, education: nextExp };
    onChange(nextInfo);
  }
  return (
    <div className="EduBlock" onClick={handleClick}>
      <div className="name">
        <div className="schoolName">{schoolName}</div>
        <div className="subject">{subject}</div>
      </div>
      <button className="visBtn" onClick={handleVisClick}>
        {info.education[id].visible === true ? (
          <img src={openEye} alt="open eye" />
        ) : (
          <img src={closedEye} alt="closed eye" />
        )}
      </button>
    </div>
  );
}

function EduForm({ info, onChange, blockId, isOpen, setIsOpen }) {
  function update(e) {
    const nextEduArr = info.education.map((block) => {
      if (block.listId === blockId) {
        return { ...block, [e.target.id]: e.target.value };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, education: nextEduArr };
    onChange(nextInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextEduArr = info.education.map((block) => {
      if (block.listId === blockId) {
        return { ...block, editing: false };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, education: nextEduArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: false,
      overview: true,
    });
  }
  return (
    <form
      action="/"
      className="EduForm"
      style={isOpen.form === true ? { display: 'flex' } : { display: 'none' }}
    >
      <p>
        <label htmlFor="schoolName">
          <span>School name:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          onChange={update}
          value={info.education[blockId].schoolName}
          type="text"
          id="schoolName"
          name="school_name"
          maxLength={50}
          required
        />
      </p>
      <p>
        <label htmlFor="studySubject">
          <span>Degree/Subject of study:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          onChange={update}
          value={info.education[blockId].subject}
          type="text"
          id="subject"
          name="study_subject"
          maxLength={50}
          required
        />
      </p>
      <p>
        <span className="doubleLabel">
          <label htmlFor="eduStartDate">
            <span>Start date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <label htmlFor="eduEndDate">
            <span>End date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
        </span>
        <span className="doubleInput">
          <input
            type="date"
            id="eduStartDate"
            name="start_date"
            onChange={update}
            value={info.education[blockId].eduStartDate}
            required
          />
          <input
            type="date"
            id="eduEndDate"
            name="end_date"
            onChange={update}
            value={info.education[blockId].eduEndDate}
            required
          />
        </span>
      </p>
      <p>
        <label htmlFor="aboutStudy">
          <span>About study:</span>
        </label>
        <input
          type="text"
          id="aboutStudy"
          name="about_study"
          onChange={update}
          value={info.education[blockId].aboutStudy}
        />
      </p>
      <p>
        <label htmlFor="studyLocation">
          <span>Location:</span>
        </label>
        <input
          type="text"
          id="studyLocation"
          name="study_location"
          onChange={update}
          value={info.education[blockId].studyLocation}
        />
      </p>
      <div className="deleteSubmitBtnContainer">
        <button
          className="deleteBtn"
          onClick={(e) => {
            e.preventDefault();
            const nextEduArr = info.education
              .toSpliced(blockId, 1)
              .map((block) => {
                if (block.listId > blockId) {
                  return { ...block, listId: block.listId - 1 };
                } else {
                  return block;
                }
              });
            const nextInfo = { ...info, education: nextEduArr };
            onChange(nextInfo);
            setIsOpen({
              dropdown: isOpen.dropdown,
              form: false,
              overview: true,
            });
          }}
        >
          Delete
        </button>
        <button className="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export function Education({ info, onChange }) {
  const [isOpen, setIsOpen] = useState({
    dropdown: false,
    form: false,
    overview: true,
  });
  function newForm(e) {
    e.preventDefault();
    const nextEduArr = [
      ...info.education,
      {
        schoolName: '',
        subject: '',
        eduStartDate: '',
        eduEndDate: '',
        aboutStudy: '',
        studyLocation: '',
        listId: info.education.length,
        visible: true,
        editing: true,
      },
    ];
    const nextInfo = { ...info, education: nextEduArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: true,
      overview: false,
    });
  }
  return (
    <div className="Education">
      <button
        className="EduBtn"
        onClick={(e) => {
          e.preventDefault();
          if (isOpen.dropdown === true) {
            setIsOpen({ ...isOpen, dropdown: false });
          } else {
            setIsOpen({ ...isOpen, dropdown: true });
          }
        }}
      >
        <h3 className="eduTitle">Education</h3>
        <img src={dropDownSvg} alt="arrow" />
      </button>
      <div
        className="EduDropdown"
        style={
          isOpen.dropdown === true ? { display: 'flex' } : { display: 'none' }
        }
      >
        {(() => {
          if (isOpen.form === true) {
            return (
              <EduForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                info={info}
                onChange={onChange}
                blockId={(() => {
                  function alg(block) {
                    return block.editing;
                  }
                  const block = info.education.find(alg);
                  return block.listId;
                })()}
              />
            );
          } else {
            return;
          }
        })()}
        <div
          className="eduOverview"
          style={
            isOpen.overview === true ? { display: 'flex' } : { display: 'none' }
          }
        >
          <div className="currentEduContainer">
            {info.education.map((block) => {
              return (
                <EduBlock
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  info={info}
                  onChange={onChange}
                  key={block.listId}
                  id={block.listId}
                  schoolName={block.schoolName}
                  subject={block.subject}
                />
              );
            })}
          </div>
          <div className="newFormBtnContainer">
            <button className="newFormBtn" onClick={newForm}>
              + education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
