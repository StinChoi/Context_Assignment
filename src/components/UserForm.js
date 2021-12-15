import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { AccountInfo } from "../providers/UserProvider";

const UserForm = (props) => {
  const account = useContext(AccountInfo);
  const [email, setEmail] = useState(account.email);
  const [firstName, setFirstName] = useState(account.firstName);
  const [lastName, setLastName] = useState(account.lastName);
  const [avatar, setAvatar] = useState(account.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    account.updateUser({ email, firstName, lastName, avatar })
  }

   const handleChange = (e, { value }) => setAvatar({ value });

  return (
    <>
    <h1>User Form</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Input 
      label = "Edit Email"
      type="text"
      name="email"
      value={email}
      onChange = {(e) => setEmail(e.target.value)}/>
      <Form.Input 
      label = "Edit First Name"
      type="text"
      name="firstName"
      value={firstName}
      onChange = {(e) => setFirstName(e.target.value)}/>
      <Form.Input 
      label = "Edit Last Name"
      type="text"
      name="lastName"
      value={lastName}
      onChange = {(e) => setLastName(e.target.value)}/>
        <Form.Select
          label="Avatars"
          name="avatarOptions"
          value={avatar}
          onChange={(e, { value }) => setAvatar(value)}
          options={avatarOptions}
         
        />
    <Form.Button color="red">Save</Form.Button>
      
    </Form>
    </>
  )
};
const avatarOptions = [
  { key: 'Woman',
  text: 'Woman',
  value: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/woman9-512.png',
  image: { avatar: true, src: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/woman9-512.png'}},
  { key: 'Man',
  text: 'Man',
  value: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
  image: { avatar: true, src: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png'}},
  { key: 'Punk',
  text: 'Nonbinary Punk',
  value: 'https://cdn4.iconfinder.com/data/icons/modern-material-flat-people-avatars/64/10-512.png',
  image: { avatar: true, src: 'https://cdn4.iconfinder.com/data/icons/modern-material-flat-people-avatars/64/10-512.png'}},
  { key: 'Grandma',
  text: 'Grandma',
  value: 'https://cdn4.iconfinder.com/data/icons/modern-material-flat-people-avatars/64/2-512.png',
  image: { avatar: true, src: 'https://cdn4.iconfinder.com/data/icons/modern-material-flat-people-avatars/64/2-512.png'}},
];


export default UserForm;