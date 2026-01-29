if (!sessionStorage.getItem("auth")) {
  location.href = "index.html";
}

function logout() {
  sessionStorage.clear();
  location.href = "index.html";
}

fetch("/api/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");
    container.innerHTML = "";

    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "project-card";

      div.innerHTML = `
        <img src="${p.image_url}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>

        <details>
          <summary>Proceso del proyecto</summary>
          <p>
            • Análisis del sitio<br>
            • Concepto arquitectónico<br>
            • Desarrollo del diseño<br>
            • Planos y construcción
          </p>
        </details>
      `;
      container.appendChild(div);
    });
  });
