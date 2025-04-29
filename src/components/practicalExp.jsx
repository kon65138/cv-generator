import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
export function Experience(){
    return(
        <div className="Experience">
            <button className="ExpBtn">
        <h4 className="expTitle">Experience</h4>
        <img src={dropDownSvg} alt="" />
        </button>
        </div>
    )
}