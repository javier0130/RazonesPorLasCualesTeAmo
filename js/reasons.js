const reasons = [
    "Eres mí Angel.",
    "Me encanta tu voz suave, especialmente cuando me dices cosas lindas.",
    "Me gusta cómo eres espontánea y siempre estás dispuesta a hacer algo divertido.",
    "Angeles Tratas de vernos o tomas la iniciativa para planes.",
    "Me encanta tu actitud.",
    "Me aceptas tal como soy.",
    "Porque me haces una mejor persona.",
    "Me inspiras cosas buenas",
    "Tu mensajes me hacen despertar con una sorisa todos los dias",
    "Estar contigo es sentirme como en casa.",
    "Por como de vez en cuando sale tu niña interior",
    "Porque eres cariñosa",
    "Por tus llamadas en la noche",
    "por simplemente ser tu",
    "porque has hechos cambios positivos en mi",
    "por como me has hecho sentir como antes de nuevo",
    "Por tus besos alrededor de mi cara",
    "Porque entrenas conmigo",
    "Por como cuando te digo algo lindo se sonrojas",
    "Porque recuerdas con detalle las cosas que te digo",
    "Porque eres inteligente",
    "Porque llenas de alegria mi dia con tus mensajes
    

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
