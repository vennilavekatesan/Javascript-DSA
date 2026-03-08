// it is one of the most common patterns in JavaScript, 
// where you attach a single event listener to a parent element that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
//  This is particularly useful for handling events on dynamically generated content.

document.querySelector("#catagory").addEventListener('click', (e)=>{
    console.log(e);
    if(e.target.nodeName==='LI'){
    window.location.href = "/" + e.target.id;
    }
})



function extractClasses(str){
    const string1= str.split('class="').map((item)=>item.split('">'))
    console.log(string1.slice(1));
    return string1.slice(1).map((item)=>item[0]);
}



extractClasses(`<div class="box blue"><p id="para" class="text blue"></p> </div>`); 

// → ['box', 'blue', 'text']

console.log(extractClasses);