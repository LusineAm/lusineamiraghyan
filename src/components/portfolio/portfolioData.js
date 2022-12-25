import beigene from "../../assets/img/portfolio/beigene-logo.jpeg";
import csvtopostgre from "../../assets/img/portfolio/csvtopostgre.png";
import financemanager from "../../assets/img/portfolio/financemanager.png";
import professionals from "../../assets/img/portfolio/professionals.png";
import inscope from "../../assets/img/portfolio/inscope.jpeg";

const PortfolioData = [
  {
    id: 1,
    title: "Beigene",
    image: beigene,
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
    image: csvtopostgre,
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
    image: professionals,
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
          "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.",
      },
    ],
  },
  {
    id: 4,
    title: "InScope",
    image: inscope,
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
    image: financemanager,
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
          "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.",
      },
    ],
  },
];

export default PortfolioData;
