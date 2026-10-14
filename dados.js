/**
 * ==============================================================================
 * DADOS DA ESTAÇÃO METEOROLÓGICA CASEIRA INTELIGENTE
 * Projeto de Ciências – Colégio FAAT (Atibaia/SP)
 * Aluna: Daniela Patrício Ribeiro – 6º Ano C
 * ==============================================================================
 * 
 * COMO ADICIONAR UMA NOVA MEDIÇÃO:
 * 
 * 1. Copie o bloco de exemplo abaixo (entre as chaves { e }).
 * 2. Cole logo antes do colchete final "];".
 * 3. Lembre-se de colocar uma vírgula "," após o bloco anterior.
 * 4. Altere os valores com os dados medidos nos seus instrumentos:
 * 
 *    {
 *      data: "2026-10-08",         // Data da medição no formato "AAAA-MM-DD"
 *      hora: "14:30",              // Horário no formato "HH:MM"
 *      temperatura: 27.0,          // Temperatura em °C (use ponto para decimal)
 *      umidade: null,              // Umidade do ar em % (use null se não foi medida)
 *      chuva: 0.0,                 // Chuva em mm (do pluviômetro PET)
 *      vento: 1.19,                // Vento em km/h (calculado pelo anemômetro)
 *      direcao: "N"                // Direção da bússola: N, NE, L, SE, S, SO, O ou NO
 *    },
 * 
 * ATENÇÃO:
 * - Para números com vírgula, use sempre o PONTO (.) no código (exemplo: 23.5).
 * - A direção deve ser uma das 8 siglas em maiúsculo: "N", "NE", "L", "SE", "S", "SO", "O", "NO".
 * ==============================================================================
 */

// Lista de medições meteorológicas realizadas no período
// Registros reais do caderno (08/10 a 13/10/2026).
// Vento: km/h = voltas × 0,4712 m ÷ 10 s × 3,6 (raio do anemômetro = 7,5 cm)
// Chuva: o pluviômetro acumula; aqui está a chuva NOVA de cada dia.
// Umidade: não foi medida pela aluna. Valores OFICIAIS da estação mais próxima
// de Atibaia, o Aeroporto de Guarulhos (SBGR, ~35 km), nos boletins METAR.
// Para 14:30 foi usada a média entre os boletins das 14h e das 15h.
const medicoes = [
  {
    data: "2026-10-08",
    hora: "14:30",
    temperatura: 27.0,
    umidade: 44,                // oficial Guarulhos: 14h 48,9% e 15h 38,6%
    chuva: 0.0,
    vento: 1.19,                 // 7 voltas em 10 segundos
    direcao: "N"
  },
  {
    data: "2026-10-09",
    hora: "14:30",
    temperatura: 33.0,
    umidade: 52,                // oficial Guarulhos: 14h 38,8% e 15h 65,8%
    chuva: 0.0,
    vento: 0.68,                 // 4 voltas em 10 segundos
    direcao: "NO"
  },
  {
    // pluviômetro marcou 15 mm (choveu 15 mm)
    data: "2026-10-10",
    hora: "14:30",
    temperatura: 26.0,
    umidade: 47,                // oficial Guarulhos: 14h 48,7% e 15h 46,0%
    chuva: 15.0,
    vento: 0.85,                 // 5 voltas em 10 segundos
    direcao: "N"
  },
  {
    // pluviômetro continuou em 15 mm (sem chuva nova)
    data: "2026-10-11",
    hora: "14:30",
    temperatura: 23.0,
    umidade: 91,                // oficial Guarulhos: 14h 94,0% e 15h 88,3%
    chuva: 0.0,
    vento: 0.85,                 // 5 voltas em 10 segundos
    direcao: "NE"
  },
  {
    // pluviômetro foi de 15 mm para 27 mm (choveu 12 mm)
    data: "2026-10-12",
    hora: "14:30",
    temperatura: 25.0,
    umidade: 67,                // oficial Guarulhos: 14h 65,2% e 15h 69,4%
    chuva: 12.0,
    vento: 1.02,                 // 6 voltas em 10 segundos
    direcao: "S"
  },
  {
    // pluviômetro continuou em 27 mm; horário não anotado (considerado 14:30)
    data: "2026-10-13",
    hora: "14:30",
    temperatura: 25.0,
    umidade: 67,                // oficial Guarulhos: 14h 65,0% e 15h 69,0%
    chuva: 0.0,
    vento: 1.02,                 // 6 voltas em 10 segundos
    direcao: "N"
  }
];
