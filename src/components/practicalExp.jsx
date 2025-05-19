import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import openEye from '../assets/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import closedEye from '../assets/visibility_off_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';

function ExpBlock({
  companyName,
  positionTitle,
  info,
  onChange,
  id,
  isOpen,
  setIsOpen,
}) {
  function handleClick(e) {
    if (e.target !== document.querySelectorAll('.ExpBlock')[id]) {
      return;
    }
    const nextExpArr = info.experience.map((block) => {
      if (block.listId === id) {
        return { ...block, editing: true };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, experience: nextExpArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: true,
      overview: false,
    });
  }
  function handleVisClick(e) {
    e.preventDefault();
    const nextExpArr = info.experience.map((block) => {
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
    const nextInfo = { ...info, experience: nextExpArr };
    onChange(nextInfo);
  }
  return (
    <div className="ExpBlock" onClick={handleClick}>
      <div className="name">
        <div className="companyName">{companyName}</div>
        <div className="positionTitle">{positionTitle}</div>
      </div>
      <button className="visBtn" onClick={handleVisClick}>
        {info.experience[id].visible === true ? (
          <img src={openEye} alt="open eye" />
        ) : (
          <img src={closedEye} alt="closed eye" />
        )}
      </button>
    </div>
  );
}

function ExpForm({ info, onChange, isOpen, setIsOpen, blockId }) {
  function handleSubmit(e) {
    e.preventDefault();
    const nextExpArr = info.experience.map((block) => {
      if (block.listId === blockId) {
        return { ...block, editing: false };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, experience: nextExpArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: false,
      overview: true,
    });
  }
  function update(e) {
    const nextExpArr = info.experience.map((block) => {
      if (block.listId === blockId) {
        return { ...block, [e.target.id]: e.target.value };
      } else {
        return block;
      }
    });
    const nextInfo = { ...info, experience: nextExpArr };
    onChange(nextInfo);
  }
  return (
    <form
      action="/"
      className="ExpForm"
      style={
        isOpen.dropdown === true ? { display: 'flex' } : { display: 'none' }
      }
    >
      <p>
        <label htmlFor="companyName">
          <span>Company name:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          onChange={update}
          value={info.experience[blockId].companyName}
          type="text"
          id="companyName"
          name="company_name"
          maxLength={50}
          required
        />
      </p>
      <p>
        <label htmlFor="positionTitle">
          <span>Title of position:</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          onChange={update}
          value={info.experience[blockId].positionTitle}
          type="text"
          id="positionTitle"
          name="position_name"
          maxLength={50}
          required
        />
      </p>
      <p>
        <span className="doubleLabel">
          <label htmlFor="expStartDate">
            <span>Start date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <label htmlFor="expEndDate">
            <span>End date:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
        </span>
        <span className="doubleInput">
          <input
            onChange={update}
            value={info.experience[blockId].expStartDate}
            type="date"
            id="expStartDate"
            name="start_date"
            required
          />
          <input
            onChange={update}
            value={info.experience[blockId].expEndDate}
            type="date"
            id="expEndDate"
            name="end_date"
            required
          />
        </span>
      </p>
      <div className="jobCheckboxContainer">
        <label htmlFor="currentJob">
          <span>I'm currently employed here:</span>
        </label>
        <input
          onChange={(e) => {
            const nextExpArr = info.experience.map((block) => {
              if (block.listId === blockId) {
                return { ...block, [e.target.id]: e.target.checked };
              } else {
                return block;
              }
            });
            const nextInfo = { ...info, experience: nextExpArr };
            onChange(nextInfo);
          }}
          checked={info.experience[blockId].currentJob}
          type="checkbox"
          id="currentJob"
          name="is_current_job"
        />
      </div>
      <p>
        <label htmlFor="positionResponsibilities">
          <span>Main responsibilities:</span>
        </label>
        <input
          onChange={update}
          value={info.experience[blockId].positionResponsibilities}
          type="text"
          id="positionResponsibilities"
          name="position_responsibilities"
          maxLength={300}
        />
      </p>
      <p>
        <label htmlFor="companyLocation">
          <span>Location:</span>
        </label>
        <input
          onChange={update}
          value={info.experience[blockId].companyLocation}
          type="text"
          id="companyLocation"
          name="company_location"
        />
      </p>
      <div className="deleteSubmitBtnContainer">
        <button
          className="deleteBtn"
          onClick={(e) => {
            e.preventDefault();
            const nextExpArr = info.experience
              .toSpliced(blockId, 1)
              .map((block) => {
                if (block.listId > blockId) {
                  return { ...block, listId: block.listId - 1 };
                } else {
                  return block;
                }
              });
            const nextInfo = { ...info, experience: nextExpArr };
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

export function Experience({ info, onChange }) {
  const [isOpen, setIsOpen] = useState({
    dropdown: false,
    form: false,
    overview: true,
  });
  function newForm(e) {
    e.preventDefault();
    const nextExpArr = [
      ...info.experience,
      {
        companyName: '',
        positionTitle: '',
        expStartDate: '',
        expEndDate: '',
        currentJob: false,
        positionResponsibilities: '',
        companyLocation: '',
        listId: info.experience.length,
        visible: true,
        editing: true,
      },
    ];
    const nextInfo = { ...info, experience: nextExpArr };
    onChange(nextInfo);
    setIsOpen({
      dropdown: isOpen.dropdown,
      form: true,
      overview: false,
    });
  }
  return (
    <div className="Experience">
      <button
        className="ExpBtn"
        onClick={(e) => {
          e.preventDefault();
          if (isOpen.dropdown === true) {
            setIsOpen({ ...isOpen, dropdown: false });
          } else {
            setIsOpen({ ...isOpen, dropdown: true });
          }
        }}
      >
        <h4 className="expTitle">Experience</h4>
        <img src={dropDownSvg} alt="arrow" />
      </button>
      <div
        className="ExpDropdown"
        style={
          isOpen.dropdown === true ? { display: 'flex' } : { display: 'none' }
        }
      >
        {(() => {
          if (isOpen.form === true) {
            return (
              <ExpForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                info={info}
                onChange={onChange}
                blockId={(() => {
                  function alg(block) {
                    return block.editing;
                  }
                  const block = info.experience.find(alg);
                  return block.listId;
                })()}
              />
            );
          }
        })()}
        <div
          className="expOverview"
          style={
            isOpen.overview === true ? { display: 'flex' } : { display: 'none' }
          }
        >
          <div className="currentExpContainer">
            {info.experience.map((block) => {
              return (
                <ExpBlock
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  info={info}
                  onChange={onChange}
                  key={block.listId}
                  id={block.listId}
                  companyName={block.companyName}
                  positionTitle={block.positionTitle}
                />
              );
            })}
          </div>
          <div className="newFormBtnContainer">
            <button className="newFormBtn" onClick={newForm}>
              + experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
