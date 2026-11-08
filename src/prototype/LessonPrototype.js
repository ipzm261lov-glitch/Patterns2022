// Prototype (Прототип): створює нові уроки копіюванням готового об'єкта-шаблону.
class Lesson {
  constructor(title, content, tasks = []) {
    this.title = title;
    this.content = content;
    this.tasks = tasks;
  }

  clone() {
    // structuredClone забезпечує незалежну копію вкладеного масиву tasks.
    return new Lesson(
      this.title,
      this.content,
      structuredClone(this.tasks)
    );
  }
}

export default Lesson;
