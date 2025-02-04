import { useState } from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import "./App.css"

const initialState = [
  {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
  }
]

const App = (props) => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (formData) => {
    const newMailbox = {
      ...formData,
      _id: mailboxes.length + 1
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
      <Route path="/new-mailboxes" element={<MailboxForm addBox={addBox} />}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
      <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
    </Routes>
    </>
  );
};

export default App;