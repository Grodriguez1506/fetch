'use strict'

window.addEventListener('load', function () {
    var btn_api = document.querySelector('#btn_api');
    var div_api = document.querySelector('#datos_api');
    var loading = document.querySelector('.loading');
    var loading_letters = document.querySelector('.loading_letters');
    var darkModeBtn = document.querySelector('.switch_mode');
    var delete_btn = document.querySelector('#delete_btn')
    
    btn_api.addEventListener('click',function(){

        loading.style.display = 'inline-block';
        loading_letters.style.display = 'inline-block';
        
        div_api.replaceChildren();
        
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(function (user){
                var indice;
                for(indice in user){
                    if(indice != 'userId'){
                        var p = document.createElement('p');
                        p.textContent = indice.toUpperCase() +': '+ user[indice];
                        div_api.append(p);
                    }
                }

            }
        );

        loading.style.display = 'none';
        loading_letters.style.display = 'none';
        }, 1500);
    });

    delete_btn.addEventListener('click', function(){
        div_api.replaceChildren();
    })

    darkModeBtn.addEventListener('click', function(){
        
        var body = document.querySelector('body')

        body.classList.toggle("dark_mode");
    });
 
    
    
});

function obtenerFechaCompleta(){
    var fecha = new Date();

    var year = fecha.getFullYear();
    
    var month = fecha.getMonth();
    
    var day = fecha.getDay();
    
    var date = fecha.getDate();
    
    var weekDays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    
    var dayName = weekDays[day];
    
    var yearMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    var monthName = yearMonths[month];
    
    
    return `Hoy es ${dayName} ${date} de ${monthName} del ${year}`;
};


console.log(obtenerFechaCompleta());
