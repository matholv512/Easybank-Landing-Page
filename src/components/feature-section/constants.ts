import { icons } from '../../assets'

interface FeatureIcons {
  src: string
  alt: string
}

interface FeatureItem {
  icon: FeatureIcons
  title: string
  paragraph: string
}

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    icon: { src: icons.online, alt: 'Online Banking icon' },
    title: 'Online Banking',
    paragraph:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: { src: icons.budgeting, alt: 'Budgeting icon' },
    title: 'Simple Budgeting',
    paragraph:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    icon: { src: icons.onBoarding, alt: 'On Boarding icon' },
    title: 'Fast Onboarding',
    paragraph:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: { src: icons.api, alt: 'Api icon' },
    title: 'Open API',
    paragraph:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]
