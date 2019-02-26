import { Node } from './parser';
export declare const CRLF = "\n\n";
export declare const h1: (title: string) => string;
export declare const h2: (title: string) => string;
export declare const h3: (title: string) => string;
export declare const fence: (language: string) => (code: string) => string;
export declare const code: (code: string) => string;
export declare const link: (text: string, href: string) => string;
export declare const ts: (code: string) => string;
export declare const italic: (code: string) => string;
export declare const bold: (code: string) => string;
export declare const strike: (text: string) => string;
export declare function header(title: string, order: number): string;
export declare function run(node: Node): string;
