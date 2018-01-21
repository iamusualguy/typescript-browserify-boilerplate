import { NewClass } from './newCLass'
import { EOL } from 'os';
import $ = require("jquery");

export function startClass(element: HTMLElement) {
    $(function(){ 
        alert('Hello'); 
    });
    let renderer = new NewClass(element, "test");
    renderer.render();
}

export type Print = (s: string) => void;

export function newItem(i: Print){
    i("kek");
}