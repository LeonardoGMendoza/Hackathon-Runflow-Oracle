# Casos de Teste (Simulação de Leads)

Estes são exemplos que o grupo pode usar para validar se o agente e os prompts estão funcionando como o esperado antes da apresentação oficial.

---

## Caso 1: A Armadilha Clássica (Estudante/Curioso)
> **Texto de Entrada:**
> "Olá, vi a demonstração do produto de vocês e achei incrível! A interface é exatamente o que eu estava procurando para o meu projeto de TCC. Vocês teriam uma licença gratuita para estudantes ou um desconto generoso? Precisava implantar isso até semana que vem para a minha apresentação na faculdade."

**Como o nosso Agente deve responder (JSON):**
- **Temperatura:** `frio`
- **Armadilha Detectada:** Sim.
- **Evidência Exata:** `"projeto de TCC"` e `"licença gratuita para estudantes"`
- **Tratamento / Justificativa:** O lead demonstra urgência e entusiasmo, mas a falta de budget e perfil B2B não o qualifica.

---

## Caso 2: O Lead Quente Verdadeiro (Budget e Decisor)
> **Texto de Entrada:**
> "Bom dia, falo em nome da TechSolutions. Nosso contrato com o fornecedor atual encerra em 30 dias e estamos buscando uma alternativa urgente para nossa equipe de 50 vendedores. Já reservei um budget de R$ 10k/mês para essa migração. Conseguimos marcar um papo rápido amanhã com o nosso diretor de TI para ele dar o aval técnico?"

**Como o nosso Agente deve responder (JSON):**
- **Temperatura:** `quente`
- **Sinais Críticos:** 
  - Budget: `"budget de R$ 10k/mês"`
  - Urgência: `"encerra em 30 dias"`
  - Decisor: `"diretor de TI para ele dar o aval"`
- **Tratamento / Justificativa:** Todos os critérios de lead quente (interesse, urgência, poder de decisão e dinheiro) estão presentes de forma explícita.

---

## Caso 3: O Lead Morno (Dados Faltantes / Exploração)
> **Texto de Entrada:**
> "Oi, achei a ferramenta de vocês interessante no LinkedIn. Como funciona a precificação? A gente tem uma dor parecida aqui na empresa, mas ainda estamos só mapeando o mercado sem muita pressa."

**Como o nosso Agente deve responder (JSON):**
- **Temperatura:** `morno`
- **Sinais Críticos:** Interesse inicial (`"tem uma dor parecida aqui na empresa"`)
- **Tratamento de Dados Faltantes:** Faltam dados sobre budget e decisor. Além disso, a frase `"mapeando o mercado sem muita pressa"` elimina a urgência. Seguindo a regra de conservadorismo, a classificação correta é morno.
