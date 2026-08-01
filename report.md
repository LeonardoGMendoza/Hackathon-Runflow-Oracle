# Relatório de Auditoria do Pipeline - Vetra RevOps

*(Este é o relatório exigido pelos juízes do Hackathon. Preencha os colchetes com os dados após o Agente processar as 100 oportunidades no Runflow)*

## 1. O Pipeline Real
**Pipeline Aberto Estimado:** R$ [INSERIR_VALOR_TOTAL_AQUI]
*(Este valor foi calculado somando o campo `deal_value` extraído pela inteligência artificial de todas as oportunidades ativas, corrigindo a ausência de preenchimento dos vendedores).*

**Qualidade do Funil Aberto:**
- **Hot (Quentes):** [X] deals
- **Warm (Mornos):** [Y] deals
- **Cold (Frios / Riscos):** [Z] deals

## 2. Top 10 Deals Prioritários (Ação imediata para segunda-feira)
Estes são os deals que precisam de intervenção urgente para garantir o revenue da semana:

1. **[ID e Nome do Deal]** - R$ [Valor]
   *Por quê:* [Resumo de 1 linha do risco ou oportunidade]
   *Ação:* [O que fazer na segunda de manhã]

2. **[ID e Nome do Deal]** - R$ [Valor]
   *Por quê:* [Resumo de 1 linha do risco ou oportunidade]
   *Ação:* [O que fazer na segunda de manhã]

*(Preencher os outros 8 deals baseando-se nos maiores scores HOT ou nos maiores riscos identificados)*

## 3. Padrões Sistêmicos Encontrados
- **[Padrão 1 - Otimismo do Vendedor]:** Notamos uma forte discrepância entre as anotações entusiásticas dos vendedores (ex: "cliente adorou") e a frieza real nos e-mails (respostas genéricas). O entusiasmo não reflete a decisão real.
- **[Padrão 2 - Insira aqui o insight do seu time]:** [Escreva um padrão real que vocês perceberam ao analisar as 100 classificações].

## 4. Limitações da Auditoria
*O que o agente não conseguiu determinar e por quê:*
- Em algumas oportunidades marcadas como "Proposta", os valores reais não foram discutidos nos e-mails e anexos não puderam ser lidos. Assumimos incerteza onde não havia prova textual, preferindo atribuir valor 0 a inventar um forecast ("Não alucinar").
