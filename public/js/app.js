// Navegação simples entre seções: mostra a seção do endereço (#tarefas, #metas...)
const secoes = document.querySelectorAll(".secao");
const links = document.querySelectorAll("#menu a");

function mostrarSecao() {
  const alvo = location.hash.slice(1) || "painel";
  secoes.forEach((s) => { s.hidden = s.id !== alvo; });
  links.forEach((a) => a.classList.toggle("ativo", a.dataset.secao === alvo));
}

window.addEventListener("hashchange", mostrarSecao);
mostrarSecao();
