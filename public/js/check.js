console.log(arreglo);

fetch('http://localhost:1234/productosPorIds?id=' + arreglo)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        console.log(res);

        var lista = document.querySelector('.lista');
        res.forEach(function (elem) {
            lista.innerHTML += 
            `
            <article class="articuloLista">

            <article class="imagenCheck">
            <div>
                <img src=`+elem.imagen+` alt="">
            </div>
        </article>
        <article class="infoCheck">
            <div>
                <h1>`+elem.album+`</h1>
                <div class="salir">
                    <i class="fas fa-times-circle"></i>
                </div>
            </div>
            <div>
                <h2>`+elem.autor+`</h2>
            </div>
            <div>
                <p>`+elem.descripcion+`</p>
            </div>
            <div class="preecio">
                <p>`+elem.precio+`</p>
            </div>
            </article>
            </article>
            `;
        });
    });