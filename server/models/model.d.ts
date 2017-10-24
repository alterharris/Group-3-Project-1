declare namespace models {
  // Dont' have to create ICreateResponse
  interface ICreateResponse {
    id: number;
  }

  interface ICategory {
    id: number;
    name: string;
  }

  interface IProduct {
    id: number;
    categoryid: number;
    title: string;
    description: string;
    price: number;
    imageurl: string;
  }
}
