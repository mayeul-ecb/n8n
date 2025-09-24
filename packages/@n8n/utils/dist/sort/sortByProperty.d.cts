declare const sortByProperty: <T>(property: keyof T, arr: T[], order?: "asc" | "desc") => T[];

export { sortByProperty };
