import { Lampada } from "./models/Lampada.js";
import { Termometro } from "./models/Termometro.js";

// --- Teste da Lâmpada Inteligente ---
const lampada = new Lampada({
    idRede: "LAMP-01",
    nomeLocal: "Sala de Estar",
    isLigado: false,
    corHexadecimal: "#FFA500",
    nivelBrilho: 75
});

console.log("=== Lâmpada Inteligente ===");
console.log(`ID da Rede: ${lampada.getIdRede()}`);
console.log(`Localização: ${lampada.getNomeLocal()}`);
console.log(`Está ligada? ${lampada.getIsLigado()}`);

lampada.alternarEnergia();
console.log(`Estado após alternar energia: ${lampada.getIsLigado()}`);

console.log(`Cor Hexadecimal: ${lampada.getCorHexadecimal()}`);
console.log(`Brilho Atual: ${lampada.getNivelBrilho()}%`);

lampada.setBrilho(90);
console.log(`Novo Brilho: ${lampada.getNivelBrilho()}%`);


// --- Teste do Termostato ---
const termostato = new Termostato({
    idRede: "TERM-01",
    nomeLocal: "Quarto Principal",
    isLigado: true,
    temperaturaAtual: 21.5,
    temperaturaAlvo: 24.0
});

console.log("\n=== Termostato ===");
console.log(`ID da Rede: ${termostato.getIdRede()}`);
console.log(`Localização: ${termostato.getNomeLocal()}`);
console.log(`Está ligado? ${termostato.getIsLigado()}`);
console.log(`Temperatura Atual: ${termostato.getTemperaturaAtual()}°C`);
console.log(`Temperatura Alvo: ${termostato.getTemperaturaAlvo()}°C`);

termostato.setTemperaturaAlvo(22.0);
console.log(`Nova Temperatura Alvo: ${termostato.getTemperaturaAlvo()}°C`);