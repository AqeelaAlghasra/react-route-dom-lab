import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams()

    const selectBox = props.mailboxes.find(mailbox => (
        mailbox._id === Number(mailboxId)
    ))

    return (
        <>
        <h2>Details</h2>
        <p>Boxholder: {selectBox.name}</p>
        <p>Size: {selectBox.size}</p>
        </>
    )
}

export default MailboxDetails