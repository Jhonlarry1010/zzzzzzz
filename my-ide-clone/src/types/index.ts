export interface File {
    name: string;
    path: string;
    content: string;
}

export interface EditorOptions {
    theme: string;
    fontSize: number;
    lineNumbers: boolean;
}