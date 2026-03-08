// Event bubbling is a type of event propagation
// Propagation is a way of describing how the event is handled in the DOM tree,
//  when and which direction the event travels or executed.

document.querySelector("#grantparent").addEventListener('click', ()=>{
    console.log('grantparent clicked');
}, {capture: true})  // when you give capture as true, so it will work as a capturing phase.

document.querySelector("#parent").addEventListener('click', ()=>{
    console.log('parent clicked');
}, {capture: true})

document.querySelector("#child").addEventListener('click', ()=>{
    console.log('child clicked');
}, {capture: true})


// output
/**
 * when we click on child div, the output will be
 * grantparent clicked
 * parent clicked
 * child clicked
 *
 * when we click on parent div, the output will be
 * grantparent clicked
 * parent clicked
 *
 * when we click on grantparent div, the output will be
 * grantparent clicked
 *
 * so here the event is propagating from top to bottom, so it is called capturing phase.
 * if we remove the capture:true, then the event will propagate from bottom to top, so it is called bubbling phase.
 */