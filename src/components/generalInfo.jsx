import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
export function GeneralInfo(){
    return(
        <div className="GeneralInfo">
            <h2 className="genInfoTitle">General Info</h2>
            <img src={dropDownSvg} alt="" />
        </div>
    )
}