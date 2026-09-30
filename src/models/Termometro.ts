import { TermostatoProps } from "../interfaces/TermostatoProps.js";
import { Dispositivo } from "./Dispositivo.js";

export class Termostato<T extends TermostatoProps = TermostatoProps> extends Dispositivo<T> {

    constructor(props: T) {
        super(props);
    }

    public getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    public getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    public setTemperaturaAlvo(temp: number): void {
        this.props.temperaturaAlvo = temp;
    }
}