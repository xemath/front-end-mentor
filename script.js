let barraMonth = document.querySelector('.barrita');
let punto = document.querySelector('#punto');
let puntoBarra = document.querySelector('#puntobarra')
let papa = document.getElementById('elemento3');
let barrasuperior = document.querySelector('.barra-superior2')
let puntoPartida = 630;
cortar = 'carlos'
console.log(cortar.slice(0,3))

papa.addEventListener('mousemove',(e)=>{
        if(e.screenX<890){
            barrasuperior.style.width = `${250+(e.screenX-630)}px`
            largoBarra = barrasuperior.style.width.split('p')[0]
            puntoBarra.style.left = `${largoBarra}px`;
        }
        
        console.log(e.screenX);
        

    
})



function clickBarra(){
    barraMonth.addEventListener('click',()=>{
        if(barraMonth.style.background=='rgb(165, 243, 235)'){
            punto.style.left= '2px'
            barraMonth.style.background = 'hsl(227, 12%, 86%)'
            barraMonth.setAttribute('class', 'barrita')

        }else{
            barraMonth.style.background = 'hsl(174, 77%, 80%)'
            punto.style.left = '17px'
            barraMonth.setAttribute('class', 'barrita shadow-one')
        }
        
    })
}
clickBarra()