export function fetchUsuarios(pin){
    return fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}.json`)
    .then(data => data.json())
    // return fetch(`/api/damelosusers?pin=${pin}`).then(datos => datos.json())
}

export function fetchPreguntas(){


    return fetch(`/api/damelasquestions`).then(preguntitas => preguntitas.json())
}

export function updatePreguntaActual(i, pin){
    fetch (`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"value": ${i}}`
    });
}

export function addUser(pin, nom){
    fetch (`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users.json`, {
            method: 'POST',
            body: `{"name": "${nom}" }`
    });
}

export function getPreguntaActual(pin){
    return fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`)
        .then(data => data.json())
}