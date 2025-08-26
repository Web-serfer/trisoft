import { h, Fragment } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks";
import { menus } from "./navData";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокировка прокрутки страницы при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOverlayKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClose();
    }
  };

  const buttonClass = isOpen
    ? "fixed right-4 top-4 z-[60] rounded-full bg-neutral-800/50 p-2 lg:hidden"
    : "rounded-full bg-neutral-800/50 p-2 lg:hidden";

  return (
    <>
      {/* Иконка-гамбургер / Иконка закрытия */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        class={buttonClass}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Закрыть меню</title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Открыть меню</title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Оверлей */}
      <div
        role="button"
        tabIndex={isOpen ? 0 : -1}
        class={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
        onKeyDown={handleOverlayKeyDown}
        aria-label="Закрыть меню"
      />

      {/* Выдвижное меню */}
      <div
        class={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-[85vw] max-w-sm transform flex-col border-r border-neutral-800 bg-neutral-900 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/* Шапка меню */}
        <div class="flex flex-shrink-0 items-center justify-between border-b border-neutral-800 p-4">
          <a href="/" class="flex items-center gap-x-3">
            <img
              src="/images/logo.png"
              alt="Redi - веб разработчик"
              width="40"
              height="52"
              loading="eager"
              class="h-8 w-8 object-contain"
            />
          </a>
        </div>

        {/* Навигация */}
        <nav class="flex flex-grow flex-col items-center justify-start gap-4 p-4 pt-8">
          {menus.map((menu, index) => (
            <a
              key={menu.url}
              onClick={handleClose}
              href={menu.url}
              class={`block transform text-center text-xl font-medium text-neutral-300 transition-all duration-300 ease-out hover:text-indigo-400 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } `}
              style={{ transitionDelay: `${100 + index * 75}ms` }}
            >
              {menu.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
