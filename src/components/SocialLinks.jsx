import { FacebookIcon, TwitterIcon, LinkedinIcon, PinterestIcon } from './Icons.jsx'

const networks = [
  { name: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
  { name: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedinIcon },
  { name: 'Pinterest', href: 'https://www.pinterest.com', Icon: PinterestIcon },
]

export default function SocialLinks() {
  return (
    <ul className="social">
      {networks.map(({ name, href, Icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={name}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
