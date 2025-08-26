import { h } from 'preact';
import { useStore } from '@nanostores/preact';
import { isModalOpen } from '@stores/modalStore';
import CallbackForm from './CallbackForm';

export default function Modal() {
  const $isModalOpen = useStore(isModalOpen);

  if (!$isModalOpen) {
    return null;
  }

  const handleClose = () => {
    isModalOpen.set(false);
  };

  return (
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        class="bg-gray-900 rounded-lg shadow-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="relative">
          <button
            onClick={handleClose}
            class="absolute top-2 right-2 text-gray-400 hover:text-white hover:cursor-pointer p-1 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}