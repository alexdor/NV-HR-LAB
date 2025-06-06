function uuidv4Replace(c: string): string {
  const r = (Math.random() * 16) | 0,
    v = c == "x" ? r : (r & 0x3) | 0x8;
  return v.toString(16);
}
export function uuidv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, uuidv4Replace);
}
