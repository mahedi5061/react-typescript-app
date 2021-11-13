import React from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [user, setUserName] = React.useState<IContact>({} as IContact);
  const [contactList, setContactList] = React.useState<IContact[]>([]);
  const addContact = () => {
    setContactList([...contactList, user]);
    setUserName({
      name: "",
      email: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName({ ...user, [e.target.name]: e.target.value });
  };

  const handleRemove = (email: string) => {
    const newContact = contactList.filter(c=> c.email !== email);
    setContactList(newContact);
  }
  console.log(contactList);
  return (
    <div>
      <div className="form">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      <button className="btn" onClick={addContact}>
        Add
      </button>
      <p>Contact List:</p>
      {contactList.map((contact) => (
        <Contact name={contact.name} key={contact.name} email={contact.email} handleRemove={handleRemove}/>
      ))}
    </div>
  );
};

export default Contacts;
