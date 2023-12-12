export interface SourceStringType {
    string: string;
    active: boolean;
}

export interface DictEntryType {
    source_strings: SourceStringType[];
    to: string;
    version: number;
    active: boolean;
    locked: boolean;
    // deleted: boolean;
}

export type Dict = DictEntryType[];
