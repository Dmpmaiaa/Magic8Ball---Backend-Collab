document.querySelector('#clickMe').addEventListener('click', shake)



function shake() {
  const ball = document.getElementById('ball')
  // let messageText = document.getElementById('message')

  ball.classList.add('shake')
  setTimeout( () => { 
    ball.classList.remove('shake');
  }, 2000);

  makeReq()
}


async function makeReq(){

  const userQuestion = document.querySelector("#question").value;
  const res = await fetch(`/api?question=${userQuestion}`)
  const data = await res.json()
  

  console.log(data.question);
  setTimeout(() => {
    document.querySelector("#answer").textContent = data.answer
  }, 1000);

  
}

