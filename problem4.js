/*
*Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

const onlineStatus = (users) => {
    return `${users.slice(0, users.length - 1).join(', ')} and 1 more online.`
}
onlineUsers = ['DefVad', 'Nesel', 'StitchSW', 'Tanjiro', 'davidelchidoxdd'];
console.log(onlineStatus(onlineUsers));

//*Ejemplo del ejercicio
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
