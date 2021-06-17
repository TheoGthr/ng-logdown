/* eslint-disable @typescript-eslint/member-ordering */
import { FireDocument } from './../types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DocumentsStoreService {
  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addDocument, removeDocument, etc)
  // - Create one BehaviorSubject per store entity, for example if you have DocumentGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly documentsSource = new BehaviorSubject<FireDocument[]>([]);

  // Expose the observable$ part of the todos subject (read only stream)
  readonly documents = this.documentsSource.asObservable();

  // Get last value without subscribing to the documents$ observable (synchronously).
  getDocuments(): FireDocument[] {
    return this.documentsSource.getValue();
  }

  private setDocuments(documents: FireDocument[]): void {
    this.documentsSource.next(documents);
  }

  addDocuments(documents: FireDocument[]): void {
    const mergedDocs = [...this.getDocuments(), ...documents];
    this.setDocuments(mergedDocs);
  }

  addDocument(document: FireDocument): void {
    const documents = [...this.getDocuments(), document];
    this.setDocuments(documents);
  }

  removeDocument(document: FireDocument): void {
    const documents = this.getDocuments().filter((p) => p.id !== document.id);
    this.setDocuments(documents);
  }

  updateDocument(document: FireDocument, updatedDocument: FireDocument): void {
    const documents = this.getDocuments().map((doc) =>
      doc.id === document.id ? { ...updatedDocument, ...doc } : doc
    );
    this.setDocuments(documents);
  }
}
