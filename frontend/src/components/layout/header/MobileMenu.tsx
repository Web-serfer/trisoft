import { h, Fragment } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks";
import { menus } from "./navData";
import { isModalOpen } from "@stores/modalStore";

// Re-implemented Logo component for Preact
function Logo() {
  return (
    <a href="/" class="flex flex-col items-center no-underline">
      <div class="text-xl font-bold tracking-wider uppercase">
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.1s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.2s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>r</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.3s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.4s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>s</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.5s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>o</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.6s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>f</span>
        <span style={{ animation: 'flicker 3s infinite', animationDelay: '0.7s', background: 'linear-gradient(45deg, #06B6D4, #8B5CF6, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>t</span>
      </div>
      <div class="text-xs tracking-widest text-gray-400">
        Ваш партнер 1С
      </div>
    </a>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleCallbackClick = () => {
    setIsOpen(false);
    isModalOpen.set(true);
  };

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
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        class={buttonClass}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Закрыть меню</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Открыть меню</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      <div
        role="button"
        tabIndex={isOpen ? 0 : -1}
        class={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
        onKeyDown={handleOverlayKeyDown}
        aria-label="Закрыть меню"
      />

      <div
        class={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-[85vw] max-w-sm transform flex-col border-r border-neutral-800 bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div class="flex flex-shrink-0 items-center justify-between border-b border-gray-800 p-4">
          <Logo />
          <button 
              type="button"
              onClick={handleCallbackClick}
              class="px-3 py-1.5 text-sm text-white bg-cyan-600 rounded-md hover:bg-cyan-700 hover:cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-px hover:shadow-lg hover:shadow-cyan-500/50"
          >
              Заказать звонок
          </button>
        </div>

        <nav class="flex flex-grow flex-col items-center justify-start gap-4 p-4 pt-8">
          {menus.map((menu, index) => (
            <a
              key={menu.url}
              onClick={handleClose}
              href={menu.url}
              class={`block transform text-center text-xl font-medium text-gray-300 transition-all duration-300 ease-out hover:text-cyan-400 ${
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
