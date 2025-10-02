import { ContactList } from "../models/contactList";
import { ContactView } from "../views/contactView";

export class ContactController { 
    private model: ContactList; 
    private view: ContactView;

    constructor(model: ContactList, view: ContactView) {
        this.model = model;
        this.view = view;
    }

    add(nombre: string, email: string, telefono: string): void { // Agregar nuevo contacto
        this.model.addContact(nombre, email, telefono);
        this.view.displayMessage("Contacto agregado");
    }

    remove(id: string): void { // Eliminar contacto por ID
        const success = this.model.deleteContact(id);
        if (success) {
            this.view.displayMessage("Contacto eliminado");
        } else {
            this.view.displayMessage(`Error: No se encontró ningún contacto con el ID '${id}'.`);
        }
        
    }

    showContacts(): void { // Mostrar todos los contactos
        const contacts = this.model.getContacts(); 
        this.view.displayContacts(contacts); 
    }
}