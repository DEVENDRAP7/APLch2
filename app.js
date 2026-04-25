const TOPICS = {
  physics: [
    { name: "Newton's Laws of Motion", url: "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" },
    { name: "Force and Pressure", url: "https://en.wikipedia.org/wiki/Pressure" },
    { name: "Work, Energy & Power", url: "https://en.wikipedia.org/wiki/Work_(physics)" },
    { name: "Light", url: "https://en.wikipedia.org/wiki/Light" },
    { name: "Sound", url: "https://en.wikipedia.org/wiki/Sound" },
    { name: "Electricity", url: "https://en.wikipedia.org/wiki/Electricity" },
    { name: "Magnetism", url: "https://en.wikipedia.org/wiki/Magnetism" },
    { name: "Gravitation", url: "https://en.wikipedia.org/wiki/Gravity" },
    { name: "Waves", url: "https://en.wikipedia.org/wiki/Wave" },
  ],
  chemistry: [
    { name: "Atoms and Molecules", url: "https://en.wikipedia.org/wiki/Atom" },
    { name: "Periodic Table", url: "https://en.wikipedia.org/wiki/Periodic_table" },
    { name: "Chemical Reactions", url: "https://en.wikipedia.org/wiki/Chemical_reaction" },
    { name: "Acids, Bases & Salts", url: "https://en.wikipedia.org/wiki/Acid%E2%80%93base_reaction" },
    { name: "Metals & Nonmetals", url: "https://en.wikipedia.org/wiki/Metal" },
    { name: "Carbon Compounds", url: "https://en.wikipedia.org/wiki/Organic_chemistry" },
    { name: "Chemical Bonding", url: "https://en.wikipedia.org/wiki/Chemical_bond" },
  ],
  biology: [
    { name: "Cell Structure", url: "https://en.wikipedia.org/wiki/Cell_(biology)" },
    { name: "Photosynthesis", url: "https://en.wikipedia.org/wiki/Photosynthesis" },
    { name: "Respiration", url: "https://en.wikipedia.org/wiki/Cellular_respiration" },
    { name: "Digestive System", url: "https://en.wikipedia.org/wiki/Human_digestive_system" },
    { name: "Circulatory System", url: "https://en.wikipedia.org/wiki/Circulatory_system" },
    { name: "Genetics", url: "https://en.wikipedia.org/wiki/Genetics" },
    { name: "Evolution", url: "https://en.wikipedia.org/wiki/Evolution" },
    { name: "Ecosystems", url: "https://en.wikipedia.org/wiki/Ecosystem" },
    { name: "Nervous System", url: "https://en.wikipedia.org/wiki/Nervous_system" },
  ],
};

function showTopics(subject) {
  const list = document.getElementById("topicsList");
  const hint = document.getElementById("topicsHint");
  const topics = TOPICS[subject] || [];

  hint.textContent = `${topics.length} topics in ${subject}`;
  list.innerHTML = topics
    .map(
      (t) => `
      <a class="topic-item" href="${t.url}" target="_blank" rel="noopener noreferrer">
        <span>${t.name}</span>
        <span class="arrow">→</span>
      </a>`
    )
    .join("");

  document.getElementById("topics").scrollIntoView({ behavior: "smooth" });
}
