const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
function hora() {
    let dorme = document.getElementById('horariodedormir');
    let acorda = document.getElementById('horarioacordar');
    let horaTela = document.getElementById('horariotelas');
    let res = document.getElementById('res');

    let n1 = Number(dorme.value);
    let n2 = Number(acorda.value);

    if (n1 == 0) {
        horaDorme = 0;
    }
    else {
        horaDorme = (n1 - 24) * (-1);
    }
    let horaAcorda = n2 + horaDorme;
    
    if (horaAcorda >= 8) {
        res.innerHTML = `Você está dormindo ${horaAcorda} horas por noite.`;
    }
    else {
        let horasAdd = 8 - horaAcorda;
        res.innerHTML = `Você está dormindo ${horaAcorda} horas por noite, deve dormir mais ${horasAdd}H.`;

    }
    
    let telaHora = Number(horaTela.value);
    let horaIdeal = n1 - 1;
    if (telaHora == n1) {
        horaDiferenca = telaHora - horaIdeal;
        tela.innerHTML = `Recomendamos também você a deixar de usar telas ${horaDiferenca}H antes ir dormir.`;
}
}