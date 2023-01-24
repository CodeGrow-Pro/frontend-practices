document.title = "DOCUMENT OBJECT MANUPULATE"
const body  = document.body
body.append("DOCUMENT OBJECT MANUPILATED")
const div = document.createElement('div');
body.append(div)
div.innerText = "Hello dom"
div.textContent = "hello world 2023"
div.innerHTML='<strong>hello wolrd 2023</strong>';
div.style.backgroundColor = 'grey';
div.removeAttribute('style')
div.classList.add('new-div')
div.classList.remove('new-div')
div.classList.toggle('new-class')
body.appendChild(div)

