import Link from 'next/link'
export default function NavigationNode({node, children, ...rest}) {
  if (node.link) {
    return (
      <Link as={`/${node.link.slug}`} href="/[slug]">
        <a {...rest}>{node.label}</a>
      </Link>
    )
  } else if (node.externalLink) {
    return (
      <a href={node.externalLink} target="_blank"{...rest} >{node.label}</a>
    )
  } else if (node.internalLink) {
    return (
      <Link as={`/${node.internalLink}`} href={`/${node.internalLink}`}>
        <a {...rest}>{node.label}</a>
      </Link>
    )
  } else {
    return (
      <a {...rest}>{node.label}</a>
    )
  }
 
}