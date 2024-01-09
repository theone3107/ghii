function addTwoNumbers(Numbers1, Numbers2){
    console.log(Numbers1 + Numbers2)
}
addTwoNumbers(6,9)
function loginUsermessage(username) {
    if (!username) {
        console.log("Please Enter a username");
        return
    }
        return `${username} just logged in`  
    }
    console.log(loginUsermessage());
