import styles from './App.module.css';
import Card from './component/Card'
import { LinkTree } from './types';

const MyLinks: LinkTree = [
  {
    header: 'Community Projects',
    links: [
      {
        title: 'Pelham Parkway Little Library',
        href: 'https://www.notion.so/withcheesepls/Pelham-Parkway-s-Little-Library-95974c50a3b84027a98aeeeb3ca62f82',
      },
      {
        title: 'Survival Kits',
        href: 'https://azulrojo.com/survivalkits/',
      }
    ]
  },
  {
    header: 'Support',
    links: [
      {
        title: 'Pelham Parkway Friends',
        href: 'https://www.instagram.com/pelhamparkwayfriends/'
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
      {
        title: 'Twitter',
        href: 'https://twitter.com/withcheesepls/'
      }
    ]
  },
]

function App() {
  return (
    <div className={styles.App}>
      <Card linkTree={MyLinks}/>
    </div>
  );
}

export default App;
