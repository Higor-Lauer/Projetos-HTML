telefone.onblur = function(){
    if(telefone.value.lenght < 11){
        erros1.innerHTML = '<p>Verifique o número de telefone</p>'
        telefone.style.backgroundColor = 'red';
    }
    else{
        telefone.style.backgroundColor = 'white';

    }
};

aperitivo = document.getElementById('aperit');
aperitivo.onchange = function(){
    this.checked ? alert("Ok, vou providenciar") : alert('Até a próxima');
};

let sexo = document.getElementsByName('Sexo');
let hobbies = document.getElementsByName('hobbies');

btSexo.onclick = function(){
    let mens = '';
    mens += 'Sexo:';
    sexo.forEach(s =>{
        s.checked ? mens
    })
}