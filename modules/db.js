const dburl = "https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app";

export function fetchUsuarios(pin){
    return fetch(`${dburl}/pins/pin${pin}.json`)
    .then(data => data.json())
}

export function fetchPreguntas(){
    return fetch(`${dburl}/questions.json`)
    .then(data => data.json())
}

export function updatePreguntaActual(i, pin){
    fetch (`${dburl}/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"value": ${i}}`
    });
}

export function addUser(pin, nom){
    fetch (`${dburl}/pins/pin${pin}/users.json`, {
        method: 'POST',
        body: `{"name": "${nom}" }`
    });
}

export function getPreguntaActual(pin){
    return fetch(`${dburl}/pins/pin${pin}/pregunta.json`)
        .then(data => data.json())
}


export function putQuestions(){
    fetch(`${dburl}/questions.json`, {
        method: 'PUT',
        body: JSON.stringify({
            "preguntas": {
                "pregunta0" : {
                    "pregunta": "2+2?",
                    "respuesta0": "4",
                    "respuesta1": "5",
                    "respuesta2": "2",
                    "respuesta3": "1",
                    "correcta": "a"
                },
                "pregunta1" : {
                    "pregunta": "2+7?",
                    "respuesta0": "4",
                    "respuesta1": "5",
                    "respuesta2": "9",
                    "respuesta3": "1",
                    "correcta": "c"
                },
                "pregunta2" : {
                    "pregunta": "2+1?",
                    "respuesta0": "4",
                    "respuesta1": "3",
                    "respuesta2": "2",
                    "respuesta3": "1",
                    "correcta": "d"
                },
                "pregunta3" : {
                    "pregunta": "20+10?",
                    "respuesta0": "40",
                    "respuesta1": "10",
                    "respuesta2": "20",
                    "respuesta3": "30",
                    "correcta": "d"
                }
            }
        })
    })
}