export interface FireDocument {
  id?: string;
  docBody: string;
}

export interface FireMarkdown extends FireDocument {
  title: string;
}
