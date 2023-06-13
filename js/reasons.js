const reasons = [
    "Eres mí Princesa.",
    "Me encanta tu voz suave y suave, especialmente cuando me dices que me amas.",
    "Me gusta cómo eres espontánea y siempre estás dispuesta a hacer algo divertido.",
    "Anahi siempre tiene tiempo para mí, incluso cuando está ocupada.",
    "Siempre estás ahí para mí.",
    "Me aceptas tal como soy.",
    "Eres mi hogar.",
    "Porque me haces una mejor persona.",
    "Anahi eres muy cariñosa y siempre me haces sentir amado.",
    "Me gusta cómo siempre tienes un plan para nuestro futuro juntos",
    "Eres mi inspiración",
    "Juntos podemos superar cualquier obstáculo.",
    "Eres la razón por la que me despierto con una sonrisa todos los días.",
    "Porque me haces sentir amado.",
    "Me siento seguro y amado cuando estás conmigo.",
    "Estar contigo es sentirme como en casa.",
    "Aprecio cómo siempre me apoyas en mis sueños y metas, incluso cuando son difíciles de alcanzar.",
    "Por lo fuerte que hemos sido siempre.",
    "Porque si tienes un problema me buscas",
    "A pesar de nuestros problemas hemos sabido salir adelante",
    "Por como actuas como niña pequeña",
    "Porque me encanta consentirte",
    "Porque eres la mejor novia del mundo",
    "Porque eres cariñosa",
    "Por la esclusividad que me das",
    "Por tus llamadas en la noche",
    "por simplemente ser tu",
    "porque ademas de tus problemas has salido adelante",
    "porque has hechos cambios positivos en mi",
    "porque estas dispuesta a cambiar para que las cosas funcionen",
    "Porque espero y estar contigo muchisimo tiempo"

];

let usedReasons = [];

const reasonBtn = document.getElementById("reason-btn");
const reasonEl = document.getElementById("reason");


reasonBtn.addEventListener("click", () => {
    let reason = "";
    
    if (usedReasons.length === reasons.length) {
    usedReasons = [];
    }
    
    do {
      reason = reasons[Math.floor(Math.random() * reasons.length)];
    } while (usedReasons.includes(reason));
    
    usedReasons.push(reason);
    reasonEl.textContent = reason;

});
