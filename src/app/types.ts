export interface FireDocument {
  id?: string;
}

export interface FireMarkdown extends FireDocument {
  body: string;
}
