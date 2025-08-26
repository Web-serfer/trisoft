import { h, Fragment } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks";
import { menus } from "./navData";
import { isModalOpen } from "@stores/modalStore";

// Re-implemented Logo component for Preact
function Logo() {
  return (
    <a href="/" class="flex flex-col items-center no-underline">
      <div class="text-xl font-bold tracking-wider uppercase">
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>r</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>s</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>o</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>f</span>
        <span style={{ background: 'linear-gradient(45deg, #0891B2, #374151, #111827)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>t</span>
      </div>
      <div class="text-xs tracking-widest text-gray-500">
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
    ? "fixed right-4 top-4 z-[60] rounded-full bg-gray-200/50 p-2 lg:hidden"
    : "rounded-full bg-gray-200/50 p-2 lg:hidden";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        class={buttonClass}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Закрыть меню</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Открыть меню</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      <div
        role="button"
        tabIndex={isOpen ? 0 : -1}
        class={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
        onKeyDown={handleOverlayKeyDown}
        aria-label="Закрыть меню"
      />

      <div
        class={`fixed bottom-0 left-0 top-0 z-50 flex h-screen w-[85vw] max-w-sm transform flex-col border-r border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div class="flex flex-shrink-0 items-center justify-between border-b border-gray-200 p-4 bg-white">
          <Logo />
        </div>

        <nav class="flex flex-grow flex-col items-center justify-start gap-4 p-4 pt-8 bg-white">
          {menus.map((menu, index) => (
            <a
              key={menu.url}
              onClick={handleClose}
              href={menu.url}
              class={`block transform text-center text-xl font-medium text-gray-600 transition-all duration-300 ease-out hover:text-cyan-600 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } `}
              style={{ transitionDelay: `${100 + index * 75}ms` }}
            >
              {menu.name}
            </a>
          ))}
        </nav>

        <div class="p-4 mt-auto space-y-4 bg-white">
            <a href="/login" class="w-full block text-center bg-cyan-600 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-700 transition-all duration-300 ease-in-out transform hover:-translate-y-px hover:shadow-lg hover:shadow-cyan-500/50">
                Вход
            </a>
        </div>
      </div>
    </>
  );
}
