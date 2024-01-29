// let q1 = 'which of these activities would you associate with "swimming","jumping","running","push-ups"?';
// let option1 = document.getElementById("option1");
// let option2 = document.getElementById("option2");
// let option3 = document.getElementById("option3");
// let option4 = document.getElementById("option4");
// let answer1 = option2;

// document.getElementById("option2").onclick = function(){
//     if (option2.selected){
//         console.log('right');
//     }
// }

// Get all the options
// const options = document.querySelectorAll('.option');
// const audioCorrect = document.getElementById('audioCorrect');
// const audioIncorrect = document.getElementById('audioIncorrect');
// const audio = document.getElementById('qa1');


// // Play audio when page loads
// window.onload = function () {
//     audio.play();
//     audio.onended = function () {
//         // Enable options after audio ends
//         options.forEach(function (opt) {
//             opt.disabled = false;
//         });
//     };
// };


// // Add click event listener to each option
// options.forEach(option => {
//     option.addEventListener('click', () => {
//         // Remove selected class from all options
//         options.forEach(opt => opt.classList.remove('selected'));

//         // Add selected class to the clicked option
//         option.classList.add('selected');

//         // Get the selected answer
//         const selectedAnswer = option.getAttribute('data-answer');

//         // Check if the selected answer is correct
//         // For demonstration, let's assume the correct answer is 'A'
//         if (selectedAnswer === 'A') {
//             audioCorrect.play();
//             // alert('correct!');

//         } else {
//             audioIncorrect.play();
//             // alert('Incorrect!');
//         }
//         // Disable other options
//         options.forEach(function (opt) {
//             if (opt !== option) {
//                 opt.disabled = true;
//             }
//         });
//     });
// });

// Get all the options
const options = document.querySelectorAll('.option');
const audioCorrect = document.getElementById('audioCorrect');
const audioIncorrect = document.getElementById('audioIncorrect');
const audio = document.getElementById('qa2');

// Flag to track if the audio is playing
let audioPlaying = false;

// Play audio when page loads
window.onload = function () {
    audio.play();
    audio.onended = function () {
        audioPlaying = false;
        // Enable options after audio ends
        options.forEach(function (opt) {
            opt.disabled = false;
        });
    };
};
function redirectToNextPage() {
    setTimeout(function () {
        window.location.href = "3.html"; // Replace "next_page.html" with the URL of your next page
    }, 4000); // 4 seconds delay
}

// Add click event listener to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        // Check if the audio is still playing
        if (audioPlaying) {
            return; // Do nothing if audio is playing
        }

        // Remove selected class from all options
        options.forEach(opt => opt.classList.remove('selected'));

        // Add selected class to the clicked option
        option.classList.add('selected');

        // Get the selected answer
        const selectedAnswer = option.getAttribute('data-answer');

        // Check if the selected answer is correct
        if (selectedAnswer === 'B') {
            audioCorrect.play();
            option.classList.add('correct');
            redirectToNextPage();
            
        } else {
            audioIncorrect.play();
            option.classList.add('incorrect');
        }

        // Disable other options
        options.forEach(function (opt) {
            if (opt !== option) {
                opt.disabled = true;
            }
        });
    });
});

// Event listener for audio play
audio.addEventListener('play', function () {
    audioPlaying = true;
});

// Event listener for audio pause
audio.addEventListener('pause', function () {
    audioPlaying = false;
});


