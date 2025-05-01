export function Preview({info}){
    return (
        <div className="Preview">
            <input type="text" value={info.generalInfo.fullName} readOnly/>
            <input type="text" value={info.generalInfo.email} readOnly/>
        </div>
    )
}