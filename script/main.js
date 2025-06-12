// Определение типа устройства
const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini/i.test(navigator.userAgent);
const isDesktop = !isMobile;

// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Включить музыку в фоновом режиме?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'да',
        cancelButtonText: 'нет',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// временная шкала анимации
const animationTimeline = () => {
    // разделить символы, которые необходимо анимировать по отдельности
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    
    // Базовые параметры анимации
    const baseDuration = isMobile ? 0.5 : 0.7;
    const fastDuration = isMobile ? 0.3 : 0.5;
    const animationSpeed = isMobile ? 0.6 : 1;
    
    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };
    
    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };
    
    // timeline
    const tl = new TimelineMax();
    
    // Pause videos initially
    if (document.getElementById("intro-video")) {
        document.getElementById("intro-video").pause();
    }
    if (document.getElementById("happy-video")) {
        document.getElementById("happy-video").pause();
    }
    
    // Адаптация анимации под устройство
    tl.to(".container", 0.6 * animationSpeed, {
        visibility: "visible"
    })
    .from(".one", baseDuration * animationSpeed, {
        opacity: 0,
        y: 10
    })
    .from(".two", fastDuration * animationSpeed, {
        opacity: 0,
        y: 10
    })
    .to(".one", baseDuration * animationSpeed, {
        opacity: 0,
        y: 10
    }, "+=2.5")
    .to(".two", baseDuration * animationSpeed, {
        opacity: 0,
        y: 10
    }, "-=1")
    .from(".three", baseDuration * animationSpeed, {
        opacity: 0,
        y: 10
    })
    .to(".three", baseDuration * animationSpeed, {
        opacity: 0,
        y: 10
    }, "+=2")
    .from(".four", baseDuration * animationSpeed, {
        scale: isMobile ? 0.1 : 0.2,
        opacity: 0,
    })
    .from(".fake-btn", fastDuration * animationSpeed, {
        scale: isMobile ? 0.1 : 0.2,
        opacity: 0,
    })
    .staggerTo(".hbd-chatbox span", 1 * animationSpeed, {
        visibility: "visible",
    }, 0.03)
    .to(".fake-btn", fastDuration * animationSpeed, {
        backgroundColor: "rgb(127, 206, 248)",
    }, "+=2.5")
    .to(".four", fastDuration * animationSpeed, {
        scale: isMobile ? 0.1 : 0.2,
        opacity: 0,
        y: isMobile ? -100 : -150
    }, "+=1")
    .from(".idea-1", baseDuration * animationSpeed, ideaTextTrans)
    .to(".idea-1", baseDuration * animationSpeed, ideaTextTransLeave, "+=2")
    .from(".idea-2", baseDuration * animationSpeed, ideaTextTrans)
    .to(".idea-2", baseDuration * animationSpeed, ideaTextTransLeave, "+=2")
    .from(".idea-3", baseDuration * animationSpeed, ideaTextTrans)
    .to(".idea-3 strong", fastDuration * animationSpeed, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", baseDuration * animationSpeed, ideaTextTransLeave, "+=2")
    .from(".idea-4", baseDuration * animationSpeed, ideaTextTrans)
    .to(".idea-4", baseDuration * animationSpeed, ideaTextTransLeave, "+=2")
    .from(".idea-5", baseDuration * animationSpeed, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
    }, "+=1")
    .to(".idea-5 span", fastDuration * animationSpeed, {
        rotation: 90,
        x: 8,
    }, "+=1")
    .to(".idea-5", baseDuration * animationSpeed, {
        scale: 0.2,
        opacity: 0,
    }, "+=1.5")
    .staggerFrom(".idea-6 span", 0.8 * animationSpeed, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
    }, isMobile ? 0.1 : 0.2)
    .staggerTo(".idea-6 span", 0.8 * animationSpeed, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
    }, isMobile ? 0.1 : 0.2, "+=1")
    .staggerFromTo(".baloons img", 2 * animationSpeed, {
        opacity: 0.9,
        y: isMobile ? 700 : 1400,
    }, {
        opacity: 1,
        y: isMobile ? -500 : -1000,
    }, 0.1)
    .from(".profile-picture", fastDuration * animationSpeed, {
        scale: isMobile ? 2.5 : 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
    }, "-=1.5")
    .from(".hat", fastDuration * animationSpeed, {
        x: -100,
        y: isMobile ? 300 : 600,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(".wish-hbd span", 0.5 * animationSpeed, {
        opacity: 0,
        y: isMobile ? -30 : -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
    }, 0.05)
    .staggerFromTo(".wish-hbd span", 0.5 * animationSpeed, {
        scale: 1.2,
        rotationY: 150,
    }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
    }, 0.05, "party")
    .from(".wish h5", fastDuration * animationSpeed, {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
    }, "party")
    .staggerTo(".eight svg", 1 * animationSpeed, {
        visibility: "visible",
        opacity: 0,
        scale: isMobile ? 50 : 80,
        repeat: isMobile ? 2 : 3,
        repeatDelay: isMobile ? 1 : 1.4,
    }, isMobile ? 0.15 : 0.3)
    .to(".six", fastDuration * animationSpeed, {
        opacity: 0,
        y: isMobile ? 20 : 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", isMobile ? 0.7 : 1, ideaTextTrans, isMobile ? 0.7 : 1.2)
    .to(".last-smile", fastDuration * animationSpeed, {
        rotation: 90,
    }, "+=0.5");
    
    const twoAppear = tl.getTweensOf(".two")[0]; // from(".two")
    const twoDisappear = tl.getTweensOf(".two")[1]; // to(".two")
    
    tl.add(() => {
        document.getElementById("intro-video").play();
    }, twoAppear.startTime())
    
    .add(() => {
        document.getElementById("intro-video").pause();
    }, twoDisappear.startTime());
    
    // Перезапуск анимации по щелчку мыши или касанию
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        const happyVideo = document.getElementById("happy-video");
        if (happyVideo) {
            happyVideo.pause();
            happyVideo.currentTime = 0;
            happyVideo.style.display = "none";
            happyVideo.style.opacity = "0";
        }
        tl.restart();
    });
    
    // Анимация появления видео после всех элементов .nine p
    tl.fromTo("#happy-video", {
        opacity: 0,
        y: isMobile ? 10 : 20,
        display: "none"
    }, {
        duration: isMobile ? 0.4 : 0.6,
        opacity: 1,
        y: 0,
        display: "block",
        ease: "power2.out"
    }, ">+=0.3")
    .add(() => {
        const video = document.getElementById("happy-video");
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    });
    
    // Обработчик для разрешения воспроизведения на мобильных устройствах
    document.addEventListener('touchstart', function() {
        if(document.querySelector('.song') && document.querySelector('.song').paused) {
            document.querySelector('.song').play();
        }
    }, {once: true});
}