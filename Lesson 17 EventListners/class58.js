// Keyboard Shortcuts

document.addEventListener("keypress",(event)=> {
    // event.keyCode & event.which ->(it is old )
    event.ctrlKey && event.code === "KeyM" 
    ?console.log("S Pressed") 
    :console.log("Nothing");
});