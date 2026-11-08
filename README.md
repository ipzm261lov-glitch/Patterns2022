# Patterns2022

Навчальний проєкт для лабораторної роботи №4: **породжуючі патерни проєктування на JavaScript**.

## Реалізовані патерни

| Патерн | Файл | Призначення в проєкті |
|---|---|---|
| Singleton (Одинак) | `src/singleton/AppConfig.js` | Єдиний екземпляр конфігурації застосунку |
| Factory Method (Фабричний метод) | `src/factory/NotificationFactory.js` | Створення email та push-повідомлень |
| Abstract Factory (Абстрактна фабрика) | `src/abstract-factory/ThemeFactory.js` | Створення узгоджених компонентів світлої/темної теми |
| Builder (Будівельник) | `src/builder/CourseBuilder.js` | Поетапне створення навчального курсу |
| Prototype (Прототип) | `src/prototype/LessonPrototype.js` | Клонування шаблону навчального уроку |

## Вимоги

- Node.js 18 або новіший.
- Додаткові npm-пакети не потрібні.

## Запуск

```bash
npm start
```

Або без npm:

```bash
node src/index.js
```

## Структура

```text
Patterns2022/
├── src/
│   ├── singleton/
│   │   └── AppConfig.js
│   ├── factory/
│   │   └── NotificationFactory.js
│   ├── abstract-factory/
│   │   └── ThemeFactory.js
│   ├── builder/
│   │   └── CourseBuilder.js
│   ├── prototype/
│   │   └── LessonPrototype.js
│   └── index.js
├── package.json
└── README.md
```

## Як патерни працюють разом

Демонстраційний сценарій запускає навчальну платформу: отримує спільну конфігурацію, створює курс через Builder, клонує урок через Prototype, формує компоненти інтерфейсу через Abstract Factory та надсилає повідомлення через Factory Method.

> Це навчальна демонстрація патернів. Відправлення повідомлень, збереження даних і реальний графічний інтерфейс не підключені.
