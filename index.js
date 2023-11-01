import * as contacts from "./contacts.js";
import yargs from "yargs";

const { argv } = yargs(process.argv.slice(2));

const actionIndex = process.argv.indexOf("--action");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.log(listContacts);
    case "get":
      const getContactById = await contacts.getContactById(id);
      return console.log(getContactById);

    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction(argv);
}
