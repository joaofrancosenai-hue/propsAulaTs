export interface DispositivoProps {
    idRede: string;
    nomeLocal: string;
    isLigado: boolean;
}

// Interface do Cliente (Herda a base)
export interface lampadaInteligente extends DispositivoProps {
    corHexadecimal: string;
    nivelBrilho: number;
}

// Interface do Funcionário (Herda a base)
export interface TermometroProps extends DispositivoProps {
    temeperaturaAtual: number;
    temperaturaAlvo: number;
}