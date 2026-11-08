// Factory Method (Фабричний метод): підкласи визначають тип створюваного повідомлення.
class Notification {
  constructor(recipient, message) {
    this.recipient = recipient;
    this.message = message;
  }

  send() {
    throw new Error("Метод send() має бути реалізований у підкласі");
  }
}

class EmailNotification extends Notification {
  send() {
    return `[EMAIL] Для ${this.recipient}: ${this.message}`;
  }
}

class PushNotification extends Notification {
  send() {
    return `[PUSH] Для ${this.recipient}: ${this.message}`;
  }
}

class NotificationFactory {
  createNotification(type, recipient, message) {
    switch (type) {
      case "email":
        return new EmailNotification(recipient, message);
      case "push":
        return new PushNotification(recipient, message);
      default:
        throw new Error(`Невідомий тип повідомлення: ${type}`);
    }
  }
}

export default NotificationFactory;
