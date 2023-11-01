var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clase vehiculoTerrestre y herencias
var vehiculoTerrestre = /** @class */ (function () {
    function vehiculoTerrestre(tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    }
    vehiculoTerrestre.prototype.caminarPorLaCalle = function () {
        console.log("Este " + this.tipoVehiculo + " esta caminando");
    };
    return vehiculoTerrestre;
}());
var camion = /** @class */ (function (_super) {
    __extends(camion, _super);
    function camion(tipoVehiculo, frenosGrandes) {
        var _this = _super.call(this, tipoVehiculo) || this;
        _this.frenosGrandes = frenosGrandes;
        return _this;
    }
    camion.prototype.cargaPesada = function () {
        console.log("Este camion lleva carga pesada");
    };
    return camion;
}(vehiculoTerrestre));
var camioneta = /** @class */ (function (_super) {
    __extends(camioneta, _super);
    function camioneta(tipoVehiculo, capacidadBaldeCamioneta) {
        var _this = _super.call(this, tipoVehiculo) || this;
        _this.capacidadBaldeCamioneta = capacidadBaldeCamioneta;
        return _this;
    }
    camioneta.prototype.cargaLiviana = function () {
        console.log("Esta camioneta lleva carga liviana");
    };
    return camioneta;
}(vehiculoTerrestre));
var vehiculo = /** @class */ (function (_super) {
    __extends(vehiculo, _super);
    function vehiculo(tipoVehiculo, capacidadPasajeros) {
        var _this = _super.call(this, tipoVehiculo) || this;
        _this.capacidadPasajeros = capacidadPasajeros;
        return _this;
    }
    vehiculo.prototype.cargaPasajeros = function () {
        console.log("Este vehiculo carga " + this.capacidadPasajeros + " pasajeros");
    };
    return vehiculo;
}(vehiculoTerrestre));
//instancia de camion
var miCamion = new camion('camion', true);
console.log(miCamion);
miCamion.caminarPorLaCalle();
miCamion.cargaPesada();
//instacia de camioneta
var miCamioneta = new camioneta('camioneta', 20);
console.log(miCamioneta);
miCamioneta.caminarPorLaCalle();
miCamioneta.cargaLiviana();
//instancia de vehiculo
var miVehiculo = new vehiculo('vehiculo', 5);
console.log(miVehiculo);
miVehiculo.caminarPorLaCalle();
miVehiculo.cargaPasajeros();
//clase vehiculoMaritimo y herencias
var vehiculoMaritimo = /** @class */ (function () {
    function vehiculoMaritimo(tipoVehiculoMaritimo) {
        this.tipoVehiculoMaritimo = tipoVehiculoMaritimo;
    }
    vehiculoMaritimo.prototype.navegarPorAgua = function () {
        console.log("Este " + this.tipoVehiculoMaritimo + " esta navegando");
    };
    return vehiculoMaritimo;
}());
var yate = /** @class */ (function (_super) {
    __extends(yate, _super);
    function yate(tipoVehiculoMaritimo, yateDeLujo) {
        var _this = _super.call(this, tipoVehiculoMaritimo) || this;
        _this.yateDeLujo = yateDeLujo;
        return _this;
    }
    yate.prototype.yateDeLujoCheck = function () {
        if (this.yateDeLujo == true) {
            console.log("Este es un yate de lujo");
        }
        else {
            console.log("Este no es un yate de lujo");
        }
    };
    return yate;
}(vehiculoMaritimo));
var barco = /** @class */ (function (_super) {
    __extends(barco, _super);
    function barco(tipoVehiculoMaritimo, barcoPesquero) {
        var _this = _super.call(this, tipoVehiculoMaritimo) || this;
        _this.barcoPesquero = barcoPesquero;
        return _this;
    }
    barco.prototype.barcoPesqueroCheck = function () {
        if (this.barcoPesquero == true) {
            console.log("Este es un barco pesquero");
        }
        else {
            console.log("Este no es un barco pesquero");
        }
    };
    return barco;
}(vehiculoMaritimo));
//instancia de yate
var miYate = new yate('yate', true);
console.log(miYate);
miYate.navegarPorAgua();
miYate.yateDeLujoCheck();
//instancia de barco
var miBarco = new barco('barco', false);
console.log(miBarco);
miBarco.navegarPorAgua();
miBarco.barcoPesqueroCheck();
//clase vehiculo aereo y herencias
var vehiculoAereo = /** @class */ (function () {
    function vehiculoAereo(tipoVehiculoAereo) {
        this.tipoVehiculoAereo = tipoVehiculoAereo;
    }
    vehiculoAereo.prototype.navegarPorAire = function () {
        console.log("Navegando por el aire en ".concat(this.tipoVehiculoAereo));
    };
    return vehiculoAereo;
}());
var avion = /** @class */ (function (_super) {
    __extends(avion, _super);
    function avion(tipoVehiculoAereo, avionComercial) {
        var _this = _super.call(this, tipoVehiculoAereo) || this;
        _this.avionComercial = avionComercial;
        return _this;
    }
    avion.prototype.avionComercialCheck = function () {
        if (this.avionComercial == true) {
            console.log("Este es un avion comercial");
        }
        else {
            console.log("Este no es un avion comercial");
        }
    };
    return avion;
}(vehiculoAereo));
var avioneta = /** @class */ (function (_super) {
    __extends(avioneta, _super);
    function avioneta(tipoVehiculoAereo, cantidadPasajeros) {
        var _this = _super.call(this, tipoVehiculoAereo) || this;
        _this.cantidadPasajeros = cantidadPasajeros;
        return _this;
    }
    avioneta.prototype.cargaPasajeroAire = function () {
        console.log("Este avioneta carga " + this.cantidadPasajeros);
    };
    return avioneta;
}(vehiculoAereo));
//instancia de avion
var miAvion = new avion('avion', true);
console.log(miAvion);
miAvion.navegarPorAire();
miAvion.avionComercialCheck();
//instancia de avioneta
var miAvioneta = new avioneta('avioneta', 3);
console.log(miAvioneta);
miAvioneta.cargaPasajeroAire();
miAvioneta.navegarPorAire();
