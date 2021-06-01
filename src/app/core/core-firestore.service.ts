import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { FireDocument, WhereFilterOp } from '../types';

@Injectable()
export class CoreFirestoreService {
  constructor(private firestore: AngularFirestore) {}

  public getDocuments(collectionName: string): Observable<FireDocument[]> {
    return this.firestore
      .collection<FireDocument>(collectionName)
      .valueChanges({ idField: 'id' });
  }

  public getDocumentsWhere(
    collectionName: string,
    condField: string,
    condOp: WhereFilterOp,
    condVal: string | number
  ): Observable<FireDocument[]> {
    return this.firestore
      .collection<FireDocument>(collectionName, (ref) =>
        ref.where(condField, condOp, condVal)
      )
      .valueChanges({ idField: 'id' });
  }

  public addDocument(
    collectionName: string,
    document: FireDocument
  ): Observable<DocumentReference> {
    const documentsCollection =
      this.firestore.collection<FireDocument>(collectionName);
    return from(documentsCollection.add(document));
  }

  public updateDocument(
    collectionName: string,
    id: string,
    document: FireDocument
  ): Observable<void> {
    const docNoId = { ...document };
    delete docNoId?.id;

    return from(
      this.firestore.doc<FireDocument>(`${collectionName}/${id}`).update({
        ...docNoId,
      })
    );
  }
}
