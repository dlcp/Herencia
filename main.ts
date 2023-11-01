//clase vehiculoTerrestre y herencias
class vehiculoTerrestre {
    tipoVehiculo : string;
    constructor (tipoVehiculo:string) {
        this.tipoVehiculo = tipoVehiculo;
    }

    caminarPorLaCalle(){
        console.log("Este " + this.tipoVehiculo + " esta caminando")
    }
}

class camion extends vehiculoTerrestre {
    frenosGrandes: boolean;
    constructor(tipoVehiculo: string, frenosGrandes: boolean) {
        super(tipoVehiculo)
        this.frenosGrandes = frenosGrandes  
    }

    cargaPesada() {
        console.log("Este camion lleva carga pesada")
    }
}

class camioneta extends vehiculoTerrestre {
    capacidadBaldeCamioneta: number;
    constructor(tipoVehiculo:string, capacidadBaldeCamioneta:number){
        super(tipoVehiculo)
        this.capacidadBaldeCamioneta = capacidadBaldeCamioneta
    }

    cargaLiviana() {
        console.log("Esta camioneta lleva carga liviana")
    }
}

class vehiculo extends vehiculoTerrestre {
    capacidadPasajeros: number;
    constructor(tipoVehiculo: string, capacidadPasajeros: number){
        super(tipoVehiculo);
        this.capacidadPasajeros = capacidadPasajeros
    }

    cargaPasajeros() {
        console.log("Este vehiculo carga " + this.capacidadPasajeros + " pasajeros")
    }
}

//instancia de camion
let miCamion = new camion('camion', true);
console.log(miCamion)
miCamion.caminarPorLaCalle()
miCamion.cargaPesada()

//instacia de camioneta
let miCamioneta = new camioneta('camioneta', 20)
console.log(miCamioneta)
miCamioneta.caminarPorLaCalle()
miCamioneta.cargaLiviana()

//instancia de vehiculo
let miVehiculo = new vehiculo('vehiculo', 5)
console.log(miVehiculo)
miVehiculo.caminarPorLaCalle()
miVehiculo.cargaPasajeros()

//clase vehiculo aereo y herencias
class vehiculoAereo{
    tipoVehiculoAereo: string;
    constructor(tipoVehiculoAereo:string){
        this.tipoVehiculoAereo=tipoVehiculoAereo
    }

    navegarPorAire() {
        console.log(`Navegando por el aire en ${this.tipoVehiculoAereo}`);
    }
}

class avion extends vehiculoAereo{
    avionComercial: boolean;
    constructor(tipoVehiculoAereo:string,avionComercial:boolean){
        super(tipoVehiculoAereo)
        this.avionComercial = avionComercial
    
    }

    avionComercialCheck(){
        if (this.avionComercial == true){
            console.log("Este es un avion comercial")
        } else {
            console.log("Este no es un avion comercial")
        }
    }
}

class avioneta extends vehiculoAereo{
    cantidadPasajeros: number
    constructor(tipoVehiculoAereo:string, cantidadPasajeros:number){
        super(tipoVehiculoAereo)
        this.cantidadPasajeros = cantidadPasajeros
    }

    cargaPasajeroAire(){
        console.log("Este avioneta carga " + this.cantidadPasajeros) 
    }
}


//instancia de avion
let miAvion = new avion('avion', true)
console.log(miAvion)
miAvion.navegarPorAire()
miAvion.avionComercialCheck()

//instancia de avioneta
let miAvioneta = new avioneta('avioneta' , 3)
console.log(miAvioneta)
miAvioneta.cargaPasajeroAire()
miAvioneta.navegarPorAire()

//clase vehiculoMaritimo y herencias
class vehiculoMaritimo {
    tipoVehiculoMaritimo: string;
    constructor(tipoVehiculoMaritimo:string){
        this.tipoVehiculoMaritimo = tipoVehiculoMaritimo
    }

    navegarPorAgua(){
        console.log("Este " + this.tipoVehiculoMaritimo + " esta navegando")
    }
}

class yate extends vehiculoMaritimo {
    yateDeLujo: boolean;
    constructor(tipoVehiculoMaritimo:string, yateDeLujo:boolean){
        super(tipoVehiculoMaritimo)
        this.yateDeLujo = yateDeLujo
    }

    yateDeLujoCheck(){
        if (this.yateDeLujo == true){
            console.log("Este es un yate de lujo")
        } else {
            console.log("Este no es un yate de lujo")
        }
    }
}

class barco extends vehiculoMaritimo {
    barcoPesquero: boolean;
    constructor(tipoVehiculoMaritimo:string, barcoPesquero:boolean){
        super(tipoVehiculoMaritimo)
        this.barcoPesquero = barcoPesquero
    }

    barcoPesqueroCheck(){
        if (this.barcoPesquero == true){
            console.log("Este es un barco pesquero")
        } else {
            console.log("Este no es un barco pesquero")
        }
    }
}

//instancia de yate
let miYate = new yate('yate',true);
console.log(miYate)
miYate.navegarPorAgua();
miYate.yateDeLujoCheck();

//instancia de barco
let miBarco = new barco('barco', false)
console.log(miBarco)
miBarco.navegarPorAgua()
miBarco.barcoPesqueroCheck()

