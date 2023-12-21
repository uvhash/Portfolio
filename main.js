import { gsap } from "gsap";
import "./style.css";

function enter() {
  const t = document.getElementById("EnterView");
  const e = t.querySelector("._t1");
  const n = t.querySelector("._t2");

  gsap.delayedCall(1, function () {
    gsap.to(e, {
      opacity: 0,
      duration: 0.6,
    });

    gsap.to(n, {
      opacity: 0,
      duration: 0.6,
      delay: 0.15,
    });

    gsap.delayedCall(0.6, function () {
      gsap.to(t, {
        opacity: 0,
        duation: 1.6,
        onComplete: function () {
          t.remove();
        },
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", enter);
