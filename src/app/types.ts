export interface FireDocument {
  id?: string;
  docBody: string;
}

export interface FireMarkdown extends FireDocument {
  title: string;
  lang: Lang;
}

export interface FirePages extends FireMarkdown {
  order: number;
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
