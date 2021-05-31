import { ReactComponent as VK } from '../assets/img/socialNetIcons/vk.svg';
import { FaFacebook, FaTelegram, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ReactComponent as MasterCard } from '../assets/img/paymentSystems/mastercard.svg';
import { ReactComponent as ApplePay } from '../assets/img/paymentSystems/apple-pay.svg';
import { ReactComponent as Bitcoin } from '../assets/img/paymentSystems/bitcoin.svg';
import { ReactComponent as GooglePay } from '../assets/img/paymentSystems/google-pay.svg';
import { ReactComponent as Visa } from '../assets/img/paymentSystems/visa.svg';
import { ReactComponent as PayPal } from '../assets/img/paymentSystems/paypal.svg';
import { Link } from '../Components/Footer/Components/List/ListTypes';
import { IconObject } from '../Components/Footer/Components/Payment/PaymentTypes';

export const support = [
  { href: '#', linkName: 'Написать в поддержку' },
  { href: '#', linkName: 'Как подать объявление?' },
  { href: '#', linkName: 'Как создать учётную запись?' },
  { href: '#', linkName: 'Что делать если в поиске не отображается моё объявление?' },
  { href: '#', linkName: 'Что нужно для идеального объявления или как продать машину быстрее?' },
] as Link[];

export const info = [
  { href: '#', linkName: 'О компании' },
  { href: '#', linkName: 'Вакансии' },
  { href: '#', linkName: 'Партнёрам' },
  { href: '#', linkName: 'Реклама на сайте' },
  { href: '#', linkName: 'Наш блог' },
  { href: '#', linkName: 'Политика конфиденциальности' },
] as Link[];

export const contacts = [
  { href: '#', linkName: 'Vkontakte', icon: <VK /> },
  { href: '#', linkName: 'Facebook', icon: <FaFacebook /> },
  { href: '#', linkName: 'Instagram', icon: <FaInstagram /> },
  { href: '#', linkName: 'Twitter', icon: <FaTwitter /> },
  { href: '#', linkName: 'Telegram', icon: <FaTelegram /> },
] as Link[];

export const icons = [
  { icon: <MasterCard />, href: 'https://www.mastercard.ru/ru-ru.html' },
  { icon: <ApplePay />, href: 'https://www.apple.com/ru/apple-pay/' },
  { icon: <Bitcoin />, href: 'https://bitcoin.org/ru/' },
  { icon: <GooglePay />, href: 'https://pay.google.com/' },
  { icon: <Visa />, href: 'https://www.visa.com.ru/' },
  { icon: <PayPal />, href: 'https://www.paypal.com/lv/home' },
] as IconObject[];
