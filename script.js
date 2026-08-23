// ======================================
// AVanta - First Stream Landing Page
// ======================================


// ======================================
// INTRO ANIMATION
// ======================================

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    setTimeout(() => {

        intro.classList.add("hide");

    }, 2600);

});


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


// ======================================
// COUNTDOWN
// 13 DEY 1405
// برابر با 3 January 2027
// ساعت 00:00 ایران
// ======================================

const targetDate =
    new Date(
        "2027-01-03T00:00:00+03:30"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        targetDate - now;


    // وقتی زمان تمام شد

    if (difference <= 0) {

        document.getElementById(
            "days"
        ).textContent = "00";

        document.getElementById(
            "hours"
        ).textContent = "00";

        document.getElementById(
            "minutes"
        ).textContent = "00";

        document.getElementById(
            "seconds"
        ).textContent = "00";


        document.getElementById(
            "finished"
        ).textContent =
            "🔥 FIRST STREAM IS HERE";

        return;

    }


    // محاسبه زمان

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) %
            24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) %
            60
        );


    const seconds =
        Math.floor(
            (difference / 1000) %
            60
        );


    // نمایش

    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


// اجرای اولیه

updateCountdown();


// آپدیت هر ثانیه

setInterval(
    updateCountdown,
    1000
);


// ======================================
// MOUSE PARALLAX
// ======================================

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        const orbOne =
            document.querySelector(
                ".orb-one"
            );

        const orbTwo =
            document.querySelector(
                ".orb-two"
            );


        if (orbOne) {

            orbOne.style.transform =
                `translate(${x * 35}px, ${y * 35}px)`;

        }


        if (orbTwo) {

            orbTwo.style.transform =
                `translate(${-x * 35}px, ${-y * 35}px)`;

        }

    }
);


// ======================================
// COUNTDOWN NUMBER EFFECT
// ======================================

const countdownNumbers =
    document.querySelectorAll(
        ".time-box strong"
    );


setInterval(() => {

    countdownNumbers.forEach(
        (number) => {

            number.style.transform =
                "translateY(-2px)";

            number.style.opacity =
                "0.65";


            setTimeout(() => {

                number.style.transform =
                    "translateY(0)";

                number.style.opacity =
                    "1";

            }, 120);

        }
    );

}, 1000);