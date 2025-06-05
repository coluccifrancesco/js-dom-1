// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
const btn = document.getElementById('turnOn');
let elemento = document.getElementById('lampImg');

btn.addEventListener('click', 
    
function(){

        if(btn.innerHTML === 'Accendi'){
            // btn.addEventListener('click', function(){
                btn.innerHTML = 'Spegni'
                elemento.src = '../img/yellow_lamp.png';
                // return
            // })
        }

        else {
            // btn.addEventListener('click', function(){
                elemento.src = '../img/white_lamp.png'
                btn.innerHTML = 'Accendi'
                // return
            // })
        }

        // return
    }
)

//  http://127.0.0.1:3000/index.html