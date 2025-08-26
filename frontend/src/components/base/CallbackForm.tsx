import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function CallbackForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: h.JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log({ name, phone, question });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="p-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-4">Спасибо!</h2>
        <p class="text-gray-300">Мы скоро с вами свяжемся.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="p-8">
      <h2 class="text-2xl font-bold text-white mb-6 text-center">Заказать звонок</h2>
      <div class="mb-4">
        <label for="name" class="block text-gray-300 mb-2">Имя</label>
        <input
          type="text"
          id="name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
          required
          class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-300 mb-2">Телефон</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onInput={(e) => setPhone(e.currentTarget.value)}
          required
          class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div class="mb-6">
        <label for="question" class="block text-gray-300 mb-2">Ваш вопрос</label>
        <textarea
          id="question"
          value={question}
          onInput={(e) => setQuestion(e.currentTarget.value)}
          rows={4}
          class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full px-4 py-3 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 transition-colors duration-300 hover:cursor-pointer"
      >
        Отправить
      </button>
    </form>
  );
}