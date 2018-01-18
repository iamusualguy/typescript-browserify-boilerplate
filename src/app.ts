import { NewClass } from './newCLass'
import { EOL } from 'os';


export function startClass(element: HTMLElement) {
    let renderer = new NewClass(element, "test");
    renderer.render();
}

export type Print = (s: string) => void;

export function newItem(i: Print){
    i("kek");
}