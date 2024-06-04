let nombre="Rimuro";
let anime="That time i got reincarned as slime & slime diaries"
let edad=16;
let personaje={
    nombre:"Tanjiro", //Par llave(nombre)-valor(Tanjiro) aunque también son atributos-propiedades
    anime:"Demon Slayer",//
    edad:16,
};
//Acceso a un atributo
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);
//Modifica la propiedad
personaje.edad=13;
personaje['edad']=13;
//Elimina una propiedad
delete personaje.anime;
console.log(personaje)