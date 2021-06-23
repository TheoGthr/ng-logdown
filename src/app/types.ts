export interface FireDocument {
  id?: string;
}

export interface FireMarkdown extends FireDocument {
  docBody: string;
  title: string;
  lang: Lang;
  created: Date;
  modified: Date | null;
}

export interface FirePages extends FireMarkdown {
  order: number;
  route: string;
}

export type Lang = 'en' | 'fr';
export type WhereFilterOp =
  | '<'
  | '<='
  | '=='
  | '>'
  | '>='
  | '!='
  | 'array-contains'
  | 'array-contains-any'
  | 'in'
  | 'not-in';
