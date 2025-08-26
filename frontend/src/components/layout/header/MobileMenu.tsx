import { h, Fragment } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks";
import { menus } from "./navData";
import { isModalOpen } from "@stores/modalStore";

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

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    };
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleCallbackClick = () => {
    setIsOpen(false);
    isModalOpen.set(true);
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

      <button
        type="button"
        class={`fixed inset-0 z-40 w-full h-full bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
        aria-label="Закрыть меню"
        tabIndex={-1}
      />

      <div
        class={`fixed bottom-0 left-0 top-0 z-50 flex h-screen w-[85vw] max-w-sm transform flex-col border-r border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div class="flex flex-shrink-0 items-center justify-between border-b border-gray-200 p-4 bg-white">
          <Logo />
          <a href="/login" class="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-md shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center text-sm py-1.5 px-3">
            Вход
          </a>
        </div>

        <nav class="flex flex-grow flex-col items-center justify-start gap-4 p-4 pt-8 bg-white overflow-y-auto">
          {menus.map((menu) => (
            <a
              key={menu.url} // Уникальный URL - отличный ключ для навигации
              onClick={handleClose}
              href={menu.url}
              class={`block transform text-center text-xl font-medium text-gray-600 transition-all duration-300 ease-out hover:text-cyan-600 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + menus.indexOf(menu) * 75}ms` }}
            >
              {menu.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
