const form = document.getElementById('formulario');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
  const data = {
  nome: document.getElementById('nome').value,
  id: document.getElementById('id').value, // <-- Adicione esta linha
  idade: document.getElementById('idade').value,
  aceita: document.getElementById('aceita').value,
  motivo: document.getElementById('motivo').value,
  troca: document.getElementById('troca').value,
};


  const embed = {
    embeds: [
      {
        title: "📩 Nova Aplicação Recebida",
        color: 0x00c6ff,
        fields: [
          { name: "👤 Nome", value: data.nome || "Não informado", inline: true },
          { name: "🎂 Idade", value: data.idade || "Não informado", inline: true },
          { name: "🆔 Id Discord", value: data.id || "Não informado", inline: true },
          { name: "✅ Por que devemos te aceitar?", value: data.aceita || "Não informado" },
          { name: "🎯 Qual motivo se concorreu?", value: data.motivo || "Não informado" },
          { name: "🎁 O que você deve receber em troca?", value: data.troca || "Não informado" },
        ],
        footer: {
          text: "Formulário enviado via site",
        },
        timestamp: new Date().toISOString(),
      }
    ]
  };

  try {
    const response = await fetch("https://discord.com/api/webhooks/1360081283216052235/Vmeuocq7NpSjvQHqU0nBOxL-EphSIBUppTmEhqtXLGIEH7i98S8jjlb6MKqatKppYR0o", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embed)
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
