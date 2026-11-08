// Singleton (Одинак): гарантує використання одного екземпляра конфігурації.
class AppConfig {
  static #instance;

  constructor() {
    if (AppConfig.#instance) {
      return AppConfig.#instance;
    }

    this.applicationName = "Patterns2022 Learning Platform";
    this.language = "uk";
    this.version = "1.0.0";

    AppConfig.#instance = this;
  }

  static getInstance() {
    if (!AppConfig.#instance) {
      AppConfig.#instance = new AppConfig();
    }
    return AppConfig.#instance;
  }
}

export default AppConfig;
