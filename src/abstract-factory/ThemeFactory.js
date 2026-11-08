// Abstract Factory (Абстрактна фабрика): створює сімейства сумісних UI-компонентів.
class LightButton {
  render() { return "Світла кнопка"; }
}
class LightCard {
  render() { return "Світла картка"; }
}
class DarkButton {
  render() { return "Темна кнопка"; }
}
class DarkCard {
  render() { return "Темна картка"; }
}

class LightThemeFactory {
  createButton() { return new LightButton(); }
  createCard() { return new LightCard(); }
}

class DarkThemeFactory {
  createButton() { return new DarkButton(); }
  createCard() { return new DarkCard(); }
}

function getThemeFactory(theme) {
  if (theme === "light") return new LightThemeFactory();
  if (theme === "dark") return new DarkThemeFactory();
  throw new Error(`Невідома тема: ${theme}`);
}

export { getThemeFactory };
