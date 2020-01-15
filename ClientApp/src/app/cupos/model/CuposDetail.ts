import { Theme } from './theme';
import { Profile } from './profile';

export class CuposDetail {
    IdECCupoBase: number;
    Dia: string;
    cupos: number;
    porcDeshabilita: number;

    themes: Theme[];
    profiles: Profile[];
}
