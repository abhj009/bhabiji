const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questions');
const continueButton = document.getElementById('continueButton');
const heartContainer = document.getElementById('heart');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const bgMusic = document.getElementById('bgMusic');

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  questionContainer.classList.remove('hidden');
  bgMusic.play();
});

continueButton.addEventListener('click', () => {
  questionContainer.classList.add('hidden');
  heartContainer.classList.remove('hidden');
});

yesButton.addEventListener('click', () => {
  bgMusic.pause();
  alert("My heart is racing with joy! You make me the happiest person. I love you more than words can express. Will you marry me?");
});

noButton.addEventListener('click', () => {
  bgMusic.pause();
  alert("I understand. Take your time. Remember, I'm here for you no matter what.");
});