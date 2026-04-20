// js para usar whatsapp 
var NUMERO_WHATSAPP = '5573772546';

function abrirWhatsApp() {
    var nombre = document.getElementById('wa-nombre').value.trim();
    var servicio = document.getElementById('wa-servicio').value;
    var mensaje = document.getElementById('wa-mensaje').value.trim();

    // Validación básica
    if (!nombre) {
        alert('Por favor ingresa tu nombre.');
        return false;
    }
    if (!servicio) {
        alert('Por favor selecciona un servicio.');
        return false;
    }

    // Armar el mensaje
    var texto = '¡Hola Plivot! 👋\n\n';
    texto += 'Mi nombre es: ' + nombre + '\n';
    texto += 'Servicio de interés: ' + servicio + '\n';
    if (mensaje) {
        texto += 'Mensaje: ' + mensaje + '\n';
    }
    texto += '\n¿Podríamos platicar sobre mi proyecto?';

    // Codificar y abrir WhatsApp
    var url = 'https://wa.me/' + NUMERO_WHATSAPP + '?text=' + encodeURIComponent(texto);
    window.open(url, '_blank');
    return false;
}