const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
//event bubbling
grandparent.addEventListener('click',(event)=>{
    console.log('grandparent')
})
parent.addEventListener('click',(event)=>{
          console.log('parent')
})
child.addEventListener('click',(event)=>{
     console.log('child')
})
//event bubbling
//event capturing
grandparent.addEventListener('click',(event)=>{
    console.log('grandparent')
},true)
parent.addEventListener('click',(event)=>{
          console.log('parent')
},true)
child.addEventListener('click',(event)=>{
     console.log('child')
},true)