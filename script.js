const form = document.getElementById('form');
form.addEventListener("click", (e) => {
    e.preventDefault();
    
    let dorme = document.getElementById('horariodedormir');
    let acorda = document.getElementById('horarioacordar');
    let horaTela = document.getElementById('horariotelas');
    let res = document.getElementById('res');


    let tempodorme = dorme.value.split(":");
    let tempoacorda = acorda.value.split(":");

    let hradorme = Number(tempodorme[0]);
    let hradormeminuto = Number(tempodorme[1]);

    let hraacorda = Number(tempoacorda[0]);
    let hraacordaminuto = Number(tempoacorda[1]);

    let horaSono = 0;

    if (hraacorda < hradorme){
        horaSono = (24-hradorme)+hraacorda
    }else{
        horaSono = hraacorda-hradorme
    }

    minutoSono = hraacordaminuto - hradormeminuto;
    if (minutoSono < 0) {
        minutoSono *= -1;
    }

    console.log(horaSono+":"+minutoSono);

})
