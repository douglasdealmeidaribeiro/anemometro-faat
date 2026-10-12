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
 *      data: "2026-09-16",         // Data da medição no formato "AAAA-MM-DD"
 *      hora: "15:00",              // Horário no formato "HH:MM"
 *      temperatura: 24.5,          // Temperatura em °C (use ponto para decimal)
 *      umidade: 58.0,              // Umidade do ar em %
 *      chuva: 0.0,                 // Chuva em mm (do pluviômetro PET)
 *      vento: 8.5,                 // Vento em km/h (calculado pelo anemômetro)
 *      direcao: "SE"               // Direção da bússola: N, NE, L, SE, S, SO, O ou NO
 *    },
 * 
 * ATENÇÃO:
 * - Para números com vírgula, use sempre o PONTO (.) no código (exemplo: 23.5).
 * - A direção deve ser uma das 8 siglas em maiúsculo: "N", "NE", "L", "SE", "S", "SO", "O", "NO".
 * ==============================================================================
 */

// Lista de medições meteorológicas realizadas no período
const medicoes = [
  // EXEMPLO – substitua pelos dados reais
  {
    data: "2026-09-11",
    hora: "09:00",
    temperatura: 19.4,
    umidade: 72.0,
    chuva: 0.0,
    vento: 6.2,
    direcao: "SE"
  },
  // EXEMPLO – substitua pelos dados reais
  {
    data: "2026-09-15",
    hora: "14:30",
    temperatura: 27.8,
    umidade: 48.5,
    chuva: 0.0,
    vento: 12.4,
    direcao: "NE"
  },
  // EXEMPLO – substitua pelos dados reais
  {
    data: "2026-09-20",
    hora: "16:00",
    temperatura: 22.1,
    umidade: 85.0,
    chuva: 14.5,
    vento: 18.7,
    direcao: "S"
  },
  // EXEMPLO – substitua pelos dados reais
  {
    data: "2026-09-24",
    hora: "10:15",
    temperatura: 25.3,
    umidade: 55.0,
    chuva: 2.0,
    vento: 9.8,
    direcao: "L"
  },
  // EXEMPLO – substitua pelos dados reais
  {
    data: "2026-09-30",
    hora: "15:45",
    temperatura: 28.6,
    umidade: 42.0,
    chuva: 0.0,
    vento: 15.1,
    direcao: "NE"
  }
];
