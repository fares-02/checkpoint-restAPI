import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Redux/action types/action";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  const contact = useSelector((state) => state.contactReducer.contact);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "2%",
      }}
    >
      {contact.map((el) => (
        <ContactCard el={el} />
      ))}
    </div>
  );
};

export default ContactList;
