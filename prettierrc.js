/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100, // Максимальная длина строки (удобно для чтения)
  tabWidth: 2, // Отступы в 2 пробела (дефолт, читаемо)
  useTabs: false, // Использовать пробелы вместо табов
  semi: true, // Ставить точку с запятой
  singleQuote: true, // Одинарные кавычки (более распространённый стиль)
  quoteProps: "as-needed", // Кавычки у ключей объекта только при необходимости
  jsxSingleQuote: false, // В JSX — двойные кавычки (по дефолту)
  trailingComma: "all", // Запятые в конце объектов/массивов (лучше для git-диффов)
  bracketSpacing: true, // Пробелы внутри объектов: { foo: bar }
  bracketSameLine: false, // Закрывающая скобка JSX на новой строке
  arrowParens: "always", // Всегда оборачивать параметры стрелочных функций
  proseWrap: "preserve", // Не изменять переносы в markdown
  endOfLine: "lf", // Unix-стиль перевода строк
  embeddedLanguageFormatting: "auto", // Форматировать встроенные языки
};
