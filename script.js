let playerName = prompt("Welcome to GC Minigolf! What's your name?");
let total = 0;

if ( playerName !== null && playerName !=="")
{
    let game = Number(prompt("Hi, "+ playerName +"! Would you like to play 3 or 6 holes today?"));

    breakme: if(game === 3 || game === 6) {
        for (i =1; i <= game; i++) {
            let putts = Number(prompt("How many putts for hole " + i + "? (Par: 3)"));
            if (isNaN(putts) || putts ===0) {
            
                break breakme;
            }
            else {
                total += putts;
            }
        }
        }
    

let par = game *3;
total -= par;

if (total < 0) {
    console.log ("Great job, " + playerName + "! Your total par was: " + total);
} else if (total > 0) {
    console.log("Nice try, " + playerName + "... Your total par was: +" + total);
} else if (total === 0) {
    console.log("Good game, " + playerName +". Your total par was: 0");
}
    }
