// Event listener for Countdown
document.addEventListener('DOMContentLoaded', () => {
    
    // variables to control timer
    const timeLeftDisplay = document.querySelector('#time-remain');
    const startBtn = document.querySelector('#start-button');
    timeLeft = 10

    // Begin countdown process
    function countDown() {
        // time loop
        setInterval(function() {

            // Initiate Countdown
            if(timeLeft <= 0){
                
                // Ends at absolute 0
                clearInterval(timeLeft = 0)
            }

            timeLeftDisplay.innnerHTML = timeLeft
            // by every 1000 milisec
            timeLeft -= 1
        }, 1000)
    }

    // Implement Start Button
    startBtn.addEventListener('click', countDown)
})