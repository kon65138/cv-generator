import dropDownSvg from '../assets/stat_minus_1_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

function GIform(){
    return(
            <form action="/" className='GIform'>
                    <p>
                        <label htmlFor="fullname">
                            <span>Full name:</span>
                            <strong><span aria-label='required'>*</span></strong>
                        </label>
                        <input type="text" id="fullname" name='full_name' maxLength={100} required/>
                    </p>
                    <p>
                    <label htmlFor="email">
                            <span>Email:</span>
                            <strong><span aria-label='required'>*</span></strong>
                        </label>
                        <input type="email" id='email' name='email_address' maxLength={100} required/>
                    </p>
                    <p>
                    <label htmlFor="homeLocation">
                            <span>Location:</span>
                        </label>
                        <input type="text" id='homeLocation' name='home_location' maxLength={100}/>
                    </p>
                    <p>
                    <label htmlFor="phoneNum">
                            <span>Phone number:</span>
                        </label>
                        <input type="tel" id='phoneNum' name='phone_number' maxLength={15}/>
                    </p>
            </form>
    )
}


export function GeneralInfo(){
    return(
        <div className='GeneralInfo'>
            <button className="GIbtn" onClick={(e) => {
                e.preventDefault()
                const form = document.querySelector('.GIform')
                window.getComputedStyle(form).display === 'none' ? form.style.display = 'flex' : form.style.display = 'none';
            }}>
            <h2 className="genInfoTitle">General Info</h2>
            <img src={dropDownSvg} alt="arrow" />
        </button>
        <GIform />
        </div>
    )
}