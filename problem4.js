/*
*Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

const onlineStatus = (users) => {
    if (users.length > 2){
        return `${users.slice(0, 2).join(', ')} y ${users.length-2} más en línea.`
    }else if (users.length==2){
        return `${users[0]} y ${users[1]} están en línea.`
    }else if (users.length==1){
        return `${users[0]} está en línea.`
    }else{
        return 'Nadie está en línea.'
    }
}
//Caso 1
onlineUsers = ['DefVad', 'Nesel', 'StitchSW', 'Tanjiro', 'davidelchidoxdd'];
console.log(onlineStatus(onlineUsers));

//Caso 2
onlineUsers = ['DefVad', 'Nesel'];
console.log(onlineStatus(onlineUsers));

//Caso 3
onlineUsers = ['DefVad'];
console.log(onlineStatus(onlineUsers));

//Caso 4
onlineUsers = [];
console.log(onlineStatus(onlineUsers));

//*Ejemplo del ejercicio
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
