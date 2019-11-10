export interface OBInput {
  employmentDate: Date;
  terminationDate: Date;
  extension: number;
}

export interface OBResult {
  terminationNotice: number;
  terminationDate: Date;
}
