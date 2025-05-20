import { GeneralInfo } from './generalInfo.jsx';
import { Education } from './education.jsx';
import { Experience } from './practicalExp.jsx';
import { LoadAndReset } from './loadAndReset.jsx';
import { useState } from 'react';

export function EditSection({ info, onChange }) {
  const [genIsOpen, setGenIsOpen] = useState(false);
  const [expIsOpen, setExpIsOpen] = useState({
    dropdown: false,
    form: false,
    overview: true,
  });
  const [eduIsOpen, setEduIsOpen] = useState({
    dropdown: false,
    form: false,
    overview: true,
  });
  return (
    <div className="EditSection">
      <LoadAndReset
        info={info}
        onChange={onChange}
        setGenIsOpen={setGenIsOpen}
        setExpIsOpen={setExpIsOpen}
        setEduIsOpen={setEduIsOpen}
      />
      <div className="dropdownCompolents">
        <GeneralInfo
          info={info}
          onChange={onChange}
          genIsOpen={genIsOpen}
          setGenIsOpen={setGenIsOpen}
        />
        <Experience
          info={info}
          onChange={onChange}
          expIsOpen={expIsOpen}
          setExpIsOpen={setExpIsOpen}
        />
        <Education
          info={info}
          onChange={onChange}
          eduIsOpen={eduIsOpen}
          setEduIsOpen={setEduIsOpen}
        />
      </div>
    </div>
  );
}
