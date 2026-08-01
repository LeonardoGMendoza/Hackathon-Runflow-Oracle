# Hackathon Runflow + Oracle: Grupo 10

Este repositório contém a inteligência e arquitetura do nosso agente para classificação de leads, focado em maximizar a pontuação nos critérios do Hackathon (Acerto, Validação e Caixa de Vidro).

## Estrutura do Projeto
- `/prompts`: Contém os prompts (System e User) que devem ser copiados para a Runflow.
- `/schema`: Contém a estrutura do JSON exigido para garantir a pontuação de "Caixa de Vidro".
- `test_cases.md`: Cenários simulados para validarmos a IA antes do pitch.
- `pitch_script.md`: O roteiro de 5 minutos da nossa apresentação.

## Como usar na Runflow
1. Crie o nó de IA (LLM).
2. Cole o conteúdo de `prompts/system_prompt.txt` nas Instruções de Sistema.
3. Defina o formato de saída estruturada usando o `schema/output_schema.json`.
4. Cole o conteúdo de `prompts/user_prompt.txt` na Entrada do Usuário, garantindo que a variável `{{DADOS_DO_LEAD}}` seja preenchida pela entrada do seu fluxo.
