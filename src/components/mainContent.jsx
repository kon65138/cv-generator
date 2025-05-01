import { useState } from 'react'
import { EditSection } from './editSpace.jsx'
import { Preview } from './preview.jsx'
export function MainContent() {
    const [info , setInfo] = useState({
        generalInfo: {
            fullName:'',
            email:'',
            homeLocation:'',
            phoneNum:''
        },
        education: {

        },
        experience: {

        }
    })

    function handleChange(change) {
        setInfo(change)
        
    }
    return (
        <div className='MainContent'>
        <EditSection info={info} onChange={handleChange}/>
        <Preview info={info}/>
        </div>
    )
}