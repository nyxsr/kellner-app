import { PricingCardType } from "@/app/_components/pricing-card";
import { BasketFooter, Dollar, FacebookFooter, GithubFooter, Internship, LinkedinFooter, MessageChat, PeaceSignFooter, TwitterFooter } from "@/assets/svgs";
import { DropdownItemType } from "@/components/atoms/dropdown";
import { Image } from "@/types/misc";

type SocialFooterType = Image & {
  link:string;
}

export const NavDropdownItem: DropdownItemType[] = [
  {
    label: <span>Mengapa Kellner's ?</span>,
    url:'/why-us'
  },
  {
    label: <span>Bidang Usaha</span>,
    url:'/field'
  },
  {
    label: <span>Kontak Kami</span>,
    url:'/contact'
  }
]

export const AboutListItem = [
  {
    icon:MessageChat,
    head:'Pelatihan yang efektif sesuai kebutuhan',
    desc:'Nam pellentesque erat nisi, ut faucibus nibh lacinia nec. Nullaet eros et lacus scelerisque ultricies. Vestibulum lacinia accumsan',
    buttonLabel:'Pelatihan kami'
  },
  {
    icon:Dollar,
    head:'Jaringan penempatan yang luas',
    desc:'Nam pellentesque erat nisi, ut faucibus nibh lacinia nec. Nullaet eros et lacus scelerisque ultricies. Vestibulum lacinia accumsan',
    buttonLabel:'Lihat penempatan'
  },
  {
    icon:Internship,
    head:'Kesempatan internship',
    desc:'Nam pellentesque erat nisi, ut faucibus nibh lacinia nec. Nullaet eros et lacus scelerisque ultricies. Vestibulum lacinia accumsan',
    buttonLabel:'Lihat internship'
  }
]

export const SocialFooter: SocialFooterType[] = [
  {
    image:TwitterFooter,
    alt:'twitter-social-footer',
    link:'/'
  },
  {
    image:LinkedinFooter,
    alt:'linkedin-social-footer',
    link:'/'
  },
  {
    image:FacebookFooter,
    alt:'facebook-social-footer',
    link:'/'
  },
  {
    image:GithubFooter,
    alt:'github-social-footer',
    link:'/'
  },
  {
    image:PeaceSignFooter,
    alt:'peace-sign-social-footer',
    link:'/'
  },
  {
    image:BasketFooter,
    alt:'basket-social-footer',
    link:'/'
  },
]

export const PricingItems: PricingCardType[] = [
  {
    buttonLabel:'Daftar Kursus',
    head:'Kursus Bahasa Inggris dan Jerman',
    headDesc:'Sesuaikan dengan kebutuhan',
    item:['Poin nomor 1','Poin nomor 2','Poin nomor 3','Amazing things']
  },
  {
    buttonLabel:'Lihat Kesempatan',
    head:'Kuliah Sambil Kerja',
    headDesc:'Dapatkan pengalaman kerja sambil menempuh pendidikan',
    item:['Poin nomor 1','Poin nomor 2','Poin nomor 3','Amazing things']
  },
  {
    buttonLabel:'Lihat Penempatan',
    head:'Internship dan Magang di Eropa',
    headDesc:'Dapatkan pengalaman kerja sambil menempuh pendidikan',
    item:['Poin nomor 1','Poin nomor 2','Poin nomor 3','Amazing things']
  }
]