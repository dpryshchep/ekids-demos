const programmer = 'Я буду работать программистом';
const teacher = 'Может всё таки программистом?';
const driver = 'Я буду работать водителем';
const tuneiadets = 'Я буду платить налоги, много налогов';

function changeProfession() {
  const e = document.getElementById('job');
  const value = e.options[e.selectedIndex].value;

  let jobDescription = '';

  switch (value) {
    case 'programmist':
      jobDescription = programmer;
      break;
    case 'teacher':
      jobDescription = teacher;
      break;
    case 'driver':
      jobDescription = driver;
      break;
    case 'tuneiadets':
      jobDescription = tuneiadets;
      break;
    default: 
      jobDescription = '';
  }

  document.getElementById('job-description').innerHTML = jobDescription;
}