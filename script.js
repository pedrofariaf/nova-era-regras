// Nova Era Roleplay — Regras da Cidade Script Engine

const RULES_DATA = [
  // DIRETRISES GERAIS (RP 101)
  {
    id: "REG-01",
    category: "gerais",
    title: "RDM (Random Deathmatch)",
    severity: "Grave",
    severityType: "danger",
    description: "É estritamente proibido agredir, ferir ou matar outro jogador sem motivo aceitável dentro do Roleplay e sem uma prévia interação verbal (RP prévio).",
    allowed: "Iniciar diálogo prévio claro, com motivo plausível no contexto do teu personagem antes de efetuar disparos.",
    denied: "Chegar a disparar ou atropelar alguém na rua sem falar nada ou apenas por vingança rápida sem contexto.",
    detail: "O RDM destrói a imersão do Roleplay. Para que um confronto armado seja válido, é obrigatório existir verbalização clara (ex: rendição, cobrança de dívida grave de fação, tiroteio em andamento comunicado). Caso a vítima não reaja a uma ameaça direta, deves agir com calma.",
    punishment: "1ª Infração: Advertência 2 + Banimento de 3 Dias | Reincidência: Banimento Permanente."
  },
  {
    id: "REG-02",
    category: "gerais",
    title: "VDM (Vehicle Deathmatch)",
    severity: "Grave",
    severityType: "danger",
    description: "Utilizar qualquer veículo como arma para atropelar, empurrar, matar ou causar danos propositados a cidadãos ou viaturas sem motivo de RP extremo.",
    allowed: "Utilizar o veículo estritamente como meio de transporte ou para fuga em perseguições sem abalroamento propositado.",
    denied: "Jogar o carro contra um grupo de pessoas na calçada ou dar 'ram' repetido em viaturas da polícia sem motivo.",
    detail: "Bater o carro propositadamente a alta velocidade para derrubar jogadores e tirar vantagem numa ação é considerado VDM e PowerGaming simultaneamente.",
    punishment: "Banimento de 3 a 7 Dias."
  },
  {
    id: "REG-03",
    category: "gerais",
    title: "Fear RP / Amor à Vida",
    severity: "Gravíssima",
    severityType: "danger",
    description: "O teu personagem deve priorizar a sua própria vida acima de qualquer bem material, dinheiro ou orgulho. Se estiveres sob ameaça de arma de fogo rendido, deves obedecer.",
    allowed: "Entregar o veículo, dinheiro ou pertences quando estiveres sob mira de uma arma apontada a curta distância.",
    denied: "Puxar uma arma enquanto tens 2 assaltantes a apontar-te para a cabeça ou fugir a pé sob mira direta.",
    detail: "O teu personagem é um ser humano e tem medo de morrer. A menos que estejas dentro de um veículo blindado em movimento ou a uma distância segura com cobertura, a regra do Fear RP deve ser rigorosamente respeitada.",
    punishment: "Advertência 2 + Banimento de 5 Dias."
  },
  {
    id: "REG-04",
    category: "gerais",
    title: "PowerGaming (PG)",
    severity: "Média",
    severityType: "warning",
    description: "Realizar ações no jogo que seriam impossíveis no mundo real ou abusar de mecânicas do FiveM para obter vantagens injustas no RP.",
    allowed: "Chamar o resgate mecânico ou guincho se o teu carro capotar ou perder as 4 rodas.",
    denied: "Continuar a conduzir a 200 km/h num supercarro com os 4 pneus furados ou escalar montanhas íngremes de carro desportivo.",
    detail: "Inclui também comunicar pelo Discord/Teamspeak enquanto estás inconsciente ou 'morto' no chão, ou pular de pontes altas e continuar a correr sem interpretar o ferimento.",
    punishment: "Advertência 1 ou Banimento de 24h a 3 Dias."
  },
  {
    id: "REG-05",
    category: "gerais",
    title: "MetaGaming (MG)",
    severity: "Gravíssima",
    severityType: "danger",
    description: "Utilizar informações obtidas fora do jogo (Discord, Lives da Twitch/Kick, conversas em cal, chats) para beneficiar o teu personagem dentro da cidade.",
    allowed: "Descobrir locais de drogas, nomes de fações ou locais seguros através de investigações e conversas In-Game.",
    denied: "Ver a live de um streamer para saber a localização da Polícia ou do Esconderijo de uma Fação e ir lá com essa info.",
    detail: "Informações obtidas por fora do jogo não existem na mente do teu personagem. O uso de MetaGaming anula automaticamente qualquer ação que dele resulte.",
    punishment: "Banimento de 7 Dias a Ban Permanente."
  },
  {
    id: "REG-06",
    category: "gerais",
    title: "Combat Logging (CL)",
    severity: "Gravíssima",
    severityType: "danger",
    description: "Desconectar-se da cidade (Crash forçado, fechar o jogo, desligar a internet) durante uma ação em andamento, prisão, assalto ou abordagem policial.",
    allowed: "Caso o teu jogo vá abaixo (Crash genuíno), deves avisar IMEDIATAMENTE no Discord oficial no canal #suporte-crash e retornar ao local.",
    denied: "Fechar o Alt+F4 quando a Polícia te apanhar com drogas ou quando estiveres prestes a ser revistado.",
    detail: "A Staff verifica os logs de desconexão. Quem desliga o jogo durante uma ação e não regressa dentro do tempo limite será severamente punido.",
    punishment: "Banimento de 7 a 14 Dias."
  },
  {
    id: "REG-07",
    category: "gerais",
    title: "Out of Character (OOC) no Voice",
    severity: "Leve",
    severityType: "warning",
    description: "Falar sobre assuntos fora do jogo (vida real, comandos do FiveM, regras, discord, bugs) usando o chat de voz principal do teu personagem.",
    allowed: "Usar expressões de RP como 'Tenho dor de cabeça' (Lag) ou 'Vou ao mentalista' (Ausente/AFK) de forma imersiva.",
    denied: "Gritar no Voice 'Isso é VDM!', 'Vou chamar o Administrador' ou 'Abre um ticket no Discord'.",
    detail: "Mantenha a imersão 100% do tempo. Se presenciares uma quebra de regra, grava a ação com software de captura e abre um Ticket de Denúncia no Discord.",
    punishment: "Advertência 1."
  },

  // SAFE ZONES
  {
    id: "REG-08",
    category: "safezones",
    title: "Regras do Hospital Central",
    severity: "Grave",
    severityType: "danger",
    description: "O Hospital e as suas imediações são locais de cura neutros. É proibido qualquer tipo de ação criminosa, assalto, agressão ou sequestro nesta área.",
    allowed: "Buscar atendimento médico, interagir com paramédicos e aguardar tratamento com civismo.",
    denied: "Iniciar tiroteios, sequestrar cidadãos recém-tratados ou assaltar médicos e pacientes na porta do Hospital.",
    detail: "Qualquer jogador revivido pelos paramédicos não pode regressar à mesma ação de tiroteio onde foi ferido (Regra do Amnésia/PK).",
    punishment: "Advertência 2 + Banimento de 3 Dias."
  },
  {
    id: "REG-09",
    category: "safezones",
    title: "Regras da Praça Principal & Prefeitura",
    severity: "Média",
    severityType: "warning",
    description: "Zonas de grande fluxo social e civil. É proibida a circulação de armas à vista, assaltos ou perturbação grave da ordem pública.",
    allowed: "Socializar, vender artigos legais, realizar eventos culturais e interagir amigavelmente.",
    denied: "Sacar de armas, iniciar confrontos de fações ou roubar veículos estacionados na Praça Central.",
    detail: "Exceção: A Polícia pode efetuar detenções na Praça caso um suspeito em fuga lá se tente esconder (a Safezone não anula perseguição ativa).",
    punishment: "Advertência 1 ou Ban de 48 horas."
  },
  {
    id: "REG-10",
    category: "safezones",
    title: "Departamento de Polícia (HQ PM)",
    severity: "Gravíssima",
    severityType: "danger",
    description: "O Quartel-General da Polícia é uma zona altamente militarizada e protegida. Invadir ou iniciar tiroteios dentro da HQ é considerado Ação Suicida / PG.",
    allowed: "Comparecer ao balcão para pedir assistência jurídica, pagar fianças ou registar denúncias formais.",
    denied: "Tentar resgatar presos à força dentro das celas do departamento sem autorização de evento de resgate aprovado pela Staff.",
    detail: "Resgates de presos só podem ocorrer durante a transferência na viatura ou comboio prisional em estrada aberta, nunca dentro do departamento.",
    punishment: "Banimento de 7 a 15 Dias."
  },

  // AÇÕES ILÍCITAS & ASSALTOS
  {
    id: "REG-11",
    category: "ilicito",
    title: "Assalto a Caixa Registradora / Lojinha",
    severity: "Média",
    severityType: "warning",
    description: "Ação de pequeno porte destinada ao crime de rua.",
    allowed: "Máximo de 2 Assaltantes. Exige presença mínima de 2 Polícias em serviço na cidade.",
    denied: "Levar fuzis/armas pesadas para assaltar uma caixa registradora de bairro ou usar reféns fictícios.",
    detail: "Sem direito a negociação de resgate monetário. Foco em fuga rápida de veículos ou motas.",
    punishment: "Advertência 1."
  },
  {
    id: "REG-12",
    category: "ilicito",
    title: "Assalto à Joalharia & Bancos Pequenos",
    severity: "Grave",
    severityType: "danger",
    description: "Ação de médio porte com necessidade de planeamento prévio e negociação de reféns.",
    allowed: "Máximo de 4 Assaltantes vs 6 Polícias. Permitido até 2 Reféns reais com resgate máximo de €15.000 por refém.",
    denied: "Assaltar sem polícias suficientes em serviço ou matar os reféns mesmo quando a Polícia aceita as exigências.",
    detail: "O tempo de negociação deve ser respeitado por ambas as partes antes de qualquer disparar de armas de fogo.",
    punishment: "Advertência 2 + Banimento de 3 Dias."
  },
  {
    id: "REG-13",
    category: "ilicito",
    title: "Assalto ao Banco Central / Grande Roubo",
    severity: "Gravíssima",
    severityType: "danger",
    description: "Ação de grande porte reservada para Fações e Organizações criminosas registadas.",
    allowed: "Máximo de 8 Assaltantes vs Corpo Policial Completo. Exige mínimo de 8 Polícias On-line na cidade.",
    denied: "Entrar com membros sem fação registada ou ignorar o protocolo de negociação policial de alto risco.",
    detail: "Permitido até 4 Reféns reais (€25.000 max resgate cada). Ação com direito a perímetro policial e atiradores de elite.",
    punishment: "Banimento de 7 a 30 Dias para os infratores."
  },
  {
    id: "REG-14",
    category: "ilicito",
    title: "Regras de Sequestro a Cidadãos",
    severity: "Grave",
    severityType: "danger",
    description: "Sequestrar jogadores para extorsão, vingança ou uso como refém em ações criminosas.",
    allowed: "Interação verbal prévia motivada por rixa de fação, dívida ou necessidade de refém para assalto.",
    denied: "Sequestrar trabalhadores em serviço público (Motorista de Autocarro, Lixeiro, Entregador) ou iniciantes em área inicial.",
    detail: "O tempo máximo de cativeiro/sequestro de um jogador é de 45 minutos. É proibido obrigar a vítima a retirar dinheiro da sua conta bancária de caixas multibanco.",
    punishment: "Banimento de 5 Dias."
  },

  // CORPORAÇÕES & SERVIÇOS
  {
    id: "REG-15",
    category: "corporacoes",
    title: "Diretrizes da Polícia Militar / Civil",
    severity: "Grave",
    severityType: "danger",
    description: "Os agentes da autoridade devem prezar pela ordem, imparcialidade e cumprimento rigoroso do Código Penal da Nova Era.",
    allowed: "Usar força letal apenas quando houver ameaça eminente à vida do agente ou de terceiros sob disparos diretos.",
    denied: "Fazer PowerGaming de algemar pela frente em corrida, revistar sem voz prévia ou efetuar disparos sem aviso em roubos de veículos simples.",
    detail: "A Polícia não pode corromper totalmente sem autorização da Gestão de Fações (Polícia Corrupta exige aprovação prévia no Discord).",
    punishment: "Exoneração da corporação + Advertência 2."
  },
  {
    id: "REG-16",
    category: "corporacoes",
    title: "Diretrizes do Serviço de Emergência Médica (EMS)",
    severity: "Grave",
    severityType: "danger",
    description: "Os médicos e paramédicos são figuras totalmente neutras protegidas pela Convenção de Genebra no RP.",
    allowed: "Prestar socorro a qualquer cidadão ferido, independentemente de ser polícia ou criminoso.",
    denied: "Assaltar medicos de serviço, roubar ambulâncias ou recusar socorro por desavenças de RP pessoal.",
    detail: "É estritamente proibido revistar ou roubar itens dos EMS em serviço. Mexer no inventário dos paramédicos acarreta banimento imediato.",
    punishment: "Banimento de 7 a 15 Dias."
  },

  // DISCORD & COMUNIDADE
  {
    id: "REG-17",
    category: "discord",
    title: "Toxicidade & Respeito na Comunidade",
    severity: "Gravíssima",
    severityType: "danger",
    description: "Discriminação, racismo, homofobia, assédio, discurso de ódio ou insultos pessoais fora do personagem são estritamente intoleráveis.",
    allowed: "Rivalidade saudável e discussões puramente entre os personagens dentro do contexto do jogo (IC).",
    denied: "Ofender a família, religião ou integridade pessoal de qualquer jogador no Discord, Twitch ou Voice.",
    detail: "Temos tolerância zero para comportamento tóxico. A comunidade Nova Era visa criar um ambiente acolhedor e divertido para todos.",
    punishment: "Banimento Permanente Sem Direito a Apelo."
  },
  {
    id: "REG-18",
    category: "discord",
    title: "Uso de Cheats / Hacks / Mod Menus",
    severity: "Gravíssima",
    severityType: "danger",
    description: "Utilizar programas de terceiros, crosshairs externos, reshades com remoção de vegetação, aimbots ou exploits de dinheiro/duplicação.",
    allowed: "Utilizar modificações gráficas aprovadas (Mod de Som natural, gráficos de estradas) que não deem vantagem tática.",
    denied: "Usar programas de injeção, macros de tiro rápido ou abusar de bugs do mapa para atravessar paredes.",
    detail: "O nosso sistema anticheat deteta modificações indevidas automaticamente.",
    punishment: "Banimento Permanente da Conta e HWID (Hardware)."
  }
];

const PUNISHMENTS_DATA = [
  { infraction: "RDM (Random Deathmatch)", grade: "Grave", penalty: "Adv 2 + Ban 3 Dias", repeat: "Ban Permanente" },
  { infraction: "VDM (Vehicle Deathmatch)", grade: "Grave", penalty: "Ban 3 a 7 Dias", repeat: "Ban 15 Dias" },
  { infraction: "Fear RP (Amor à Vida)", grade: "Gravíssima", penalty: "Adv 2 + Ban 5 Dias", repeat: "Ban Permanente" },
  { infraction: "PowerGaming (PG)", grade: "Média", penalty: "Adv 1 + Ban 24h", repeat: "Ban 3 Dias" },
  { infraction: "MetaGaming (MG)", grade: "Gravíssima", penalty: "Ban 7 Dias", repeat: "Ban Permanente" },
  { infraction: "Combat Logging (CL)", grade: "Gravíssima", penalty: "Ban 7 a 14 Dias", repeat: "Ban Permanente" },
  { infraction: "Uso de OOC no Voice", grade: "Leve", penalty: "Advertência 1", repeat: "Adv 2 + Ban 24h" },
  { infraction: "Quebra de Safe Zone", grade: "Grave", penalty: "Adv 2 + Ban 3 Dias", repeat: "Ban 7 Dias" },
  { infraction: "Roubo a Medicos / EMS", grade: "Gravíssima", penalty: "Ban 7 Dias", repeat: "Ban Permanente" },
  { infraction: "Cheats / Hacks / Exploits", grade: "Extrema", penalty: "Ban Permanente HWID", repeat: "Sem Apelo" }
];

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initLiveStatsCounter();
  fetchLiveDiscordMembers();
  renderGoldenRules();
  renderRules("gerais");
  renderPunishmentsTable();
  setupSearchAndFilters();
  setupTabs();
  setupModal();
  setupWhitelistGenerator();
});

// Fetch Live Discord Member Count from Official Invite API
async function fetchLiveDiscordMembers() {
  const discordCountEl = document.getElementById("discord-member-count");
  if (!discordCountEl) return;

  try {
    const res = await fetch("https://discord.com/api/v10/invites/Yvf8HJG3Hs?with_counts=true");
    if (res.ok) {
      const data = await res.json();
      const count = data.approximate_member_count || data.member_count;
      if (count) {
        discordCountEl.textContent = count.toLocaleString("pt-PT") + "+";
        return;
      }
    }
  } catch (err) {
    console.log("Discord API live fetch fallback", err);
  }

  // Fallback se estiver offline ou sem CORS
  discordCountEl.textContent = "412+";
}

// Live Online Players Counter Simulation
function initLiveStatsCounter() {
  const counterEl = document.getElementById("player-count");
  if (!counterEl) return;
  
  let baseCount = 842;
  setInterval(() => {
    // Slight random natural fluctuation
    const change = Math.floor(Math.random() * 5) - 2;
    baseCount = Math.max(810, Math.min(1012, baseCount + change));
    counterEl.textContent = baseCount;
  }, 4000);
}

// Render 10 Golden Rules Section
function renderGoldenRules() {
  const container = document.getElementById("golden-rules-container");
  if (!container) return;

  const goldenList = [
    { num: "01", title: "Respeita o Amor à Vida", desc: "Prioriza a vida do teu personagem sob qualquer ameaça armada." },
    { num: "02", title: "Zero RDM & VDM", desc: "Nunca uses armas ou carros para ferir cidadãos sem prévia verbalização em RP." },
    { num: "03", title: "Não Quebres o RP (OOC)", desc: "Mantém-te dentro do personagem. Assuntos de regras resolvem-se no Discord." },
    { num: "04", title: "Zero MetaGaming", desc: "Informação fora do jogo (Lives/Discord) é estritamente proibida no teu RP." },
    { num: "05", title: "Respeita as Safe Zones", desc: "Hospitais, Praça e HQ da Polícia são locais de paz e ordem." },
    { num: "06", title: "Não Faças Combat Log", desc: "Nunca feches o jogo durante abordagens, assaltos ou prisões." },
    { num: "07", title: "Cumpre os Limites de Ações", desc: "Respeita a contagem de assaltantes vs polícias e os limites de reféns." },
    { num: "08", title: "Valoriza os Médicos", desc: "É proibido assaltar ou impedir a atuação dos paramédicos (EMS)." },
    { num: "09", title: "Fair Play Sempre", desc: "O objetivo de todos é criar histórias envolventes, não apenas 'ganhar' ações." },
    { num: "10", title: "Respeito & Tolerância Zero", desc: "Comportamento tóxico ou preconceito resulta em ban permanente iminente." }
  ];

  container.innerHTML = goldenList.map(item => `
    <div class="golden-card">
      <span class="golden-num">${item.num}</span>
      <h3><i class="fas fa-shield-alt" style="color: var(--primary);"></i> ${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

// Render Main Rules Cards
function renderRules(categoryFilter = "all", searchQuery = "") {
  const container = document.getElementById("rules-grid");
  if (!container) return;

  let filtered = RULES_DATA;

  if (categoryFilter !== "all") {
    filtered = filtered.filter(r => r.category === categoryFilter);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 14px; border: 1px solid var(--border-color);">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--primary); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #FFF;">Nenhuma regra encontrada</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">Tenta pesquisar por outros termos como "VDM", "Fear RP", "Assalto" ou "SafeZone".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(rule => `
    <div class="rule-card" data-id="${rule.id}">
      <div>
        <div class="rule-header">
          <span class="rule-code">${rule.id}</span>
          <span class="badge badge-${rule.severityType}">${rule.severity}</span>
        </div>
        <h3 class="rule-title">${rule.title}</h3>
        <p class="rule-desc">${rule.description}</p>
        
        <div class="rule-boxes">
          <div class="rule-box rule-box-allow">
            <strong><i class="fas fa-check-circle"></i> O que PODE:</strong>
            ${rule.allowed}
          </div>
          <div class="rule-box rule-box-deny">
            <strong><i class="fas fa-times-circle"></i> INFRAÇÃO:</strong>
            ${rule.denied}
          </div>
        </div>
      </div>

      <div class="rule-footer">
        <span style="font-size: 0.8rem; color: var(--text-dim);"><i class="fas fa-balance-scale"></i> ${rule.punishment.split('|')[0]}</span>
        <button class="rule-more-btn" onclick="openRuleModal('${rule.id}')">
          Detalhes <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join("");
}

// Render Penalty Table
function renderPunishmentsTable() {
  const tbody = document.getElementById("punishments-tbody");
  if (!tbody) return;

  tbody.innerHTML = PUNISHMENTS_DATA.map(p => `
    <tr>
      <td style="font-weight: 600; color: #FFF;"><i class="fas fa-gavel" style="color: var(--primary); margin-right: 8px;"></i> ${p.infraction}</td>
      <td><span class="badge ${p.grade === 'Gravíssima' || p.grade === 'Extrema' ? 'badge-danger' : p.grade === 'Grave' ? 'badge-warning' : 'badge-primary'}">${p.grade}</span></td>
      <td style="color: #FCA5A5; font-weight: 500;">${p.penalty}</td>
      <td style="color: #EF4444; font-weight: 700;">${p.repeat}</td>
    </tr>
  `).join("");
}

// Setup Search & Quick Tag Pills
function setupSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  const tagPills = document.querySelectorAll(".tag-pill");

  if (!searchInput) return;

  let activeCategory = "all";

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    if (clearBtn) clearBtn.style.display = query ? "block" : "none";
    renderRules(activeCategory, query);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      renderRules(activeCategory, "");
    });
  }

  tagPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const tag = pill.getAttribute("data-tag");
      tagPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      searchInput.value = tag;
      if (clearBtn) clearBtn.style.display = "block";
      renderRules("all", tag);
    });
  });
}

// Setup Category Tabs
function setupTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const category = btn.getAttribute("data-category");
      const searchInput = document.getElementById("search-input");
      const query = searchInput ? searchInput.value : "";
      
      renderRules(category, query);
    });
  });
}

// Modal Functions
function openRuleModal(ruleId) {
  const rule = RULES_DATA.find(r => r.id === ruleId);
  if (!rule) return;

  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  if (!overlay || !modalTitle || !modalBody) return;

  modalTitle.textContent = `${rule.id} — ${rule.title}`;
  modalBody.innerHTML = `
    <div style="display: flex; gap: 10px; margin-bottom: 16px;">
      <span class="badge badge-primary">Categoria: ${rule.category.toUpperCase()}</span>
      <span class="badge badge-${rule.severityType}">Gravidade: ${rule.severity}</span>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 20px;">
      ${rule.description}
    </p>

    <div style="background: rgba(255, 11, 58, 0.08); border-left: 4px solid var(--primary); padding: 16px; border-radius: 6px; margin-bottom: 20px;">
      <h4 style="margin: 0 0 6px 0; color: #FFF; font-family: var(--font-heading); font-size: 1.1rem;">
        <i class="fas fa-lightbulb" style="color: var(--primary);"></i> Explicação Detalhada do RP
      </h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">${rule.detail}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 16px; border-radius: 10px;">
        <h4 style="color: var(--success); margin-top: 0;"><i class="fas fa-check-circle"></i> Conduta Permitida</h4>
        <p style="color: #A7F3D0; font-size: 0.9rem;">${rule.allowed}</p>
      </div>

      <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 16px; border-radius: 10px;">
        <h4 style="color: var(--danger); margin-top: 0;"><i class="fas fa-exclamation-triangle"></i> Conduta Proibida</h4>
        <p style="color: #FCA5A5; font-size: 0.9rem;">${rule.denied}</p>
      </div>
    </div>

    <div style="background: rgba(7, 8, 12, 0.8); border: 1px solid var(--border-color); padding: 16px; border-radius: 10px;">
      <h4 style="color: #FFF; margin-top: 0; font-family: var(--font-heading);"><i class="fas fa-gavel" style="color: var(--primary);"></i> Punição Aplicável</h4>
      <p style="color: #FCA5A5; font-weight: 600; font-size: 0.95rem; margin: 0;">${rule.punishment}</p>
    </div>
  `;

  overlay.classList.add("active");
}

function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  }
}

// Whitelist Agreement Certificate Generator
function setupWhitelistGenerator() {
  const btn = document.getElementById("accept-rules-btn");
  const discordInput = document.getElementById("whitelist-discord");
  const charInput = document.getElementById("whitelist-char");
  const resultBox = document.getElementById("whitelist-result");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const discord = discordInput ? discordInput.value.trim() : "";
    const charName = charInput ? charInput.value.trim() : "";

    if (!discord || !charName) {
      showToast("Preenche o teu Discord e Nome do Personagem antes de confirmar!", "danger");
      return;
    }

    const certCode = "NE-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    const dateStr = new Date().toLocaleDateString("pt-PT") + " às " + new Date().toLocaleTimeString("pt-PT");

    resultBox.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--success); border-radius: 12px; padding: 20px; margin-top: 20px; text-align: center;">
        <i class="fas fa-certificate" style="font-size: 2.5rem; color: var(--success); margin-bottom: 10px;"></i>
        <h3 style="color: #FFF; font-family: var(--font-heading); font-size: 1.6rem; text-transform: uppercase;">Passaporte de Leitura Confirmado</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Cidadão: <strong style="color: #FFF;">${charName}</strong> | Discord: <strong style="color: var(--primary);">${discord}</strong></p>
        <div style="background: #000; border: 1px dashed var(--success); padding: 10px 18px; border-radius: 8px; display: inline-block; margin: 12px 0; font-family: monospace; font-size: 1.2rem; color: var(--success);">
          CÓDIGO: ${certCode}
        </div>
        <p style="font-size: 0.8rem; color: var(--text-dim);">Registado em ${dateStr}. Apresenta este código no teu teste de Whitelist!</p>
      </div>
    `;

    showToast("Leitura de regras confirmada com sucesso!", "success");
  });
}

// Copy Utility Toast Notification
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copiado com sucesso!`, "success");
  }).catch(() => {
    showToast(`Erro ao copiar ${label}.`, "danger");
  });
}

function showToast(message, type = "primary") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast`;
  toast.style.borderColor = type === "success" ? "var(--success)" : type === "danger" ? "var(--danger)" : "var(--primary)";
  toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'danger' ? 'fa-exclamation-circle' : 'fa-info-circle'}" style="color: ${type === 'success' ? 'var(--success)' : type === 'danger' ? 'var(--danger)' : 'var(--primary)'};"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
