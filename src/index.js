import AppConfig from "./singleton/AppConfig.js";
import NotificationFactory from "./factory/NotificationFactory.js";
import { getThemeFactory } from "./abstract-factory/ThemeFactory.js";
import CourseBuilder from "./builder/CourseBuilder.js";
import Lesson from "./prototype/LessonPrototype.js";

console.log("=== Patterns2022: демонстрація породжуючих патернів ===\n");

// 1. Singleton
const configA = AppConfig.getInstance();
const configB = AppConfig.getInstance();
console.log("1. SINGLETON");
console.log("Назва застосунку:", configA.applicationName);
console.log("Обидва посилання ведуть на один об'єкт:", configA === configB);

// 2. Factory Method
console.log("\n2. FACTORY METHOD");
const notificationFactory = new NotificationFactory();
const email = notificationFactory.createNotification(
  "email", "student@example.com", "Ваш курс доступний"
);
const push = notificationFactory.createNotification(
  "push", "student-01", "Ви отримали нове завдання"
);
console.log(email.send());
console.log(push.send());

// 3. Abstract Factory
console.log("\n3. ABSTRACT FACTORY");
const themeFactory = getThemeFactory("dark");
const button = themeFactory.createButton();
const card = themeFactory.createCard();
console.log("Компоненти теми:", button.render(), "та", card.render());

// 4. Builder
console.log("\n4. BUILDER");
const course = new CourseBuilder("Основи JavaScript")
  .setAuthor("Команда Patterns2022")
  .setDescription("Вступний курс із практичними завданнями")
  .addModule("Змінні та типи даних")
  .addModule("Функції")
  .addModule("Патерни проєктування")
  .publish()
  .build();
console.log("Створений курс:", JSON.stringify(course, null, 2));

// 5. Prototype
console.log("\n5. PROTOTYPE");
const lessonTemplate = new Lesson(
  "Шаблон уроку",
  "Теоретичний матеріал",
  ["Прочитати матеріал"]
);
const clonedLesson = lessonTemplate.clone();
clonedLesson.title = "Урок: Singleton";
clonedLesson.tasks.push("Реалізувати приклад Singleton");
console.log("Оригінал:", JSON.stringify(lessonTemplate));
console.log("Клон:", JSON.stringify(clonedLesson));
console.log("Масиви завдань незалежні:", lessonTemplate.tasks !== clonedLesson.tasks);

console.log("\n=== Демонстрацію завершено ===");
