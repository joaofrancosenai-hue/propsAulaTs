import { DispositivoProps } from "../interfaces/DispositivoProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class TermometroProps  {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getTemperaturaAtual(): number { return this.props.temeperaturaAtual; }
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo}
   

    public set setTemperaturaAtual(novaTemperatura: number) {
        if (novaTemperatura = 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temeperaturaAtual = novaTemperatura;
    }

    public set setTemepraturaAlvo(novoAlvo: number) {
        if (novoAlvo = 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temperaturaAlvo = novoAlvo;
    }

}