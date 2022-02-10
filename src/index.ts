import Input from "./input";
import "./css/editor.css"

function hello(name: string): void {
    console.log("Hello " + name + "!");
}

let name2: string = "World";
hello(name2);

new Input();