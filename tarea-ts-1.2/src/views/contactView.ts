import { Contact } from "../models/contact";

export class ContactView {
    displayContacts(contacts: Contact[]): void { // Mostrar la lista de contactos
        console.log("Lista de Contactos");
        if (contacts.length === 0) {
            console.log("La lista de contactos está vacía.");
        } else {
            contacts.forEach(contact => {
                console.log(`ID: ${contact.id} | Nombre: ${contact.nombre} | Email: ${contact.email} | Teléfono: ${contact.telefono}`);
            });
        }
    }

    displayMessage(message: string): void {
        console.log(message);
    }
}

