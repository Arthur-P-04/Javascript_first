function processData() {
    const first_name = document.getElementById('name_1').value;
    const second_name = document.getElementById('name_2').value;
    const last_name1 = document.getElementById('last_name1').value;
    const last_name2 = document.getElementById('last_name2').value;
    const dni = document.getElementById('dni').value;
    const nacimiento = new Date(document.getElementById('fecha_nacimiento').value);

    //plantillas de cadena de texto 
    const nombres_completos = `${first_name} ${second_name} ${last_name1} ${last_name2}`;
    document.getElementById('nombres_completos').value = nombres_completos;

    //chatArt = devuelve el caracter de una posicion especifica
    const ultimo_digito = dni.charAt(dni.length - 1);
    document.getElementById('ultimo_digito_dni').value = ultimo_digito;

    const today = new Date();
    let edad = today.getFullYear() - nacimiento.getFullYear(); //aproximado para los años 
    const diferencia_de_meses = today.getMonth() - nacimiento.getMonth(); // ver los meses 
    if (diferencia_de_meses < 0 || (diferencia_de_meses === 0 && today.getDate() < nacimiento.getDate())) { //verificar los dias 
        edad--; //se resta -1 a esa edad 
    }
    document.getElementById('edad').value = edad;
}