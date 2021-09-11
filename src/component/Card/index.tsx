import { LinkTree, Link } from '../../types'
import styles from './styles.module.css';
import Icon from '../Icon'
import LinkIcon from '../../assets/link.svg';

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
            <Icon src={LinkIcon} className={styles.linkIcon}/>
          </a>
        </>
      ))
    }
  </div>
)


const Card = ({ linkTree }: CartProps) => {
  const createLinks = (linkTree: LinkTree) => {
    return linkTree.map(({ header, links }) => {
      return <>
        <Header header={header} />
        <CardLinks links={links}/>
      </>
    })
  }
  return <div className={styles.card}>
    {createLinks(linkTree)}
  </div>
}

export default Card;