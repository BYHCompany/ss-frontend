import {
  TopicPreviewProps,
  TopicTag,
} from '../Components/TopicPreview/TopicPreview/TopicPreviewTypes';

const tags = [{ label: 'Горячие новости', value: 'Будущее наступило' }] as TopicTag[];

export const news = [
  {
    mainTag: { label: 'Electric car', value: 'ec' },
    imageSrc: 'https://car-images.bauersecure.com/pagefiles/100596/taycan4s_50.jpg',
    label: 'Porsche представила первый электромобиль бренда',
    tags: tags,
    description:
      'Porsche представила серийную версию первого электромобиля бренда, седана Taycan. Автомобиль показан на специальном мероприятии одновременно в Северной Америке, Китае и Европе – эти три рынка являются наиболее важными для модели, пояснила компания. Публичная премьера пройдет через неделю на автосалоне во Франкфурте. «Taycan является связующим звеном между наследием и будущим», – сказал председатель ...',
  },
  {
    mainTag: { label: 'Electric car', value: 'ec' },
    imageSrc:
      'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1615552677/autoexpress/2021/03/Volkswagen%20ID4%202021%20UK-4.jpg',
    label: 'Volkswagen представит крупный электрический кроссовер в апреле',
    tags: tags,
    description:
      '21 апреля в Шанхае начнёт работу автосалон, на котором ожидается анонс ряда новинок ведущих автопроизводителей, включая электрический кроссовер ID.6 компании Volkswagen (VW). В преддверии старта мероприятия немецкий автопроизводитель опубликовал в своём официальном аккаунте в китайской социальной сети Weibo тизер, подтверждающий грядущий анонс нового кроссовера на электрическом ходу. Семиместный электромобиль ...',
  },
] as TopicPreviewProps[];
