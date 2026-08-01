# Roteiro do Pitch: Grupo 10 (5 Minutos)

**Tempo:** 5 Minutos cravados.
**Foco:** Garantir os 20 pontos de Validação e os 15 pontos de Caixa de Vidro.

---

## Minuto 0:00 - 1:00 (Abertura e Filosofia)
**Orador 1:**
"Bom dia! Somos o Grupo 10. Quando lemos os critérios desse desafio, percebemos que o maior risco na produção não é um agente que não sabe responder, mas um agente que **inventa** respostas. 
Por isso, construímos nosso agente na Runflow com uma filosofia 100% conservadora e rastreável. Nós forçamos o LLM a cuspir um JSON estrito, onde **toda** decisão precisa ser ancorada em uma citação literal do texto. Se a evidência não existe no texto, o agente é instruído a assumir que o dado não existe."

## Minuto 1:00 - 3:00 (Demo ao Vivo - Os 20 Pontos)
**Orador 2 (O Operador da Runflow):**
"Menos conversa e mais ação. Vamos rodar agora o conjunto de validação surpresa que a banca enviou."
*(Aperta o play na Runflow)*
"Enquanto ele processa esses leads inéditos, reparem que optamos por um modelo equilibrado na OCI para garantir que o custo por token e o tempo de resposta fiquem lá embaixo, maximizando nossos pontos de Eficiência."
*(Mostra a tela processando e terminando sem intervenção manual)*
"Pronto, rodou sem erros e sem ajustes manuais."

## Minuto 3:00 - 4:15 (Caixa de Vidro - Os 15 Pontos)
**Orador 1 ou 3:**
"Agora, vamos abrir a nossa 'Caixa de Vidro' para responder às perguntas fundamentais da banca.

*(Pergunta 1 da Banca: Mostre por que o agente classificou o lead X como quente?)*
"Nós não aceitamos que o agente apenas diga 'é quente'. Olhem o nosso JSON de saída para este lead. O agente apontou 'Temperatura: Quente' e o mais importante: ele preencheu o array `sinais_criticos_detectados`. Para justificar o budget, ele extraiu exatamente o trecho: *'[Citar a frase exata do JSON]'*. O caminho da decisão é 100% auditável do output até o log da conversa."

*(Pergunta 2 da Banca: O que o agente fez quando encontrou dado faltando ou contraditório?)*
"Nós prevemos isso. Criamos no JSON o campo obrigatório `tratamento_dados_faltantes`. Veja esse caso do Lead Y [mostrar o morno ou o frio]. O texto parecia empolgado, mas não falava de dinheiro. O agente registrou explicitamente no campo de tratamento: *'Não identifiquei budget explícito e não encontrei o tomador de decisão. Portanto, adotei postura conservadora rebaixando a temperatura para Morno.'* Nada de alucinação, apenas regras de negócios seguidas à risca."

## Minuto 4:15 - 5:00 (Fechamento)
**Orador 4:**
"Em resumo: entregamos um agente que não alucina, que prova o que diz citando o texto original, que lida com a ambiguidade reportando a falta de dados e que rodou de forma autônoma e eficiente na OCI e na Runflow. O Grupo 10 está pronto para botar isso em produção na segunda-feira. Muito obrigado!"

---
**Dica de Ouro para a Banca:** Falem devagar, apontem para a tela mostrando os campos do JSON e treinem essa passagem de bastão entre vocês!
