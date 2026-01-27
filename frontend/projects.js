fetch("http://localhost:3000/api/projects")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects-list");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.onclick = () => {
        window.location.href = `project.html?id=${project._id}`;
      };

      card.innerHTML = `
        <img src="${project.image}">
        <h3>${project.title}</h3>
        <p>${project.category}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById("projects-list").innerHTML =
      "<p>Error al cargar proyectos</p>";
  });
