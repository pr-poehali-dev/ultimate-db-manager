export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/ai-coder.png"
          alt="Обучение программированию"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Что я изучил</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          За этот год я освоил программирование с нуля — от базовых алгоритмов до написания настоящих программ.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-4 border-b border-neutral-100 pb-4">
            <span className="text-xs uppercase tracking-wide text-neutral-400 pt-1 w-6 shrink-0">01</span>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Основы Python</p>
              <p className="text-neutral-500 text-sm">Переменные, условия, циклы, функции — научился думать как программист</p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-b border-neutral-100 pb-4">
            <span className="text-xs uppercase tracking-wide text-neutral-400 pt-1 w-6 shrink-0">02</span>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Алгоритмы и структуры данных</p>
              <p className="text-neutral-500 text-sm">Сортировки, поиск, графы — понял как компьютер решает задачи</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xs uppercase tracking-wide text-neutral-400 pt-1 w-6 shrink-0">03</span>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Практические проекты</p>
              <p className="text-neutral-500 text-sm">Написал несколько программ, которые решают реальные задачи</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
