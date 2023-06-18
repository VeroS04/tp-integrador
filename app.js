const comprarTikeBtn= document.getElementById("comprar-tiket-btn");
const homeBtn= document.getElementById("home-btn");
const sectionHome= document.getElementById("section-home");
const sectionComprar= document.getElementById("section-comprar")

comprarTikeBtn.addEventListener("click", () => {
    sectionHome.classList.add("oculto");
    sectionComprar.classList.remove("oculto")
})

homeBtn.addEventListener("click", () => {
    sectionHome.classList.remove("oculto");
    sectionComprar.classList.add("oculto")
})

function tithe() {
    const categoryPrices = {
        "1": 200,
        "2": 200,
        "3": 200
    };
    const discountPrice = {
        "0": 0,
        "1": 0,
        "2": 15,
        "3": 50,
        "4": 80
    };
    
    let category = document.getElementById("categoria").value;
    console.log(category);
    let cantidad = document.getElementById("cantidad").value;
    console.log(cantidad);
    
    if (category != "0") {
        let subtotal = categoryPrices[category] * cantidad;
        let discount = subtotal * discountPrice[cantidad] / 100;
        let total = subtotal - discount;

        let msj = '';
        if (discount !== 0) msj = `<span class="discount">¡Ahorrás $${discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}!</span>`;

        document.getElementById("price").innerHTML = `$${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${msj}`;
    } else {
        alert("Sin datos para calcular.");
    }
}



function reset() {
    document.getElementById("price").innerHTML = '$0';
    document.getElementById("categoria").value = '0';
    document.getElementById("cantidad").value = '1';
}

document.getElementById("resume").addEventListener("click", tithe);

document.getElementById("reset").addEventListener("click", reset);