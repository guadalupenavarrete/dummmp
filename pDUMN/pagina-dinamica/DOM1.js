


var producto = [];
var precio = [];


function card() {

    var accesorios = document.getElementById("accesorios").value;
    var cantidad = document.getElementById("cantidad").value;


    //elimino div1
    var contenedoraux = document.getElementById("contenedor");
    var elem = document.getElementById("div1");
    contenedoraux.removeChild(elem);

    for (var i = 1; i <= cantidad; i++) {


        //creo nuevamente div1
        var div0 = document.createElement("div")
        div0.className = "row gx-5";
        div0.id = "div1"
        contenedoraux.appendChild(div0)






        switch (accesorios) {
            case "Protección y Detallado":
                producto = ["", "Carnauba Quick Wax (Línea Premium) 5lts", "Clay Luber", "Carnauba Quick Wax con gatillo 600ml", "Carnauba Wax 400ml", "Turbo Spray wax 600ml", "Polish wax & protectant - Cera pulidora 600ml"];
                precio = [" ", "$5.533,00", "$1.645,00", "$3.589,00", "2.500$", "1.000$", "4.700$"];
                break;



            case "Línea Frío - Aerosoles":
                producto = ["", "Extreme Dip 440cc (vinilo en aerosol)", "Arranca Motores en aerosol 440cc", "Lubricante para cadenas 237cc - MOTOS", "Lubricante multiuso en aerosol 440cc (Aromatizado)", "Infla Sella Neumáticos 427cc", "Cadena Líquida en aerosol 427cc"];
                precio = [" ", "7.000$", "4.670$", "1.000$", "4.300$", "12.700$", "4.200$"];
                break;



            case "Spray":
                producto = ["", "Waterless Wash & Wax (Gatillo) - Lavado en Seco", "Limpiador Multipropósito ", "Waterless Wash & Wax (Gatillo) - Lavado en Seco", "Limpia tapizados (Gatillo)", "Gel gomas TIRE GEL", "Antiescarcha a gatillo 600ml"];
                precio = [" ", "5.000$", "4.600$", "10.000$", "2.300$", "1.700$", "$2.574,00"];
                break;
            default:
                break;
        }
        //creamos el primer div 
        var contenedor1 = document.getElementById("div1")
        var div1 = document.createElement("div")
        div1.className = "col-5"
        div1.id = "div1" + i
        contenedor1.appendChild(div1)

        var div1b = document.getElementById("div1" + i)
        var div2 = document.createElement("div")
        div2.className = "p-3"
        div2.id = "div2" + i
        div1b.appendChild(div2)

        var div2b = document.getElementById("div2" + i)
        var div3 = document.createElement("div")
        div3.className = "card"
        div3.id = "div3" + i
        div2b.appendChild(div3)

        var div3b = document.getElementById("div3" + i)
        var div4 = document.createElement("div")
        div4.className = "card"
        div4.style = "width: 18rem"
        div3b.appendChild(div4)

        var div5 = document.createElement("img")
        div5.src = "/pagina-dinamica/imagenes/" + accesorios + i + ".jpg"
        div5.className = "card-img-top"
        div5.alt = "..."
        div3b.appendChild(div5)

        var div6 = document.createElement("div")
        div6.className = "card-body"
        div6.id = "div6" + i
        div3b.appendChild(div6)
        //
        var div6b = document.getElementById("div6" + i)
        var div7 = document.createElement("h4")
        div7.className = "card-title"
        
        div6b.appendChild(div7)

        var div8 = document.createElement("p")
        div8.className = "card-text"
        div8.innerHTML = producto[i] 
        div6b.appendChild(div8)

        var div9=document.createElement("p")
        div9.innerHTML ="  precio  " + precio[i]
        div6b.appendChild(div9)

        var div10=document.createElement("p")
        div6b.appendChild(div10)

        var button = document.createElement("button");
        button.className = "btn btn-primary"
        button.innerHTML = "comprar"
        div10.appendChild(button);



    }

}


