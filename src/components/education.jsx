import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
export function Education(){
    return(
        <div className="Education">
            <button className="EduBtn">
            <h3 className="eduTitle">Education</h3>
            <img src={dropDownSvg} alt="" />
        </button>
        </div>
    )
}