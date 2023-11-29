function menu() {
    opcion = prompt (
        "¡Bienvenido a nuestro menú!\n 1. Helado \n 2. Hamburguesa \n 3. Perro caliente \n 4. Ensalada \n\n Ingresa el Número de tu pedido"
        );
        opcion = parseInt(opcion);
    
    }
    let opcion;
    do {
        menu();
    } while(opcion < 1 || opcion > 4 )
    switch (opcion) {
        case 1:
            alert("Tu pedido fue Helado y tiene un costo de $7.000");
            break;
        case 2:
            alert("Tu pedido fue Hamburguesa y tiene un costo de $15.000");
            break;
        case 3:
            alert("Tu pedido fue Perro caliente y tiene un costo de $12.000");
            break; 
        case 4:
            alert("Tu pedido fue Ensalada y tiene un costo de $10.000");
            break;  
        default:
            alert("Gracias por su visita");       
    } 
