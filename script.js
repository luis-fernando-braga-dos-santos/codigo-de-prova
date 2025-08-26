let nota = parseFloat(prompt("Digite sua nota"));

if (!isNaN(nota)) {
    if (nota >= 7) {
        alert("Voce foi aprovado");
    } else {
        if (nota >= 5) {
            alert("Voce esta de recuperacao");
        } else {
            alert("Voce foi reprovado");
        }
    }
} else {
    alert("Por favor, digite uma nota valida");
}