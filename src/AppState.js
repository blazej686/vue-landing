import { reactive } from 'vue'
import webCrawler from './assets/img/app1.jpg'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  currentYear: new Date().getFullYear(),
  about: {
    name: "blazej686.github.io",
    title: 'SUPER AWESOME ME!!',
    summary: ``
  },
  applications: [
    {
    title: 'Web Crawler',
    img: webCrawler,
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt saepe laudantium doloremque molestiae corporis quo corrupti.

- Something most important **is emphasized** 
- This is another bullet it is 110% better 
- I should have more content here
    `
    },
    {
    title: 'Crawling the Web 2',
    img: webCrawler,
    description: `
Showing multiple applications.

- Something most important **is emphasized** 
- This is another bullet it is 110% better 
- I should have more content here
    `
    }
  ],
  experiences: [
    { 
      title: 'Software Developer', company:'C.U.P.S', dates: 'Jan 2020 - Jan 2024', 
      summary: `Markdown supports [links](https://catsups.herokuapp.com/#/)
- I found over 480 lost packages in just 2 hours
      ` 
    }
  ],
  socialLinks: [
    { icon: 'mdi mdi-linkedin', href: '', name: 'LinkedIn' }
  ],
})
