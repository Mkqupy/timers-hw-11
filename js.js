function timer(timeInSeconds) {
    let currentTime = timeInSeconds;
  
    const displayTime = document.getElementById('timer'); 
  
    const updateTimer = setInterval(() => {
      currentTime--;
  
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
  
      displayTime.textContent = `${minutes}:${seconds}`;
  
      if (currentTime <= 1800) {
        alert('Залишилось менше половини часу!');
      }
  
      if (currentTime === 0) {
        clearInterval(updateTimer);
        alert('Час закінчився!');
      }
    }, 1000); 
  }

  timer(3600);
  