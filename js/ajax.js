'use strict';


/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data =>{
        usuarios = data;
        console.log(usuarios);
    });

//https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then(function (data) {
        return data.json();
    })

    .then(users => {//guardar datos usuario en una variable
        usuarios = users.data;
        //mostrar usuarios por pantalla
        usuarios.map(function (user, i) {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
            divUsuarios.appendChild(nombre);

            //quitar el cargo
            document.querySelector('.cargando').style.display = 'none';

        });
    })*/
var usuarios = [];//Array que va a recoger a todos los usuarios
var divUsuarios = document.querySelector('#usuarios');//Se selecciona el tramo de html donde después se van 
//a introducir los usuarios
// HAU PAUSUZ PAUSU LANDU ETA AZALADU
// SE ENCADENAN DIFERENTES FUNCIONES
realizarPeticionTodosUsuarios()

// con la función then en primer lugar se pasan los datos a json
    .then(data=>data.json())
    .then(users => {
        // Después con la función pintarUsuarios() se pintan los usuarios json
        pintarUsuarios(users.data);
    })

function realizarPeticionTodosUsuarios(){
    // realizar la peticion a la base de datos fake mediante una función fetch()
    return fetch('https://reqres.in/api/users');
    
}

function pintarUsuarios(usuarios){
    // La función map() nos permite generar una especie de bucle foreach() para poder recorrer el array de usuarios
    usuarios.map(function (user, i) {
        let nombre = document.createElement('h3'); 
        // Se crea una etiqueta h3 en la que después se van a insertar los usuarios y esta a su vez se va a insertar en el div usuarios
        nombre.innerHTML = i+1 + " - " + user.first_name + " " + user.last_name;
        divUsuarios.appendChild(nombre);

        //quitar el cargo
        //document.querySelector('.cargando').style.display = 'none';
    });
}   