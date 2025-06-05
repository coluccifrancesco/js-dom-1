// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
const btn = document.getElementById('turnOn');

btn.addEventListener('click', 
    
    function(){
        let elemento = document.getElementById('lampImg');

        if(btn.innerHTML === 'Accendi'){
            btn.addEventListener('click', function(){
                btn.innerHTML = 'Spegni'
                elemento.src = '../img/yellow_lamp.png';
                return
            })
        }

        if(btn.innerHTML === 'Spegni'){
            btn.addEventListener('click', function(){
                elemento.src = '../img/white_lamp.png'
                btn.innerHTML = 'Accendi'
                return
            })
        }

        return
    }
)

//  http://127.0.0.1:3000/index.html