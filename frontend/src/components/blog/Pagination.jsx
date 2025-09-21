import { useStore } from '@nanostores/solid';
import { pagination } from '../../stores/paginationStore';

export default function Pagination() {
  const $pagination = useStore(pagination);

  const setPage = (page) => {
    const current = $pagination();
    if (page > 0 && page <= current.totalPages) {
      pagination.setKey('currentPage', page);
      document.getElementById('blog-list-container')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pages = () => {
    const pageNumbers = [];
    const current = $pagination();
    const delta = 2;
    const left = current.currentPage - delta;
    const right = current.currentPage + delta + 1;
    let last;

    for (let i = 1; i <= current.totalPages; i++) {
      if (i === 1 || i === current.totalPages || (i >= left && i < right)) {
        if (last && i - last === 2) {
          pageNumbers.push(last + 1);
        } else if (last && i - last !== 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(i);
        last = i;
      }
    }
    return pageNumbers;
  };

  return (
    <nav class="mt-16 flex items-center justify-center space-x-2" aria-label="Pagination">
      <button
        onClick={() => setPage($pagination().currentPage - 1)}
        disabled={$pagination().currentPage === 1}
        class="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50 disabled:pointer-events-none disabled:opacity-50"
      >
        &larr; Назад
      </button>

      <div class="hidden items-center space-x-2 md:flex">
        {pages().map((page) =>
          page === '...' ? (
            <span class="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600">...</span>
          ) : (
            <button
              onClick={() => setPage(page)}
              class={`inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium shadow-sm transition-colors ${
                $pagination().currentPage === page
                  ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50'
              }`}
              aria-current={$pagination().currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => setPage($pagination().currentPage + 1)}
        disabled={$pagination().currentPage === $pagination().totalPages}
        class="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50 disabled:pointer-events-none disabled:opacity-50"
      >
        Далее &rarr;
      </button>
    </nav>
  );
}
