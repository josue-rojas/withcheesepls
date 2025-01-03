import Card from "../component/Card";
import { LinkTree } from "../types";
import styles from '../App.module.css';

const MyLinks: LinkTree = [
  {
    header: 'Community Projects',
    links: [
      {
        title: 'Azul Rojo',
        href: 'http://azulrojo.com',
      },
      {
        title: 'Survival Kits',
        href: 'https://project.azulrojo.com/survivalkits/?utm_medium=link&utm_source=linkswithcheesepls'
      }
    ]
  },
  {
    header: 'Personal',
    links: [
      {
        title: 'Portfolio',
        href: 'https://josue-rojas.github.io'
      },
      {
        title: 'Instagram',
        href: 'http://instagram.com/withcheesepls/'
      },
    ]
  },
]

export function HomeView() {
  return <div className={styles.App}>
    <Card linkTree={MyLinks}/>;
  </div>
}
