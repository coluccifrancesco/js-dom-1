// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
const btn = document.getElementById('turnOn');

btn.addEventListener('click', function(){
    let elemento = document.getElementById('lampImg');
    elemento.src = '../img/yellow_lamp.png';
    
    return
})

// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes() 


//  http://127.0.0.1:3000/index.html