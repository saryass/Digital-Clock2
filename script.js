
const clock = document.getElementById('clock');

function clockUpdate () {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,'0');
    const minute = now.getMinutes().toString().padStart(2,'0');
    const second =now.getSeconds().toString().padStart(2,'0');
    const displayTime = `${hour}:${minute}:${second}`;
    clock.textContent = displayTime;
    

}



// To make the clock update continuously, you can use the setInterval function to repeatedly call your clockUpdate function at a specified interval.

setInterval(clockUpdate, 1000);
// to Update clock every seconds by calling the clockUpdate every second(1000 milliseconds)

clockUpdate();



//why did i use padStart ()??
// The padStart() method is used to ensure that each part (hours, minutes, and seconds) of the time string has at least two characters.
// This is done for visual consistency. For example, we want "5" to become "05" and "12" to remain "12".


//why did i use toString () before the padStart()??
// The getHours(), getMinutes(), and getSeconds() methods of the Date object return numbers, not strings.
// Therefore, calling padStart() directly on these numbers will result in an error, as the padStart() method is a string method.
// To fix this, you need to convert the numbers to strings before applying padStart() that is why i used toString() before the padStart() ;)