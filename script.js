const jokeContainer = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const url = 'https://v2.jokeapi.dev/joke/Programming?type=single';


let getJoke = () => {
    jokeContainer.innerHTML = "Loading...";
    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log(item.joke)  
        jokeContainer.innerHTML = item.joke;
    });
}
getJoke();
jokeBtn.addEventListener('click', getJoke);

// const copyJoke = () => {
//     const jokeText = jokeContainer.innerText;
//     navigator.clipboard.writeText(jokeText)
//         .then(() => {
//             console.log('Joke copied to clipboard!');
//         })
//         .catch((error) => {
//             console.error('Failed to copy joke:', error);
//         });
// };

// const copyBtn = document.getElementById('copyBtn');
// copyBtn.addEventListener('click', copyJoke);