let getButtonTemplate = function(link) {
    
    let template = "";

    if (link.name == "soon") {
        template = 
        `
        <a class="project-link btn btn-primary btn-sm disabled" aria-disabled="true">
            <span>Coming soon</span>
        </a>
        `
    } else {
        template = 
        `
        <a class="project-link btn btn-outline-primary btn-sm" href="${link.url}" target="_blank">
            <span>${link.name}</span>
        </a>
        `
    }

    return template
}