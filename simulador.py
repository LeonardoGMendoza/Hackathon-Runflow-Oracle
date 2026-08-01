import os
import json

try:
    from groq import Groq
except ImportError:
    print("A biblioteca da Groq não está instalada. Execute no terminal: pip install groq")
    exit()

def run_simulation():
    print("=== Simulador do Agente com GROQ (Hackathon) ===\n")
    
    with open("prompts/system_prompt.txt", "r", encoding="utf-8") as f:
        system_prompt = f.read()
        
    with open("schema/output_schema.json", "r", encoding="utf-8") as f:
        schema_json = f.read()
        
    full_system_prompt = f"{system_prompt}\n\nVocê deve retornar estritamente um objeto JSON puro, sem marcações markdown, seguindo esta estrutura:\n{schema_json}"

    # Pegando a chave com segurança via Variável de Ambiente (ou pedindo input se o terminal suportar)
    api_key = os.environ.get("GROQ_API_KEY", "")
    
    if not api_key:
        print("⚠️ Atenção: A chave da API não foi encontrada. No GitHub, não coloque a chave diretamente no código por segurança!")
        return

    client = Groq(api_key=api_key)

    lead_texto = "Bom dia, falo em nome da TechSolutions. Nosso contrato com o fornecedor atual encerra em 30 dias e estamos buscando uma alternativa urgente para nossa equipe de 50 vendedores. Já reservei um budget de R$ 10k/mês para essa migração. Conseguimos marcar um papo rápido amanhã com o nosso diretor de TI para ele dar o aval técnico?"
    
    print("\n--- Testando o Caso 2 (Lead Quente Verdadeiro) ---")
    print(f"Texto: '{lead_texto}'\n")
    print("[ Processando com a Inteligência Artificial da Groq... aguarde um instante ]\n")
    
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": full_system_prompt},
                {"role": "user", "content": f"Analise os seguintes dados do lead e gere a saída estruturada em JSON:\n\n{lead_texto}"}
            ],
            model="llama-3.3-70b-versatile",
            response_format={"type": "json_object"}
        )
        
        resultado_json = json.loads(response.choices[0].message.content)
        print("=== RESULTADO DA CLASSIFICAÇÃO ===")
        print(json.dumps(resultado_json, indent=2, ensure_ascii=False))
        
    except Exception as e:
        print(f"Erro ao processar: {e}")

if __name__ == "__main__":
    run_simulation()
