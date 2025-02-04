import { useState } from "react"
import { useNavigate } from 'react-router'

const initialState = {
    name: '',
    size: '',
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = (event) => {
        console.log(event.target.value)
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(handleSubmit)
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
        <h2>New MailBox</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter a Boxholder: </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="">Select a Box Size: </label>
            <select>
                <option value={formData.size}>Small</option>
                <option value={formData.size}>Medium</option>
                <option value={formData.size}>Large</option>
            </select>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default MailboxForm


