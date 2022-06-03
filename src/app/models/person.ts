export interface Person {
  id: number;
  typeDocumentId: number;
  document: string;
  fullName: string;
}

export const personInit = {
  id: 0,
  typeDocumentId: 0,
  document: '',
  fullName: '',
};
