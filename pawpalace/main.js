const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
  ham.classList.toggle("girar");
});

function myFuction(smallImg) {
  let fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}

/* Estrellas */

const starContainers = document.querySelectorAll(".showcase-rating");

starContainers.forEach((container) => {
  const stars = container.querySelectorAll(".star");
  stars.forEach((star, i) => {
    star.addEventListener("click", () => {
      const current_star_level = i + 1;

      stars.forEach((star, j) => {
        if (current_star_level >= j + 1) {
          star.innerHTML = "&#9733";
        } else {
          star.innerHTML = "&#9734";
        }
      });
    });
  });
});

// Datos de ejemplo para las características, comentarios y reseñas
const specificationData = [
  "■ El tejido exterior está confeccionado en 100% Mako Batista de 350 hilos con acabado down proof que impide que el plumón se salga.",
  "■ Bordes contorneados",
  "■ Plumón obtenido éticamente bajo normativa europea amparado por IDFB (International Down & Feather Bureau)",
  "■ Cubierta desmontable de calidad premium de piel sintética",
  "■ Paredes altas redondeadas y área profunda de descanso para la comodidad y seguridad del perrito",
  "■ Cremallera YKK de seguridad",
  "■ Suave y acolchada área para echarse a dormir",
  "■ Sistema de ventilación para una mayor aireación de la tela",
  "■ Base resistente al agua y al ser masticada",
];
const commentsData = [
  {
    type: "text",
    content: "Anchura 117 cms | Profundidad 97 cms | Altura 26 cms",
  },
  { type: "image", src: "img/large_1080x.jpg" },
];
const reviewsData = [];

// Función para cargar especificaciones
function loadSpecification() {
  document.getElementById("description-content").style.display = "none";
  document.getElementById("specification-content").style.display = "block";
  document.getElementById("comments-list").style.display = "none";
  document.getElementById("reviews-list").style.display = "none";

  const specificationList = document.getElementById("specification-content");
  specificationList.innerHTML = ""; // Limpiamos el contenido actual
  specificationData.forEach((spec) => {
    const specItem = document.createElement("li");
    specItem.textContent = spec;
    specificationList.appendChild(specItem);
  });
}

// Función para cargar comentarios
function loadComments() {
  showContent("comments-list");
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = ""; // Limpiamos el contenido actual
  commentsData.forEach((comment) => {
    if (comment.type === "text") {
      const commentItem = document.createElement("li");
      commentItem.textContent = comment.content;
      commentItem.style.marginTop = "20px";
      commentsList.appendChild(commentItem);
    } else if (comment.type === "image") {
      const commentItem = document.createElement("img");
      commentItem.src = comment.src;
      commentsList.appendChild(commentItem);
    }
  });
}

// Función para cargar reseñas
function loadReviews() {
  document.getElementById("description-content").style.display = "none";
  document.getElementById("specification-content").style.display = "none";
  document.getElementById("comments-list").style.display = "none";
  document.getElementById("reviews-list").style.display = "block";

  const reviewsList = document.getElementById("reviews-list");
  reviewsList.innerHTML = ""; // Limpiamos el contenido actual
  reviewsData.forEach((review) => {
    const reviewItem = document.createElement("li");
    reviewItem.textContent = review;
    reviewsList.appendChild(reviewItem);
  });
}

const sections = ["description", "specification", "comments", "reviews"];

sections.forEach((sectionId) => {
  const section = document.getElementById(sectionId);

  section.addEventListener("click", () => {
    showContent(sectionId);
    sections.forEach((otherSectionId) => {
      const otherSection = document.getElementById(otherSectionId);
      if (sectionId === otherSectionId) {
        otherSection.classList.add("active");
      } else {
        otherSection.classList.remove("active");
      }
    });
  });
});
// Mostrar contenido en la sección seleccionada y ocultar otras
function showContent(sectionId) {
  const sections = [
    "description-content",
    "specification-content",
    "comments-list",
    "reviews-list",
  ];
  sections.forEach((section) => {
    const element = document.getElementById(section);
    element.style.display = section === sectionId ? "block" : "none";
  });
}

// Cargar contenido en las secciones al hacer clic
const descriptionSection = document.getElementById("description");
descriptionSection.addEventListener("click", () =>
  showContent("description-content")
);

const specificationSection = document.getElementById("specification");
specificationSection.addEventListener("click", loadSpecification);

const commentsSection = document.getElementById("comments");
commentsSection.addEventListener("click", loadComments);

const reviewsSection = document.getElementById("reviews");
reviewsSection.addEventListener("click", loadReviews);




