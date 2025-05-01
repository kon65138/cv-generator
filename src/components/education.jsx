import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

function EduForm(){
    return (
        <form action="/" className="EduForm">
            <p>
                <label htmlFor="schoolName">
                    <span>School name:</span>
                    <strong><span aria-label='required'>*</span></strong>
                </label>
                <input type="text" id='schoolName' name='school_name' maxLength={50} required/>
            </p>
            <p>
                <label htmlFor="studySubject">
                    <span>Degree/Subject of study:</span>
                    <strong><span aria-label='required'>*</span></strong>
                </label>
                <input type="text" id='studySubject' name='study_subject' maxLength={50} required/>
            </p>
            <p>
                <span className='doubleLabel'>
                <label htmlFor="EduStartDate">
                    <span>Start date:</span>
                    <strong><span aria-label='required'>*</span></strong>
                </label>
                <label htmlFor="EduEndDate">
                    <span>End date:</span>
                    <strong><span aria-label='required'>*</span></strong>
                </label>
                </span>
                <span className='doubleInput'>
                <input type="date" id='EduStartDate' name='start_date' required/>
                <input type="date" id='EduEndDate' name='end_date' required/>
                </span>
            </p>
            <p>
                <label htmlFor="aboutStudy">
                    <span>About study:</span>
                </label>
                <input type="text" id='aboutStudy' name='about_study'/>
            </p>
            <p>
                <label htmlFor="studyLocation">
                    <span>Location:</span>
                </label>
                <input type="text" id='studyLocation' name='study_location'/>
            </p>
            <div className='cancelSubmitBtnContainer'>
                <button className='cancelBtn' onClick={(e) => {
                    e.preventDefault()
                    const form = document.querySelector('.EduForm')
                    const overview = document.querySelector('.eduOverview')
                    form.style.display = 'none';
                    overview.style.display = 'flex';
                }}>Cancel</button>
                <button className="submitBtn">Submit</button>
            </div>
        </form>
    )
}

export function Education({info, onChange}){
    return(
        <div className="Education">
            <button className="EduBtn" onClick={(e) => {
                e.preventDefault()
                const elmt = document.querySelector('.EduDropdown')
                const elmtDisplay = window.getComputedStyle(elmt).display;
                elmtDisplay === 'none' ? elmt.style.display = 'flex' : elmt.style.display = 'none';
                }
            }>
            <h3 className="eduTitle">Education</h3>
            <img src={dropDownSvg} alt="arrow" />
        </button>
        <div className="EduDropdown">
            <EduForm />
            <div className="eduOverview">
                <div className="currentEduContainer"></div>
                <div className="newFormBtnContainer">
                    <button className="newFormBtn" onClick={(e) => {
                        e.preventDefault()
                        const overview  = document.querySelector('.eduOverview');
                        const form = document.querySelector('.EduForm')
                        overview.style.display = 'none';
                        form.style.display = 'flex';
                    }}>+ education</button>
                </div>
            </div>
        </div>
        </div>
    )
}