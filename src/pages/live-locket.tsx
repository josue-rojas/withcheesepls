import Card from "../component/Card";
import { LinkTree } from "../types";
import styles from '../App.module.css';

const MyLinks: LinkTree = [
  {
    header: 'Live Locket',
    links: [
      {
        title: 'Submit Images',
        href: 'https://withcheesepls.com/live-locket/',
      },
    ]
  },
]

export function LiveLocketView() {
  return <div className={styles.App}>
    <Card linkTree={MyLinks}/>;
  </div>
}
