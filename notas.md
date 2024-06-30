Variables:
Declaración
let nombre ='Hola Mundo!';
Print 
console.log(nombre);
Nomenclatura:
No puedes empezar con número
No usar palabras reservadas
Se puede usar UpperCamelCase, camelCase, snake_Case
siendo camelCase la más usada
JS es Case sensitive

Tipos de datos 

Primitivos
-Number 
-String
-Boolean
-Undefined
-Null
(Tienen un espacio especifico en RAM)

De referencia:
-Array
-Object
-Functions
-Clases
(El espacio en RAM puede variar)

De preferencia no cambiar el valor de una variable
Se pude usar "Const" para definir constantes, esta no puede cambiar su valor

Con la sig linea, podemos ver que tipe de valor es la variable
console.log(typeof VARIABLE);
Siendo el mensaje de salida por ejemplo: string

Objeto
Se declaran las variables(propiedades) que estarán en un objeto
let VARIABLE ="";
Se van a incluir las propiedades en el objeto:
let OBJETO ={
    PROPIEDAD="",
};
Acceso a un objeto
console.log(OBJETO)
Acceso a una propiedad de un objeto:
console.log(OBJETO.PROPIEDAD)
console.log(OBJETO['PROPIEDAD']);
Modificación de propiedad de un objeto:
OBJETO['PROPIEDAD']="";
OBJETO.PROPIEDAD="";
Eliminar una propiedad de un objeto:
delete OBJETO.PROPIEDAD;

Para hacer comentarios se pueden poner 
//COMENTARIO UNILINEA
/*
    COMENTARIO MULTILINEA
*/

Atajos del teclado: 

ALT+FIN+FLECHA_BAJO Duplica la linea en la que estás
CTRL+P Abre explorador para que cambies de archivo en vs

