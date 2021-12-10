let getCardTemplate = function (project) {
  let template = 
  `
  <div class="card h-100  ${project.done ? "done" : ""}">
    <img src="${project["imgUrl"]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div class="card--buttons">
        ${project.links ? generateButtons(project.links) : ""}
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">${project.technologies && project.technologies.length > 0 ? generatePills(project.technologies) : "general coding"}</small>
    </div>
  </div>
  `
  return template;
}