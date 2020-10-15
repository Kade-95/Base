const {Base, ColorPicker} = require('./../../index');
let base = new Base(window);
let color = new ColorPicker();

document.addEventListener("DOMContentLoaded", event=>{
    let d = base.createElement({element: 'span', text: 'This is kennedy'});

    document.body.makeElement(d);
});