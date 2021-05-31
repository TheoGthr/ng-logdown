import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoreFirestoreService {
  constructor(private firestore: AngularFirestore) {}

  addDocument(document: any): Observable<DocumentReference> {
    const documentsCollection = this.firestore.collection<any>('user-posts');
    return from(documentsCollection.add(document));
  }

  updateDocument(id: string, document: any): Observable<void> {
    const docNoId = { ...document };
    delete docNoId?.id;

    return from(
      this.firestore.doc<any>(`user-posts/${id}`).update({
        ...docNoId,
      })
    );
  }
}
