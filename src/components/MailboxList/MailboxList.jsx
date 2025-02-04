import { Link } from "react-router"

const MailboxList = props => {
    return (
        <>
        <h1>Mailbox List</h1>
        <ul>
            {props.mailboxes.map(mail => (
                <li key={mail._id}>
                    <Link to={`/mailbox/${mail._id}`}>
                    <p className="mail-box">{mail.name}</p> 
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList