import { GeneralInfo } from './generalInfo.jsx'
import { Education } from './education.jsx'
import { Experience } from './practicalExp.jsx'

export function EditSection() {
    return (
        <div className='EditSection'>
            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    )
}