"use strict";

// Planejamento local: não envia dados e não simula um contato comercial.
const planningForm = document.getElementById("planning-form");
const planningResult = document.getElementById("planning-result");

if (planningForm && planningResult) {
  const guidance = {
    escolha: {
      title: "Prepare as informações do ambiente",
      items: [
        "Anote as medidas, a incidência de sol e os horários de uso do espaço.",
        "Considere quantas pessoas e equipamentos costumam estar no ambiente.",
        "Peça a um profissional o dimensionamento e confira as características dos modelos antes de comprar."
      ]
    },
    instalacao: {
      title: "Planeje antes de instalar",
      items: [
        "Separe o modelo do equipamento e as orientações de instalação do fabricante.",
        "Verifique as regras do imóvel ou condomínio antes de definir a posição das unidades.",
        "Solicite avaliação profissional da infraestrutura elétrica, da drenagem e do local de instalação."
      ]
    },
    manutencao: {
      title: "Organize o cuidado do equipamento",
      items: [
        "Identifique o modelo e consulte o manual para os cuidados de rotina.",
        "Registre quando foi realizada a última limpeza ou manutenção.",
        "Se houver ruídos, vazamentos ou mudança no desempenho, descreva os sinais para uma avaliação técnica."
      ]
    }
  };

  planningForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const goal = document.getElementById("objetivo").value;
    const environment = document.getElementById("ambiente").value;
    const selected = guidance[goal];
    if (!selected) return;

    const title = document.createElement("h4");
    title.textContent = selected.title;
    const list = document.createElement("ul");
    const items = [...selected.items];
    if (environment === "comercial") {
      items.push("Inclua os horários de funcionamento e a ocupação do espaço na conversa com o profissional.");
    }
    items.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.appendChild(item);
    });
    planningResult.replaceChildren(title, list);
    planningResult.hidden = false;
    planningResult.focus();
  });
}
