import Joi from "joi";

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

  public static validationSchema = Joi.object({
    id: Joi.number().optional().positive().integer(),
    name: Joi.string().required().min(2).max(26),
    author: Joi.string().required().min(2).max(26),
    price: Joi.number().required().min(1).max(999),
  });

  public validation(): string {
    const result = BookModel.validationSchema.validate(this);
    return result.error?.message;
  }
}

export default BookModel;
