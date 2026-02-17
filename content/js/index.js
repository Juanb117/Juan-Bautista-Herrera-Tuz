const modal = document.getElementById("modal");
const carouselInner = document.getElementById("carouselInner");
let estiloRemoved;
document.querySelectorAll(".Mas-informacion").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modalTitle = this.getAttribute("data-title");
    const modalProyecto = this.getAttribute("data-proyecto");
    const modalLogo = this.getAttribute("data-logo");
    const modalImgs = this.getAttribute("data-img");
    const modalMateria = this.getAttribute("data-materia");
    const modalAprendizaje = this.getAttribute("data-aprendizaje");
    const modalTecnologias = this.getAttribute("data-tecnologias");
    const modalParticipacion = this.getAttribute("data-partipacion");
    const modalRepositorio = this.getAttribute("data-repo");
    const estilo = this.getAttribute("data-estilos");
    if (estiloRemoved) {
      modal.classList.remove(estiloRemoved);
    }
    estiloRemoved = estilo;
    modal.classList.add(estilo);

    document.getElementById("modalTitle").textContent = modalTitle;
    document.getElementById("modalProyecto").textContent = modalProyecto;
    document.getElementById("modalLogo").textContent = modalLogo;
    document.getElementById("modalMateria").textContent = modalMateria;
    document.getElementById("modalAprendizaje").textContent = modalAprendizaje;
    document.getElementById("modalTecnologias").textContent = modalTecnologias;
    document.getElementById("modalParticipacion").textContent = modalParticipacion;
    const indicators = document.querySelector(
      "#carouselModal .carousel-indicators",
    );
    indicators.innerHTML = "";
    carouselInner.innerHTML = "";

    if (modalImgs) {
      const images = modalImgs.split(",");
      images.forEach((src, index) => {
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        if (index === 0) div.classList.add("active");
        div.innerHTML = `<img src="${src}" class="d-block w-100 rounded carousel-img">`;
        carouselInner.appendChild(div);

        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#carouselModal");
        button.setAttribute("data-bs-slide-to", index);
        if (index === 0) button.classList.add("active");
        indicators.appendChild(button);
      });
    }

    const repoTitle = document.getElementById("repoTitle");
    const githubLink = document.getElementById("githubLink");

    if (modalRepositorio && modalRepositorio !== "No permitido") {
      githubLink.href = modalRepositorio;
      const repoColor = this.getAttribute("data-repo-color");
      githubLink.style.display = "inline-block";
      repoTitle.style.display = "block";
      githubLink.classList.remove("black");
      if (repoColor === "black") githubLink.classList.add("black");
    } else {
      githubLink.style.display = "none";
      repoTitle.style.display = "none";
    }

    const TitleTecnologias = document.getElementById("TitleTecnologias");
    const TextTecnologias = document.getElementById("modalTecnologias");
    if(modalTitle === "RebuilWare"){
        TitleTecnologias.style.display = "none";
        TextTecnologias.style.display = "none";
    }
  });
});