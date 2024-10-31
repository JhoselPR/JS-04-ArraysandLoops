/*
*Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

const secretName = (secretSociety) => {
    let name = '';
    secretSociety.sort();
    for (let i=0; i<secretSociety.length; i++){
        name += secretSociety[i][0];
    }
    return name;
}
secretSociety = ['Thomas', 'Arthur', 'John', 'Polly'];
secret = secretName(secretSociety);
console.log(`La sociedad secreta con los miembros ${secretSociety.join(', ')} tiene el nombre secreto: ${secret}`);

//*Ejemplos del ejercicio
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));