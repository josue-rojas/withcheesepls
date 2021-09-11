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
      }
    ]
  }
]

function App() {
  return (
    <div className={styles.App}>
      <Card linkTree={MyLinks}/>
    </div>
  );
}

export default App;
