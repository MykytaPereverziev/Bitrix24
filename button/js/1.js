class Book {
  constructor(id, title, description, authorName, authorBirthDate, publishedDate, language) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authorName = authorName;
    this.authorBirthDate = authorBirthDate;
    this.publishedDate = publishedDate;
    this.language = language;
    this.author = new Autor(authorName, authorBirthDate);
  };

  get authorInfo() {
    return `${this.authorName} ${this.authorBirthDate}`
  };

  set authorInfo(authorInfoStr) {
    let authorArr = authorInfoStr.split(' ')
    this.authorName = authorArr[0];
    this.authorBirthDate = authorArr[1];
    this.author = new Autor(this.authorName, this.authorBirthDate);
  };

};

class Autor {
  constructor(fullName, birthDate) {
    this.fullName = fullName;
    this.birthDate = birthDate;
  };
};

let book = new Book(4, 'Evgeniy Onegin', 'Novel', 'A.S.Pushkin', '26.05.1799', 1825, 'ru');
   */