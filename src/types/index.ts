export type LinkTree = LinkTreeSection[]

interface LinkTreeSection {
  header: string;
  links: Link[]
};

export interface Link {
  title: string;
  href: string;
  isSameDomain?: boolean;
}