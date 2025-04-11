
const form = document.getElementById('formulario');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById('nome').value,
    idade: document.getElementById('idade').value,
    aceita: document.getElementById('aceita').value,
    motivo: document.getElementById('motivo').value,
    troca: document.getElementById('troca').value,
  };

  try {
    const response = await fetch("https://discord.com/api/webhooks/1359738323496865793/cNo5Zv3yWijEwijClctOuj4LE1z4LroCgV2Gi_UHlm0gZrYKJ2H9xcleda9OVYU4vSUD", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: `**Nova aplicação recebida!**\n\n**Nome:** ${data.nome}\n**Idade:** ${data.idade}\n**Por que devemos aceitar:** ${data.aceita}\n**Motivo:** ${data.motivo}\n**Em troca:** ${data.troca}` })
    });

    if (response.ok) {
      document.querySelector('.formulario').style.display = 'none';
      document.querySelector('.success').style.display = 'block';
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch {
    alert("Erro de conexão com o servidor.");
  }
});
