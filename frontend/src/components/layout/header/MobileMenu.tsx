import { useState } from 'preact/hooks';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GoHome, GoInfo, GoBriefcase, GoMail } from 'react-icons/go';

type NavLink = {
  href: string;
  text: string;
};


interface Props {
  navLinks: NavLink[];
}

const icons = [
  <GoHome size={20} key="home" />,
  <GoInfo size={20} key="info" />,
  <GoBriefcase size={20} key="briefcase" />,
  <GoMail size={20} key="mail" />,
]

export default function MobileMenu({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Кнопка "бургер" */}
      <button type="button" onClick={toggleMenu} className="z-50 text-gray-800" aria-label="Открыть меню">
        {isOpen ? <AiOutlineClose size={28} color="#1f2937" /> : <AiOutlineMenu size={28} color="#1f2937" />}
      </button>

      {/* Выпадающее меню */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
        `}
      >
        <nav className="border-t border-gray-200">
          <ul className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-4 py-4 text-lg font-medium text-gray-800 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {icons[index]}
                  {link.text}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/get-started"
                className="mt-4 block w-full rounded-md bg-indigo-600 px-6 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Начать
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}