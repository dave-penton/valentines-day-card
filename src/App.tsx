import "./App.css";
import { useState, useRef, useEffect } from "react";
import music from "./assets/music.mp3";
import me from "./assets/me.png";
import you from "./assets/you.png";
import suit from "./assets/suit.png";
import us from "./assets/us.png";

function App() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Set audio volume
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const handleLetsGo = () => {
    setShowQuestion(true);
    // Play music when opening the card
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked
      });
    }
  };

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="valentine-container">
      {!showQuestion ? (
        <div className="opening-scene">
          <div className="floating-hearts">
            <span>💕</span>
            <span>❤️</span>
            <span>💖</span>
            <span>💗</span>
            <span>💝</span>
          </div>

          <div className="card-content">
            <h1 className="title">Hello Mairi</h1>
            <div className="emoji-decorations">
              <span className="emoji">✨</span>
              <span className="emoji">💕</span>
              <span className="emoji">✨</span>
            </div>

            <div className="image-placeholder">
              <img src={suit} alt="Me" />
            </div>

            <p className="message">I've got something to ask you... 🥰</p>

            <button className="reveal-button" onClick={handleLetsGo}>
              Open ✨
            </button>
          </div>
        </div>
      ) : !answered ? (
        <div className="question-scene">
          <div className="floating-hearts">
            <span>💕</span>
            <span>❤️</span>
            <span>💖</span>
            <span>💗</span>
            <span>💝</span>
          </div>

          <div className="card-content">
            <h1 className="big-question">Will you be my Valentine?</h1>

            <div className="secondary-images">
              <div className="image-placeholder">
                <img src={me} alt="Me" />
              </div>
              <span className="large-emoji">💕</span>
              <div className="image-placeholder">
                <img src={you} alt="You" />
              </div>
            </div>

            <div className="button-container">
              <button className="yes-button" onClick={handleYes}>
                Yes, please! 🎉
              </button>
              <button
                ref={noButtonRef}
                className="no-button"
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                }}
              >
                No 😅
              </button>
            </div>

            <p className="playful-text">There is only one correct answer! ✨</p>
          </div>
        </div>
      ) : (
        <div className="scene">
          <div className="confetti">
            <span>🎉</span>
            <span>🎊</span>
            <span>💕</span>
            <span>❤️</span>
            <span>🎉</span>
            <span>🎊</span>
            <span>💕</span>
            <span>❤️</span>
          </div>

          <div className="card-content">
            <h1 className="title">Yay!</h1>

            <div className="emoji-decorations">✨💕🥰💕✨</div>

            <div className="image-placeholder">
              <img src={us} alt="Us" />
            </div>

            <p className="message">You just made me so happy! 🥰💕</p>
            <p className="message">
              I can't wait for all the adventures we are going to have! 🐨
            </p>
            <p className="message">I love you Mairi ❤️</p>
          </div>
        </div>
      )}

      {/* Background romantic music */}
      <audio ref={audioRef} loop style={{ display: "none" }}>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
