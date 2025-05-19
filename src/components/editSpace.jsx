import { GeneralInfo } from './generalInfo.jsx';
import { Education } from './education.jsx';
import { Experience } from './practicalExp.jsx';

export function EditSection({ info, onChange }) {
  return (
    <div className="EditSection">
      <GeneralInfo info={info} onChange={onChange} />
      <Experience info={info} onChange={onChange} />
      <Education info={info} onChange={onChange} />
    </div>
  );
}
