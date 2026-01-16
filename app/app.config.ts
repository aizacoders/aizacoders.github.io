export default defineAppConfig({
  global: {
    picture: {
      dark: '/profile/gpt-me01.png',
      light: '/profile/gpt-me01.png',
      alt: 'Miftakhul Aziz profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-whatsapp',
        'to': 'https://wa.me/',
        'target': '_blank',
        'aria-label': 'WhatsApp'
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://linkedin.com/',
        'target': '_blank',
        'aria-label': 'LinkedIn'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/',
        'target': '_blank',
        'aria-label': 'GitHub'
      },
      {
        'icon': 'i-lucide-mail',
        'to': 'mailto:ui-pro@nuxt.com',
        'target': '_self',
        'aria-label': 'Email'
      }
    ]
  }
})
