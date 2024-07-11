export const fakeOffers: OfferType[] = [
  {
    id: 1,
    offer_number: "Oferta #1111",
    job: "Desarrollador Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, iste fugiat qui eaque eligendi laudantium totam deleniti cum quas velit magnam fuga amet dolor blanditiis quasi! Omnis, reiciendis saepe",
    requirements:
      "Officia nemo possimus, vero facere temporibus, reprehenderit facilis ab natus repudiandae dignissimos libero? Atque in ducimus quaerat debitis accusantium numquam deleniti perspiciatis?",
    salary: "lorem ipsus",
    location: "Buenos Aires",
    publication_date: "18 abril 2024",
    benefits: ["Dia de cumpleaños libre", "Seguro de vida", "Home office"],
    experience: "Nivel Junior",
    modality: "Tiempo completo"
  },
  {
    id: 2,
    offer_number: "Oferta #2222",
    job: "Desarrollador Backend",
    description:
      "Oferta #2222 dolor sit amet consectetur adipisicing elit. Minima corrupti, iste fugiat qui eaque eligendi laudantium totam deleniti cum quas velit magnam fuga amet dolor blanditiis quasi! Omnis, reiciendis saepe",
    requirements:
      "Oferta #2222, vero facere temporibus, reprehenderit facilis ab natus repudiandae dignissimos libero? Atque in ducimus quaerat debitis accusantium numquam deleniti perspiciatis?",
    salary: "lorem ipsus",
    location: "Lima",
    publication_date: "01 abril 2024",
    benefits: ["Dia de cumpleaños libre", "Seguro de vida", "Home office"],
    experience: "Nivel Junior",
    modality: "Fines de semana"
  },
  {
    id: 3,
    offer_number: "Oferta #3333",
    job: "Desarrollador Fullstack",
    description:
      "Oferta #3333 dolor sit amet consectetur adipisicing elit. Minima corrupti, iste fugiat qui eaque eligendi laudantium totam deleniti cum quas velit magnam fuga amet dolor blanditiis quasi! Omnis, reiciendis saepe",
    requirements:
      "Oferta #3333 facere temporibus, reprehenderit facilis ab natus repudiandae dignissimos libero? Atque in ducimus quaerat debitis accusantium numquam deleniti perspiciatis?",
    salary: "lorem ipsus",
    location: "Bogota",
    publication_date: "05 abril 2024",
    benefits: ["Dia de cumpleaños libre", "Seguro de vida", "Gimnasio"],
    experience: "Nivel Junior",
    modality: "Medio Tiempo"
  },
  {
    id: 4,
    offer_number: "Oferta #4444",
    job: "Desarrollador Mobile",
    description:
      "Oferta #4444 ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, iste fugiat qui eaque eligendi laudantium totam deleniti cum quas velit magnam fuga amet dolor blanditiis quasi! Omnis, reiciendis saepe",
    requirements:
      "Oferta #4444, vero facere temporibus, reprehenderit facilis ab natus repudiandae dignissimos libero? Atque in ducimus quaerat debitis accusantium numquam deleniti perspiciatis?",
    salary: "lorem ipsus",
    location: "Ciudad de México",
    publication_date: "10 abril 2024",
    benefits: ["Dia de cumpleaños libre", "Seguro de vida", "Home office"],
    experience: "Nivel Junior",
    modality: "Tiempo completo"
  },
  {
    id: 5,
    offer_number: "Oferta #5555",
    job: "Desarrollador Frontend",
    description:
      "Oferta #5555 ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, iste fugiat qui eaque eligendi laudantium totam deleniti cum quas velit magnam fuga amet dolor blanditiis quasi! Omnis, reiciendis saepe",
    requirements:
      "Oferta #5555 nemo possimus, vero facere temporibus, reprehenderit facilis ab natus repudiandae dignissimos libero? Atque in ducimus quaerat debitis accusantium numquam deleniti perspiciatis?",
    salary: "lorem ipsus",
    location: "Buenos Aires",
    publication_date: "15 marzo 2024",
    benefits: ["Dia de cumpleaños libre", "Seguro de vida", "Home office"],
    experience: "Nivel Senior",
    modality: "Tiempo completo"
  }
]

export type OfferType = {
  id: number
  offer_number: string
  job: string
  description: string
  requirements: string
  salary: string
  location: string
  publication_date: string
  benefits: string[]
  experience: string
  modality: string
}
