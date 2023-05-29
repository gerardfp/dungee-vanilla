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
                    "pregunta": "Qué tipo de datos retorna el método next() de la clase Scanner?",
                    "respuesta0": "char",
                    "respuesta1": "String",
                    "respuesta2": "char[]",
                    "respuesta3": "El método next() no existe",
                    "correcta": "b"
                },
                "pregunta1" : {
                    "pregunta": "Qué tipo de datos retorna el método nextInt() de la clase Scanner?",
                    "respuesta0": "int",
                    "respuesta1": "Integer",
                    "respuesta2": "number",
                    "respuesta3": "Number",
                    "correcta": "a"
                },
                "pregunta2" : {
                    "pregunta": "Qué tipo de datos retorna el método nextString() de la clase Scanner?",
                    "respuesta0": "Unicode",
                    "respuesta1": "String",
                    "respuesta2": "El método nextString() no existe",
                    "respuesta3": "char[]",
                    "correcta": "c"
                },
                "pregunta3" : {
                    "pregunta": "Qué tipo de datos retorna el método hasNext() de la clase Scanner?",
                    "respuesta0": "char",
                    "respuesta1": "String",
                    "respuesta2": "int",
                    "respuesta3": "boolean",
                    "correcta": "d"
                }
            }
        })
    })
}