const btnComprar = document.querySelector('#comprar')
const btnAlugar = document.querySelector('#alugar');
const btnLancamentos = document.querySelector('#lancamentos');

btnComprar.addEventListener('click', ()=>{
   btnComprar.classList.add('active-buttons');
   btnComprar.classList.remove('buttons-options');
   btnAlugar.classList.remove('active-buttons');
   btnAlugar.classList.add('buttons-options');
   btnLancamentos.classList.remove('active-buttons');
   btnLancamentos.classList.add('buttons-options');
})

btnAlugar.addEventListener('click', ()=>{
    btnAlugar.classList.add('active-buttons');
    btnAlugar.classList.remove('buttons-options')
    btnComprar.classList.remove('active-buttons');
    btnComprar.classList.add('buttons-options');
    btnLancamentos.classList.remove('active-buttons');
    btnLancamentos.classList.add('buttons-options');
 })

 btnLancamentos.addEventListener('click', ()=>{
    btnLancamentos.classList.add('active-buttons');
    btnLancamentos.classList.remove('buttons-options')
    btnComprar.classList.remove('active-buttons');
    btnComprar.classList.add('buttons-options');
    btnAlugar.classList.remove('active-buttons');
    btnAlugar.classList.add('buttons-options');

 })


/*aqui começa a criação do button de passar imagem da section5*/

var btnVoltar = document.querySelector('#imgvoltar');
var btnPassar = document.querySelector('#imgpassar');
var ContainerCard = document.querySelectorAll('.container-card-section5')

var sp = document.querySelector('#sp');
var rj = document.querySelector('#rj');
var mg = document.querySelector('#mg');
var rs = document.querySelector('#rs');
var pr = document.querySelector('#pr');
var atual = 0;
btnPassar.addEventListener('click', ()=>{
   atual++
   passarSlide()
})  


btnVoltar.addEventListener('click', ()=>{
   atual--
   passarSlide()
})

function passarSlide(){
   if(atual>=ContainerCard.length){
      atual=0
   }
   else if(atual < 0){
      atual = ContainerCard.length-1
   }

   if(innerWidth<1500){
   sp.style.right = 100*atual+ '%'
   rj.style.right = 100*atual+ '%'
   mg.style.right = 100*atual+ '%'
   rs.style.right = 100*atual+ '%'
   pr.style.right = 100*atual+ '%'
}

else if(innerWidth>1500){
   sp.style.right = 50*atual+ '%'
   rj.style.right = 50*atual+ '%'
   mg.style.right = 50*atual+ '%'
   rs.style.right = 50*atual+ '%'
   pr.style.right = 50*atual+ '%'
}
}


/*aqui começa a criação do botão mostrar mais e mostrar menos*/


var btnMostrarMais1 = document.getElementById('btn-mostrarMais-aside1');
var btnMostrarMenos1 = document.getElementById('btn-mostrarMenos-aside1');
var btnMostrarMais2 = document.getElementById('btn-mostrarMais-aside2');
var btnMostrarMenos2 = document.getElementById('btn-mostrarMenos-aside2');
var btnMostrarMais3= document.getElementById('btn-mostrarMais-aside3');
var btnMostrarMenos3 = document.getElementById('btn-mostrarMenos-aside3');


   btnMostrarMenos1.addEventListener('click', ()=>{
      btnMostrarMenos1.classList.add('displayNone3');   
      btnMostrarMais1.classList.remove('displayNone3');   
      [...document.querySelectorAll('#aside1')].map((link) => {
         link.classList.add('displayNone3')
      });
   });
   
   btnMostrarMais1.addEventListener('click', ()=>{
     btnMostrarMais1.classList.add('displayNone3');
      btnMostrarMenos1.classList.remove('displayNone3');
      [...document.querySelectorAll('#aside1')].map((link) => {
         link.classList.remove('displayNone3')
      });
   })
   
   btnMostrarMenos2.addEventListener('click', ()=>{
     btnMostrarMenos2.classList.add('displayNone3');   
     btnMostrarMais2.classList.remove('displayNone3');   
     [...document.querySelectorAll('#aside2')].map((link) => {
        link.classList.add('displayNone3')
     });
  });
  
  btnMostrarMais2.addEventListener('click', ()=>{
    btnMostrarMais2.classList.add('displayNone3');
     btnMostrarMenos2.classList.remove('displayNone3');
     [...document.querySelectorAll('#aside2')].map((link) => {
        link.classList.remove('displayNone3')
     });
  })
  
  btnMostrarMenos3.addEventListener('click', ()=>{
     btnMostrarMenos3.classList.add('displayNone3');   
     btnMostrarMais3.classList.remove('displayNone3');   
     [...document.querySelectorAll('#aside3')].map((link) => {
        link.classList.add('displayNone3')
     });
  });
  
  btnMostrarMais3.addEventListener('click', ()=>{
    btnMostrarMais3.classList.add('displayNone3');
     btnMostrarMenos3.classList.remove('displayNone3');
     [...document.querySelectorAll('#aside3')].map((link) => {
        link.classList.remove('displayNone3')
     });
  })
  
  


