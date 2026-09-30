import { DispositivoProps } from "../interfaces/DispositivoProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class lampadaInteligente {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getCorHexadecimal(): string { return this.props.corHexadecimal; }
    public get getNivelBrilho(): number { return this.props.corHexadecimal}
   

    public set setCorHexadecimal(novaCor: string) {
        if (novaCor.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.corHexadecimal = novaCor;
    }

    public set setNivelBrilho(novoBrilho: number) {
        if (novoBrilho = 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.nivelBrilho = novoBrilho;
    }

}