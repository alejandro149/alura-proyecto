// Función para encriptar
function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar
function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Manejo de eventos
document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encriptarTexto(inputText);
    document.getElementById("output-text").value = encryptedText;
    document.getElementById("output-image").style.display = "none";
    document.getElementById("output-text").style.display = "block";
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = desencriptarTexto(inputText);
    document.getElementById("output-text").value = decryptedText;
    document.getElementById("output-image").style.display = "none";
    document.getElementById("output-text").style.display = "block";
});