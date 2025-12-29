
export enum Category {
    Phone = "Phone",
    Book = "Book",
    Car = "Car",
    Home = "Home",
}


export enum Brand {
    IPhone = "IPhone",
    Xiaomi = "Xiaomi",
    Realme = "Realme",
    Huawei = "Huawei",
    Benz = "Benz",
    BMW = "BMW",
    Dodge = "Dodge"
}

export enum Homes {
    Home1 = "USA Home",
    Home2 = "Iran Home",
    Home3 = "Asturalia Home"
}


export interface Product {
    id: number,
    title: string,
    price: number,
    slug: string,
    category: Category,
    brand?: Brand,
    location?: Homes,
    image: string
}

export const product: Product[] = [
    { id: 1, title: "iPhone 13 Pro", slug: "iPhone-13", price: 30000, category: Category.Phone, brand: Brand.IPhone , image: "/image/iPhone 13 Pro.jpg"},
    { id: 2, title: "iPhone 14 Pro",slug: "iPhon-14-Pro", price: 40000, category: Category.Phone, brand: Brand.IPhone , image: "/image/iPhone 14 Pro.jpg"},
    { id: 3, title: "Xiaomi note 14",slug: "Xiaomi-note-14", price: 20000, category: Category.Phone, brand: Brand.Xiaomi , image: "/image/Xiaomi note 14 1.webp" },
    { id: 4, title: "Realme GT", price: 18000,slug: "Realme-GT", category: Category.Phone, brand: Brand.Realme , image: "/image/Realme GT.jpg"},
    { id: 5, title: "Huawei P40", price: 22000,slug: "Huawei-P40", category: Category.Phone, brand: Brand.Huawei , image: "/image/Huawei P40.jpg" },
    { id: 6, title: "Dodge Challenger", price: 30000,slug: "Dodge-Challenger", category: Category.Car, brand: Brand.Dodge , image: "/image/Dodge Challenger.jpeg"},
    { id: 7, title: "BMW M5", price: 145000,slug: "BMW-M5", category: Category.Car, brand: Brand.BMW  , image: "/image/BMW M51.jpg"},
    { id: 8, title: "Benz G Class", price: 148000,slug: "Benz-G-Class", category: Category.Car, brand: Brand.Benz , image: "/image/Benz G Class.avif" },
    { id: 9, title: "Home In DownTown",slug: "Home-In-DownTown", price: 1500000, category: Category.Home, location: Homes.Home1 ,image: "/image/Realme GT.jpg" },
    { id: 10, title: "Home In Iran", price: 1000000,slug: "Home-In-Iran", category: Category.Home, location: Homes.Home2 ,image: "/image/Realme GT.jpg" },
    { id: 11, title: "Home In Asturalia", price: 2000000, slug: "Home-In-Asturalia",category: Category.Home, location: Homes.Home3 , image: "/image/Realme GT.jpg" }
  ]
