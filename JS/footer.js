

var btnVoltarTOPO = document.getElementById('Voltar-ao-topo');
var btnEncontreImoveis = document.querySelector('.btn-mobile-anunciar');
var btnAnuncieImoveis = document.getElementById('btn-anuncie-imoveis')
var btnInstitucional = document.getElementById('btn-mobile-institucional');
var btnRedesSociais = document.getElementById('btn-redes-socias');
btnVoltarTOPO.addEventListener("click",function topo(){
    window.scrollTo(0, 0);
})

btnEncontreImoveis.addEventListener("click",()=>{
    let ul = document.querySelector('.Encontre-Imovel ul');
     ul.classList.toggle('displayNone2')
})

btnAnuncieImoveis.addEventListener("click",()=>{
    let ul = document.querySelector('.Anuncie-Imoveis ul');
     ul.classList.toggle('displayNone2')
})

btnInstitucional.addEventListener("click",()=>{
    let ul = document.querySelector('.institucional ul');
     ul.classList.toggle('displayNone2')
})

btnRedesSociais.addEventListener("click",()=>{
    let ul = document.querySelector('.container-btn-redes-socias ul');
     ul.classList.toggle('displayNone2')
})
