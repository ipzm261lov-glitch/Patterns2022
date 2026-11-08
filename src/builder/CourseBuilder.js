// Builder (Будівельник): дозволяє поетапно налаштувати складний об'єкт Course.
class Course {
  constructor({ title, author, description, modules, isPublished }) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.modules = modules;
    this.isPublished = isPublished;
  }
}

class CourseBuilder {
  constructor(title) {
    this.courseData = {
      title,
      author: "Не вказано",
      description: "",
      modules: [],
      isPublished: false
    };
  }

  setAuthor(author) {
    this.courseData.author = author;
    return this;
  }

  setDescription(description) {
    this.courseData.description = description;
    return this;
  }

  addModule(moduleName) {
    this.courseData.modules.push(moduleName);
    return this;
  }

  publish() {
    this.courseData.isPublished = true;
    return this;
  }

  build() {
    if (!this.courseData.title.trim()) {
      throw new Error("Назва курсу не може бути порожньою");
    }
    return new Course({
      ...this.courseData,
      modules: [...this.courseData.modules]
    });
  }
}

export default CourseBuilder;
