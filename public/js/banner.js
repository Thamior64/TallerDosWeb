var movimientoBanner = setInterval(cambiarBanner, 3000);
var banner = ["/imagenes/almendra.jpg", "/imagenes/cds.jpg", "/imagenes/drexler.jpg",
        "/imagenes/drexlerf.jpg", "/imagenes/kanka.jpg", "/imagenes/kevin.jpg", "/imagenes/piero.jpg",
        "/imagenes/sabina.jpg", "/imagenes/silvina.jpg", "/imagenes/spinetta.jpg"];
        banner.iterador = 1;

        function cambiarBanner() {
            var ima = document.querySelector(".banner");

            switch (banner.iterador) {
                case 0:
                    ima.style.backgroundImage = "url(" + banner[0] + ")";
                    banner.iterador++;
                    break;

                case 1:
                    ima.style.backgroundImage = "url(" + banner[1] + ")";
                    banner.iterador++;
                    break;

                case 2:
                    ima.style.backgroundImage = "url(" + banner[2] + ")";
                    banner.iterador++;
                    break;
                case 3:
                    ima.style.backgroundImage = "url(" + banner[3] + ")";
                    banner.iterador++;
                    break;

                case 4:
                    ima.style.backgroundImage = "url(" + banner[4] + ")";
                    banner.iterador++;
                    break;

                case 5:
                    ima.style.backgroundImage = "url(" + banner[5] + ")";
                    banner.iterador++;
                    break;
                case 6:
                    ima.style.backgroundImage = "url(" + banner[6] + ")";
                    banner.iterador++;
                    break;

                case 7:
                    ima.style.backgroundImage = "url(" + banner[7] + ")";
                    banner.iterador++;
                    break;

                case 8:
                    ima.style.backgroundImage = "url(" + banner[8] + ")";
                    banner.iterador++;
                    break;
                case 9:
                    ima.style.backgroundImage = "url(" + banner[9] + ")";
                    banner.iterador++;
                    break;
            }

            if (banner.iterador > 9) {
                banner.iterador = 0;
            }
        }