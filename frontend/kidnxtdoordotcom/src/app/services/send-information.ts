import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SendInformation {
  constructor(private firestore: Firestore) {}

  async sendInformation(email: string, wants: string) {
    try {
      console.log('Firestore instance:', this.firestore);
      console.log('Firestore type:', typeof this.firestore);
      console.log('Firestore constructor:', this.firestore?.constructor?.name);

      const signupCollection = collection(this.firestore, 'signups');
      const data = {
        email: email,
        wants: wants,
        timestamp: new Date(),
      };

      const docRef = await addDoc(signupCollection, data);
      console.log('Document written with ID: ', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error;
    }
  }
}
