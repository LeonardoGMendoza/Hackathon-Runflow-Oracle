// Lógica de UI (Abrir Paineis)
const panelLLM = document.getElementById('panel-llm');
const panelTrigger = document.getElementById('panel-trigger');
const allNodes = document.querySelectorAll('.node');

function closePanels() {
    panelLLM.classList.remove('open');
    panelTrigger.classList.remove('open');
    allNodes.forEach(n => n.classList.remove('active-node'));
}

document.getElementById('main-llm-node').addEventListener('click', (e) => {
    if (e.currentTarget.dataset.wasDragged === "true") return;
    closePanels();
    e.currentTarget.classList.add('active-node');
    panelLLM.classList.add('open');
});

document.getElementById('node-trigger').addEventListener('click', (e) => {
    if (e.currentTarget.dataset.wasDragged === "true") return;
    closePanels();
    e.currentTarget.classList.add('active-node');
    panelTrigger.classList.add('open');
});

// Arrasto
allNodes.forEach(node => {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    node.addEventListener('mousedown', (e) => {
        isDragging = true;
        node.dataset.wasDragged = "false";
        startX = e.clientX; startY = e.clientY;
        const style = window.getComputedStyle(node);
        initialLeft = parseFloat(style.left); initialTop = parseFloat(style.top);
        node.style.zIndex = 10;
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX; const dy = e.clientY - startY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) node.dataset.wasDragged = "true";
        node.style.left = `${initialLeft + dx}px`; node.style.top = `${initialTop + dy}px`;
    });
    document.addEventListener('mouseup', () => {
        if (isDragging) { isDragging = false; node.style.zIndex = 1; setTimeout(() => { node.dataset.wasDragged = "false"; }, 100); }
    });
});

// ==========================================
// LÓGICA DE INTEGRAÇÃO COM API (A MÁGICA)
// ==========================================
document.getElementById('btn-run').addEventListener('click', async () => {
    const apiKey = document.getElementById('api-key-input').value.trim();
    if (!apiKey) {
        alert("Por favor, cole sua GROQ API KEY no topo da tela antes de rodar.");
        return;
    }

    const systemPrompt = document.getElementById('llm-system-prompt').value;
    const jsonSchema = document.getElementById('llm-json-schema').value;
    const leadText = document.getElementById('trigger-lead-text').value;

    const fullSystemPrompt = `${systemPrompt}\n\nVocê deve retornar estritamente um objeto JSON puro, sem marcações markdown, seguindo esta estrutura:\n${jsonSchema}`;

    // Mostra loading
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('main-llm-node').classList.add('blinking');

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: fullSystemPrompt },
                    { role: "user", content: `Analise os seguintes dados do lead e gere a saída estruturada em JSON:\n\n${leadText}` }
                ],
                response_format: { type: "json_object" }
            })
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        const jsonResult = JSON.parse(data.choices[0].message.content);
        
        // Formata na tela
        document.getElementById('result-output').textContent = JSON.stringify(jsonResult, null, 2);
        
        // Sucesso: Pisca o Node de CRM
        document.getElementById('node-action').classList.add('blinking');
        setTimeout(() => { document.getElementById('node-action').classList.remove('blinking'); }, 2000);
        
        // Mostra o Modal com Resultado
        document.getElementById('result-modal').style.display = 'flex';

    } catch (error) {
        alert(`Erro ao processar na API da Groq:\n${error.message}`);
    } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-llm-node').classList.remove('blinking');
    }
});
