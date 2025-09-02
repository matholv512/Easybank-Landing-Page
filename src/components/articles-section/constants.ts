import { images } from '../../assets'

interface Image {
  src: string
  alt: string
}

interface Article {
  title: string
  author: string
  paragraph: string
  image: Image
}

export const ARTICLES_ITEMS: Article[] = [
  {
    title: 'Receive money in any currency with no fees',
    author: 'By Claire Robinson',
    paragraph:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...',
    image: { src: images.currency, alt: '' },
  },
  {
    title: 'Treat yourself without worrying about money',
    author: 'By Wilson Hutton',
    paragraph:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
    image: { src: images.restaurant, alt: '' },
  },
  {
    title:
      'Take your Easybank card wherever you go We want you to enjoy your travels.',
    author: 'By Wilson Hutton',
    paragraph:
      'This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...',
    image: { src: images.plane, alt: '' },
  },
  {
    title: 'Our invite-only Beta accounts are now live!',
    author: 'By Claire Robinson',
    paragraph:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...',
    image: { src: images.confetti, alt: '' },
  },
]
