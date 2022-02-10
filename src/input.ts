class Input {
    constructor() {
        let editor = document.getElementById("main-editor");
        console.log(editor);
        if(editor !== null){
            editor.addEventListener("keydown", (_event: Event) => {
                let event = _event as KeyboardEvent;
                this.inputEventHandler(event);
            });
        }
    }

    inputEventHandler(event: KeyboardEvent):any
    {
        switch(event.key){
            case "Enter":
                const selection = window.getSelection();
                let targetNode = selection?.anchorNode as HTMLElement;
                console.log(targetNode);
                if(targetNode?.textContent?.startsWith("#")){
                    targetNode.classList.toggle("heading");
                }
                break;
            default:
               console.log(event.key);
               break;
       }
    }
}

export default Input;