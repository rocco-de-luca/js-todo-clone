$(document).ready(function () {
    //array
    // Sorgente dati
    var todoItems = [
        'prendere il latte',
        'scrivere email al collega',
        'cambiare browser (Chrome ewwww)',
        'pagare le bollette'
    ];

    // Refs
    var list = $('.todo');
    var newInput = $('.add-element');
    // Popolazione todo list
    for (var i = 0; i < todoItems.length; i++) {
        // Cloniamo il template
        var elementList = $('.template li').clone();

        //elementList.attr('data-element', i);

        // Aggiungere testo dinamico al template
        elementList.prepend(todoItems[i]);

        // Aggiungere il clone alla list
        list.append(elementList);
    }
    /*
        // Rimozione todo item
        $(".todo li i").click(function(){
            $(this).parent().remove();
        })
    */
    $("body").on("click", ".todo li i", function () {
        $(this).parent().remove();
    });
    // Aggiunta di un nuovo list item
    newInput.keyup(function (e) {
        //console.log(e.which, e.keyCode);

        if (e.which == 13 || e.keyCode == 13) {
            var text = newInput.val().trim();
            //console.log(text); 

            if (text !== '') {
                var elementNew = $('.template li').clone();
                elementNew.prepend(text);
                list.append(elementNew);

                // clear dell'input
                newInput.val('');
            }
        }
    });


    // Rendi todo item completo / da cpompletare
    $('body').on('click', '.todo li', function () {
        $(this).toggleClass('completed');
    });

}); // <-- End doc ready

/*
 .on() è un allegatore di argomenti
 ci permette di indicare un tipo di evento, solo che
 il selettore che noi abbiamo normalmente all'inizio delle'evento
 diventa un argomento e il selettore vero e proprio divento un elemento che contiene
 gle elementi che verranno aggiunti dopo
 */