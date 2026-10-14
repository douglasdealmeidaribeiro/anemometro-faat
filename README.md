# Estação Meteorológica Caseira Inteligente & Anemômetro Caseiro

Projeto de Ciências desenvolvido para a Feira de Ciências e Open Campus do **Colégio FAAT** (Atibaia, SP).

- **Projeto:** Estação Meteorológica Caseira Inteligente
- **Aluna:** Daniela Patrício Ribeiro – 6º Ano C
- **Orientador:** Prof. Marcelo de Castro
- **Escola:** Colégio FAAT – Atibaia, São Paulo
- **Período das medições:** 8 a 13 de outubro de 2026
- **Apresentação:** Open Campus – 17 de outubro de 2026

---

## 🌐 Páginas Publicadas no GitHub Pages

- **Painel de Resultados da Estação:**  
  [https://douglasdealmeidaribeiro.github.io/anemometro-faat/resultados.html](https://douglasdealmeidaribeiro.github.io/anemometro-faat/resultados.html)

- **Calculadora do Anemômetro Caseiro:**  
  [https://douglasdealmeidaribeiro.github.io/anemometro-faat/index.html](https://douglasdealmeidaribeiro.github.io/anemometro-faat/index.html)

---

## 📁 Estrutura de Arquivos

- `resultados.html`: Página de exibição dos resultados da estação meteorológica, com cartões de resumo calculados automaticamente, gráficos interativos com Chart.js e tabela completa de dados.
- `dados.js`: Arquivo separado com a lista `medicoes` em JavaScript puro, permitindo atualizar ou inserir novas medições sem alterar o layout da página.
- `index.html`: Aplicativo web responsivo para contagem e cálculo da velocidade do vento em 10 segundos, com cronômetro visual/sonoro e classificação na Escala de Beaufort.
- `logo-faat.png`: Logotipo do Colégio FAAT (com fallback transparente caso não esteja presente).

---

## ⚙️ Como Atualizar as Medições

Abra o arquivo `dados.js` e adicione uma nova entrada seguindo o modelo:

```javascript
{
  data: "2026-10-08",         // Data no formato AAAA-MM-DD
  hora: "14:30",              // Horário no formato HH:MM
  temperatura: 27.0,          // Temperatura em °C
  umidade: null,              // Umidade do ar em %
  chuva: 0.0,                 // Precipitação em mm (pluviômetro PET)
  vento: 1.19,                // Velocidade em km/h (anemômetro)
  direcao: "N"                // Bússola: N, NE, L, SE, S, SO, O ou NO
},
```
