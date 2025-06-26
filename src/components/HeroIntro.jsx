import React, {useEffect, useState} from "react";
import "../index.css";
import ReactAvatar from "./ReactAvatar";
import PropTypes from "prop-types";

const STORAGE_KEY = "heroIntroBubbleShown";

export default function HeroIntro () {
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        const hasShown = localStorage.getItem(STORAGE_KEY);
        if(!hasShown) {
            setShowBubble(true);
            localStorage.setItem(STORAGE_KEY, "true");
        }
    }, []);


    useEffect(()  => {
        if (showBubble) {
        const timer = setTimeout(() => setShowBubble(false), 8000);
        return () => clearTimeout(timer);
        }
}, [showBubble]);

const handleAvatarClick = () => setShowBubble(true);

return (
    <section className="hero-intro-avatar">
        <div className="avatar-area">
            <div className="avatar-wave" aria-label="Avatar saludando"
            tabIndex={0}
            onClick={handleAvatarClick}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleAvatarClick()}
            style={{ cursor: "pointer" }}
            >
                <div className="avatar-emoji">
                  <ReactAvatar />
                </div>
            </div>
            {showBubble && (
                <div className="speech-bubble">
                    <button className="close-bubble" onClick={() => setShowBubble(false)} title="cerrar">×</button>
                    <strong>¡Hola, Soy Adrián!</strong>
                    <div>
                        Bienvenid@ a mi portfolio.
                        Aquí comparto mis proyectos y explico las tecnologias que he utilizado y lo que he aprendido al desarrollarlos.
                        Te invito a explorar, y descubrir como me desenvuelvo en el desarrollo web.
                    </div>
                </div>
            )}
        </div>
    </section>
)

}





