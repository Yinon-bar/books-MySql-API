class BookModel {
  public id: number;
  public name: string;
  public author: string;
  public price: number;

  public constructor(book: BookModel) {
    this.id = book.id;
    this.name = book.name;
    this.author = book.author;
    this.price = book.price;
  }
}
