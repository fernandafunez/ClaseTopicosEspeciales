import { Contact } from './contact'; // 

export class ContactList {  // Clase para manejar los contactos
    private contacts: Contact[] = [];
    private nextId: number = 0; // Para generar ID
    getContacts(): Contact[] {
        return this.contacts;
    }

    addContact(nombre: string, email: string, telefono: string): Contact {
        this.nextId++; // Incrementar el ID para el nuevo contacto
        const newContact: Contact = {
            id: this.nextId.toString(), 
            nombre, 
            email,
            telefono,
        };
        this.contacts.push(newContact);
    
        return newContact;
    }

    deleteContact(id: string): boolean {  //Eliminar contacto por ID
        const initialLength = this.contacts.length; 
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        return this.contacts.length < initialLength; 
    }
}