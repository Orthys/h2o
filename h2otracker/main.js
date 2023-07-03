let goal = 0;
let consumedWater = 0;

const goalInput = document.getElementById('goalInput');
const addWaterButton = document.getElementById('addWaterButton');
const congratulatoryMessage = document.getElementById('congratulatoryMessage');
const waterTracker = document.getElementById('waterTracker');

function setGoal() {
  goal = goalInput.value;
  goalInput.value = '';
}

function addWater() {
  consumedWater += 1;
  waterTracker.innerText = consumedWater;
  checkGoal();
}

function checkGoal() {
  if (consumedWater >= goal) {
    congratulatoryMessage.style.display = 'block';
  }
}

function sendReminder() {
  if (Notification.permission === 'granted') {
    new Notification('Reminder', {
      body: 'Time to drink water!',
    });
  }
}

addWaterButton.addEventListener('click', addWater);

setInterval(sendReminder, 3600000);

if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}