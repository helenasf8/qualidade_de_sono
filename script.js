const form = document.getElementById('form');
form.addEventListener("click", (e) => {
    e.preventDefault();

    let dorme = document.getElementById('horariodedormir');
    let acorda = document.getElementById('horarioacordar');
    let horaTela = document.getElementById('horariotelas');
    let res = document.getElementById('res');

    //horas
    let tempodorme = dorme.value.split(":");
    let tempoacorda = acorda.value.split(":");

    //hora e minuto q dorme
    let hradorme = Number(tempodorme[0]);
    let hradormeminuto = Number(tempodorme[1]);

    //hora e minuto q acorda
    let hraacorda = Number(tempoacorda[0]);
    let hraacordaminuto = Number(tempoacorda[1]);

    //horas
    let horaSono = 0;

    if (hraacorda < hradorme){
        horaSono = (24-hradorme)+hraacorda;
    }else{
        horaSono = hraacorda-hradorme;
    }

    //minutos
    minutoSono = hraacordaminuto - hradormeminuto;
    if (minutoSono < 0) {
        minutoSono *= -1;
    }
    if (minutoSono <= 9) {
        minutoSono = "0"+minutoSono;
    }
    
    //mensagem
    if (horaSono >= 8) {
        res.innerHTML = `Você está dormindo ${horaSono}:${minutoSono} horas por noite, parabéns!`;
    }
    else {
        hrafalta = 8 - horaSono;
        minutofalta = 0;
        if (minutoSono > 0) {
            minutofalta = 60 - minutoSono;
            hrafalta -= 1;
        }
        res.innerHTML = `Você está dormindo ${horaSono}:${minutoSono} horas por noite, deve dormir mais ${hrafalta}:${minutofalta}h.`;
    }
    
    //tempo tela
    let tempotela = horaTela.value.split(":");

    let hratela = Number(tempotela[0]);
    let hratelaminuto = Number(tempotela[1]);

    let horaideal = hradorme - 1;

    if (hratela > horaideal || hratelaminuto > 0) {
        tela.innerHTML = `Você precisa parar de usar telas pelo menos 1 hora antes antes de dormir!`;
    }
   
})
