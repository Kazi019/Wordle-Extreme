const one = document.querySelector('#one')
const wordNotFound = document.querySelector('.word_not_found')

const word = ['wordle', 'word', 'game', 'chiken', 'cat', 'dog', 'human']

const randomWord = word[Math.floor(Math.random() * word.length)]

one.addEventListener('keydown', e=>{
    if (e.code === 'Enter'){
        if (one.value === randomWord){
            console.log('win');
            window.location.replace('./winner.html')
        }else{
            console.log('looser');
            window.location.replace('./losser.html')
        }
    }
})