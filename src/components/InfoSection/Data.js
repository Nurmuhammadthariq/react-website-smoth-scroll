import carSvg from '../../images/svg-1.svg'
import piggyBank from '../../images/svg-4.svg'
import paper from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: true,
  img: carSvg,
  alt: 'car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: piggyBank,
  alt: 'PiggyBank',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is exremely easy',
  description: `Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go`,
  buttonLabel: 'Start Now',
  imgStart: false,
  img: paper,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
}
