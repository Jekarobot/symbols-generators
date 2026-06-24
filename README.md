# 🎲 Symbols Generators

Генератор случайных символов на JavaScript. Проект создан для демонстрации работы с модульной архитектурой, тестированием и сборкой через Webpack.

## 📖 Описание

Проект предоставляет простой интерфейс для генерации случайных символов (буквы, цифры, спецсимволы). Подходит для использования в учебных целях, прототипирования или как основа для более сложных генераторов.

## 🛠 Технологический стек

- **Язык**: JavaScript (ES6+)
- **Сборка**: Webpack 5
- **Тестирование**: Jest
- **Транспиляция**: Babel
- **Стили**: CSS3
- **Верстка**: HTML5

## 🚀 Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/symbols-generators.git
   cd symbols-generators
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите в режиме разработки:
   ```bash
   npm run dev
   ```

4. Соберите для продакшена:
   ```bash
   npm run build
   ```

5. Запустите тесты:
   ```bash
   npm test
   ```

## 💡 Примеры использования

### Генерация случайного символа
```javascript
import { generateSymbol } from './js/generator';

const symbol = generateSymbol();
console.log(symbol); // 'A', '7', '@', etc.
```

### Генерация строки символов
```javascript
import { generateString } from './js/generator';

const str = generateString(10);
console.log(str); // 'aB3#kL9$z'
```

## 📂 Структура проекта

```
symbols-generators/
├── 📄 babel.config.json          # Конфигурация Babel
├── 📄 package-lock.json          # Lock-файл зависимостей
├── 📄 package.json               # Метаданные и скрипты
├── 📁 src/
│   ├── 📁 css/
│   │   └── 📄 style.css          # Стили приложения
│   ├── 📄 index.html             # HTML-шаблон
│   ├── 📄 index.js               # Точка входа
│   └── 📁 js/
│       ├── 📁 __tests__/         # Тесты
│       └── 📄 generator.js       # Логика генерации
└── 📄 webpack.config.js          # Конфигурация Webpack
```

## 📄 Лицензия

Проект распространяется под лицензией MIT. Подробнее — в файле `LICENSE`.