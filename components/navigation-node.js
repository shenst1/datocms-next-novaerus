import Link from 'next/link'
export default function NavigationNode({node, right, left, icon, children, ...rest}) {
   
  const inner = () => {
    if (right && icon) {
      return (
        <>
          <span>{node.label}</span>
          <i className={icon} />
        </>
      )
    } else if (left && icon) {
      return (
        <>
          <i className={icon} />
          <span>{node.label}</span>
        </>
      )
    } else {
      return (
        <>{node.label}</>
      )
    }
  }
  if (node.link) {
    return (
      <Link as={`/${node.link.slug}`} href="/[slug]">
        <a {...rest}>
          {inner()}
        </a>
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