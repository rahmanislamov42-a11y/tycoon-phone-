/* Расширяемая локальная база. Цены — игровые ориентиры, не котировки площадок. */
const PHONE_DB = [
 {model:"iPhone 11",brand:"Apple",year:2019,base:19000,storage:["64 ГБ","128 ГБ"],colors:["Чёрный","Белый","Зелёный","Фиолетовый"]},
 {model:"iPhone 12",brand:"Apple",year:2020,base:24500,storage:["64 ГБ","128 ГБ","256 ГБ"],colors:["Чёрный","Белый","Синий"]},
 {model:"iPhone 13",brand:"Apple",year:2021,base:32000,storage:["128 ГБ","256 ГБ"],colors:["Midnight","Starlight","Розовый","Синий"]},
 {model:"iPhone 14",brand:"Apple",year:2022,base:39000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Белый","Фиолетовый"]},
 {model:"iPhone 15",brand:"Apple",year:2023,base:52000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Голубой","Зелёный"]},
 {model:"iPhone 16",brand:"Apple",year:2024,base:69000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Белый","Ультрамарин"]},
 {model:"iPhone XR",brand:"Apple",year:2018,base:13000,storage:["64 ГБ","128 ГБ"],colors:["Чёрный","Белый","Коралловый"]},
 {model:"iPhone X",brand:"Apple",year:2017,base:10500,storage:["64 ГБ","256 ГБ"],colors:["Серый","Серебристый"]},
 {model:"iPhone 8",brand:"Apple",year:2017,base:7500,storage:["64 ГБ","128 ГБ"],colors:["Серый","Золотой"]},
 {model:"Samsung Galaxy A54",brand:"Samsung",year:2023,base:21000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Лайм","Фиолетовый"]},
 {model:"Samsung Galaxy S22",brand:"Samsung",year:2022,base:27000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Белый","Зелёный"]},
 {model:"Samsung Galaxy A34",brand:"Samsung",year:2023,base:15000,storage:["128 ГБ"],colors:["Чёрный","Серебристый"]},
 {model:"Xiaomi Redmi Note 12",brand:"Xiaomi",year:2023,base:10500,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Синий"]},
 {model:"Xiaomi Redmi Note 13",brand:"Xiaomi",year:2024,base:14000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Зелёный"]},
 {model:"Xiaomi 13T",brand:"Xiaomi",year:2023,base:25000,storage:["256 ГБ"],colors:["Чёрный","Зелёный"]},
 {model:"POCO X6 Pro",brand:"POCO",year:2024,base:26000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Серый","Жёлтый"]},
 {model:"POCO F6",brand:"POCO",year:2024,base:32000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Титановый"]},
 {model:"POCO M6 Pro",brand:"POCO",year:2024,base:15000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Синий"]},
 {model:"HONOR X8b",brand:"HONOR",year:2023,base:17000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Серебристый","Зелёный"]},
 {model:"HONOR 90",brand:"HONOR",year:2023,base:26000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Зелёный"]},
 {model:"HONOR 200",brand:"HONOR",year:2024,base:36000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Белый"]},
 {model:"HONOR Magic6 Pro",brand:"HONOR",year:2024,base:65000,storage:["512 ГБ"],colors:["Чёрный","Зелёный"]},
 {model:"HUAWEI nova 11",brand:"HUAWEI",year:2023,base:22000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Зелёный"]},
 {model:"HUAWEI nova 12s",brand:"HUAWEI",year:2024,base:28000,storage:["256 ГБ"],colors:["Чёрный","Белый"]},
 {model:"HUAWEI Pura 70",brand:"HUAWEI",year:2024,base:55000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Белый"]},
 {model:"HUAWEI Mate 50 Pro",brand:"HUAWEI",year:2022,base:42000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Серебристый"]},
 {model:"Samsung Galaxy S23",brand:"Samsung",year:2023,base:39000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Зелёный","Лаванда"]},
 {model:"Samsung Galaxy S24",brand:"Samsung",year:2024,base:52000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Серый","Фиолетовый"]},
 {model:"Samsung Galaxy A35",brand:"Samsung",year:2024,base:19000,storage:["128 ГБ","256 ГБ"],colors:["Чёрный","Синий"]},
 {model:"Redmi Note 13 Pro",brand:"Xiaomi",year:2024,base:21000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Фиолетовый"]},
 {model:"Xiaomi 14",brand:"Xiaomi",year:2024,base:57000,storage:["256 ГБ","512 ГБ"],colors:["Чёрный","Белый"]},
 {model:"iPhone 16 Pro",brand:"Apple",year:2024,base:95000,storage:["128 ГБ","256 ГБ","512 ГБ"],colors:["Чёрный титан","Натуральный титан"]}
];
const CITIES=["Москва","Санкт-Петербург","Казань","Екатеринбург","Новосибирск","Сочи","Краснодар","Нижний Новгород","Самара","Ростов-на-Дону"];
const SELLERS=[
 ["Алексей","🙂","Вежливый",.055,"Всё честно, торг уместен в разумных пределах."],
 ["Марина","👩🏻","Спешит",.095,"Нужно продать побыстрее, поэтому немного уступлю."],
 ["Дмитрий","🧔","Жёсткий",.02,"Цена уже адекватная, без сильного торга."],
 ["Илья","🧢","Общительный",.07,"Давайте обсудим, могу немного подвинуться."],
 ["Ольга","👩🏼","Новичок",.08,"Телефон в хорошем состоянии, задавайте вопросы!"],
 ["Максим","😎","Обмен",.06,"Рассмотрю обмен с вашей доплатой."]
];
const STARTER_MODELS=["iPhone 8","iPhone X","iPhone XR","Samsung Galaxy A34","Xiaomi Redmi Note 12"];
