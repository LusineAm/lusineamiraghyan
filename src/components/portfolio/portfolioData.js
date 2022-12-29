import beigene from "../../assets/img/portfolio/beigene-logo.jpeg";
import beigene1 from "../../assets/img/portfolio/beigene1.png";
import beigene2 from "../../assets/img/portfolio/beigene2.png";
import beigene3 from "../../assets/img/portfolio/beigene3.png";
import csvtopostgre from "../../assets/img/portfolio/csvtopostgre.png";
import financemanager from "../../assets/img/portfolio/financemanager.png";
import professionals from "../../assets/img/portfolio/professionals.png";
import inscope from "../../assets/img/portfolio/inscope.jpeg";

const PortfolioData = [
  {
    id: 1,
    title: "Beigene",
    image: [beigene, beigene1, beigene2, beigene3],
    tag: ["real"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Envato",
        language: "JavaScript, ReactJS, NodeJs",
        preview: "www.beigene.com",
        link: "https://www.envato.com/",
        description:
          "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.",
      },
    ],
  },
  {
    id: 2,
    title: "Data Parser",
    image: [csvtopostgre],
    tag: ["real"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
        description:
          "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.",
      },
    ],
  },
  {
    id: 3,
    title: "Professionals",
    image: [professionals],
    tag: ["real"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Job Searching Website",
        client: "www.professionals.am",
        language: " HTML, CSS, Javascript",
        preview: "www.professionals.am",
        link: "https://www.professionals.am",
        description:
          "App is a portal designed for applicants and hiring companies. Applicants are provided with an opportunity to build their CV-s and have a look at them in real-time, apply for jobs, be notified about application status, view statistics, have an interview calendar, etc. The portal enables hiring companies to place their announcements both manually or automatically in case of API activation. All the necessary tools are there to help companies organize the hiring process smoothly.",
      },
    ],
  },
  {
    id: 4,
    title: "InScope",
    image: [inscope],
    tag: ["practice"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Company Website",
        client: "InScope LLC",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.inscope-llc.com/",
        description:
          "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.",
      },
    ],
  },
  {
    id: 5,
    title: "Finance Manager",
    image: [financemanager, professionals],
    tag: ["practice"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
        description:
          "App was created to train ReactJS. This program makes managing personal finances as easy as pie. You can filter expenses by year, also you can see how much was spent by month, or plan future expenses.",
      },
    ],
  },
];

export default PortfolioData;
