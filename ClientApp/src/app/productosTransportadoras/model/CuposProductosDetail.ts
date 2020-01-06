import { Theme } from './theme';
import { Profile } from './profile';

export class CuposProductosDetail {
    nombreProducto: string;
    prioridad: string;
    horaTope: string;
    cupoBase: number;
    activo: boolean;
    dom2: boolean;
    // excepcion
    nombreExcepcion: string;
    fechaIni: string;
    fechaFin: string;
    horaTopeExcepcion: string;
    cuposTotalesExcepcion: number;
    porDeshabilitaExcepcion: number;
    cuposMinimosExcepcion: number;

}
