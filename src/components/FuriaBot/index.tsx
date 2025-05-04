import React, { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import {
  defaultSuggestions,
  emojis,
  intents,
  stopWords,
} from "../../data/furiaBotDataset";
import "./styles.css";
import botImage from "../../assets/msc/chat2.png";
import furiaLogo from "../../assets/logos/furiaLogo.jpg";

type ChatMessage = {
  sender: string;
  message: string;
  suggestions?: string[];
};

interface OpenModalbySession {
  openModalbySession: boolean;
  setOpenbySession: React.Dispatch<React.SetStateAction<boolean>>;
}

const normalize = (texto: string): string => {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .filter((word) => !stopWords.includes(word))
    .join(" ");
};

const allTags = intents.flatMap((intent) =>
  intent.tags.map((tag) => ({
    tag: normalize(tag),
    response: intent.responses,
  }))
);

const fuse = new Fuse(allTags, {
  keys: ["tag"],
  threshold: 0.4,
  includeScore: true,
  useExtendedSearch: true,
  ignoreDiacritics: true,
});

const answer = (
  userQuestion: string
): { text: string; suggestions?: string[] } => {
  const normalizedQuestion = normalize(userQuestion);
  const result = fuse.search(normalizedQuestion);

  if (result.length > 0) {
    const { response } = result[0].item;
    const Baseanswer = response[Math.floor(Math.random() * response.length)];

    const Loweranswer = Baseanswer.toLowerCase();
    const isDefeat =
      Loweranswer.includes("derrota") ||
      Loweranswer.includes("perdemos") ||
      Loweranswer.includes("perdeu") ||
      Loweranswer.includes("eliminado");

    const emojiList = isDefeat ? emojis.defeat : emojis.victory;
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];

    return { text: `${Baseanswer} ${emoji}` };
  }

  return {
    text: "Não entendi 😅. Tente perguntar de outro jeito.",
    suggestions: [
      "Próximo jogo?",
      "Quando é o próximo campeonato?",
      "Quem está no elenco?",
    ],
  };
};

export const FuriaChatbot: React.FC<OpenModalbySession> = ({
  openModalbySession,
  setOpenbySession,
}) => {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const suggestionRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  const scrollSuggestions = (direction: "left" | "right") => {
    if (suggestionRef.current) {
      const scrollAmount = 150;
      suggestionRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sendMessage = (message: string = userMessage) => {
    if (!message.trim() || message.length <= 1) return;

    const botAnswer = answer(message);

    setChat((prev) => [
      ...prev,
      { sender: "user", message },
      {
        sender: "bot",
        message: botAnswer.text,
        suggestions: botAnswer.suggestions,
      },
    ]);
    setUserMessage("");
  };

  const toggleModal = () => {
    setIsModalOpen(false);
    setOpenbySession(false);
  };

  return (
    <div>
      <button
        className="open-chat-button"
        onClick={() => setIsModalOpen((prev) => !prev)}
        style={{ display: isModalOpen || openModalbySession ? "none" : "flex" }}
      >
        <img src={botImage} alt="Abrir Chat" />
      </button>
      {(isModalOpen || openModalbySession) && (
        <div className="chatbot-modal">
          <div className="chatbot-container">
            <button className="close-button" onClick={toggleModal}>
              X
            </button>

            <div className="chat-box" ref={chatRef}>
              {chat.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <div className="message-header">
                    <img
                      src={furiaLogo}
                      alt={msg.sender}
                      className="message-avatar"
                    />
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: msg.message }} />
                </div>
              ))}
            </div>

            <div className="input-container">
              <div className="suggestions-wrapper">
                <button
                  className="arrow-button"
                  onClick={() => scrollSuggestions("left")}
                >
                  ◀
                </button>
                <div className="suggestions-carousel" ref={suggestionRef}>
                  {defaultSuggestions.map((sug, i) => (
                    <button
                      key={i}
                      className="suggestion-button"
                      onClick={() => sendMessage(sug)}
                    >
                      {sug}
                    </button>
                  ))}
                </div>
                <button
                  className="arrow-button"
                  onClick={() => scrollSuggestions("right")}
                >
                  ▶
                </button>
              </div>
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Pergunte sobre a FURIA!"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button className="send-button" onClick={() => sendMessage()}>
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
