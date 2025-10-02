import { ContactController } from "./controllers/contactController";
import { ContactList } from "./models/contactList";
import { ContactView } from "./views/contactView";

const model = new ContactList();
const view = new ContactView();
const controller = new ContactController(model, view);


console.log("Gestión de Contactos\n");

//Lista inicial de contactos
console.log("Contactos:");
controller.showContacts();
console.log("");

//Agregar contactos
console.log("Agregar contactos:");
controller.add("Maria Ordoñez", "maria.ordonez@gmail.com", "98765431");
controller.add("Alejandra Funez", "alejandra.funez@gmail.com", "98976543");
console.log("");

// Lista actualizada
console.log("Lista de contactos actualizada:");
controller.showContacts();
console.log("");

// Eliminar contactos
console.log("Eliminar contacto:");
controller.remove("2");
console.log("");

// Intentar eliminar un contacto con un ID que no exista
console.log("Eliminar contacto:");
controller.remove("5");
console.log("");

// Lista final de contactos
console.log("Lista de contactos:");
controller.showContacts();

