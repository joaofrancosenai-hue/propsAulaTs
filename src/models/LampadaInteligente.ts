import { LampadaProps } from "../interfaces/LampadaProps.js";
import { Dispositivo } from "./Dispositivo.js";

export class LampadaInteligente<T extends LampadaProps = LampadaProps> extends Dispositivo<T> {

    constructor(props: T) {
        super(props);
    }

    public getCorHexadecimal(): string {
        return this.props.corHexadecimal;
    }

    public getNivelBrilho(): number {
        return this.props.nivelBrilho;
    }

    public setBrilho(nivel: number): void {
        if (nivel < 0 || nivel > 100) {
            console.log("\n ERRO: O nível de brilho deve estar entre 0 e 100!");
            return;
        }
        this.props.nivelBrilho = nivel;
    }
}