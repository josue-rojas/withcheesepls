import { LinkTree, Link } from '../../types'
import styles from './styles.module.css';

interface CartProps {
  linkTree: LinkTree
}

const Header = ({ header }: { header: string; }) => {
  return <header className={styles.cardHeading}>{header}</header>
}

const CardLinks = ({ links }: { links: Link[]; }) => (
  <div className={styles.cardLinks}>
    {
      links.map(({ title, href, isSameDomain }) => (
        <>
          <a href={href}>
            {title} {isSameDomain}
          </a>
        </>
      ))
    }
  </div>
)


const Card = ({ linkTree }: CartProps) => {
  const createLinks = (linkTree: LinkTree) => {
    return linkTree.map(({ header, links }) => {
      return <div>
        <Header header={header} />
        <CardLinks links={links}/>
      </div>
    })
  }
  return <div className={styles.card}>
    {createLinks(linkTree)}
  </div>
}

export default Card;