const button = document.getElementById('button')
const plane = document.querySelector('#button > ion-icon')
const message = document.getElementById('signup-text')



function start() {
  plane.style.transform = 'rotate(-90deg)';
  button.style.backgroundColor = '#ffc85c';
  message.innerText = 'Sending';
  
  setTimeout(() => {
   button.classList.add('send');
   send()
  }, 300)
}

function send() {
   setTimeout(() => { 
     button.classList.remove('send') 
     message.innerText = 'Sent'
     button.style.backgroundColor = '#61b15a';
     button.classList.add('sent')

     sent()
   }, 2300)
}

function sent() {
  setTimeout(() => { 
    button.classList.remove('sent')
    message.innerText = 'Send'
    plane.style.transform = 'rotate(0)';
  }, 1350)
}

button.addEventListener('click', start)