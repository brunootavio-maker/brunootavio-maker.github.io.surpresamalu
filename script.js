const intro = document.getElementById("intro");
const surpresa = document.getElementById("surpresa");

const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const modal = document.getElementById("modal");
const modalTexto = document.getElementById("modalTexto");
const fecharModal = document.getElementById("fecharModal");

const musica1 = document.getElementById("musica1");

function iniciarSurpresa(){

    intro.style.display = "none";
    surpresa.style.display = "block";

    musica1.volume = 0.8;

    musica1.play().catch(() => {});

    document.querySelectorAll(".card").forEach(card=>{
        observer.observe(card);
    });
}

sim.addEventListener("click", ()=>{

    modalTexto.innerHTML =
        "Ainda bem, você não tinha escolha mesmo 😌";

    modal.style.display = "flex";
});

nao.addEventListener("click", ()=>{

    modalTexto.innerHTML =
        "Você não tem escolha 😌";

    modal.style.display = "flex";
});

fecharModal.addEventListener("click", ()=>{

    modal.style.display = "none";

    iniciarSurpresa();
});

nao.addEventListener("mouseenter", ()=>{

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    nao.style.position = "fixed";

    nao.style.left =
        Math.random() * (largura - 150) + "px";

    nao.style.top =
        Math.random() * (altura - 100) + "px";
});

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

},
{
    threshold:0.15
}

);