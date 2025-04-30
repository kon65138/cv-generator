import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

function EduForm(){
    return (
        <form action="/" className="EduForm">

        </form>
    )
}

export function Education(){
    return(
        <div className="Education">
            <button className="EduBtn" onClick={(e) => {
                e.preventDefault()
                const elm = document.querySelector('.EduDropdown')
                const edu = window.getComputedStyle(elm).display;
                edu === 'none' ? elm.style.display = 'flex' : elm.style.display = 'none';
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
                    <button className="newFormBtn">Add education</button>
                </div>
            </div>
        </div>
        </div>
    )
}