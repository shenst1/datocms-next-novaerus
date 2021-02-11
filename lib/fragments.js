// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`

export const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`
export const footerFragment = `
  fragment footerFragment on FooterRecord {
    subscribeHeader
    connectHeader
    buttonTitle
    connectHeader
    navigation {
      children {
        label
        externalLink
        link {
          slug
        }
      }
    }
    socialHeader
    socialLinks {
      name
      icomoonName
      url
    }
    partnerHeader
    lowerNavigation {
      children {
        label
        externalLink
        link {
          slug
        }
      }
    }
    partners {
      image {
        responsiveImage(imgixParams: { w: 100  }) {
          ...responsiveImageFragment
        }
      }
    }
    copyright
    disclaimer
  }
`
export const pageFragment = `
  fragment pageFragment on PageRecord {
    title
    slug
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
    widgets  {
      ... on WidgetApplicationGridRecord {
        __typename
        backgroundImage {
          responsiveImage(imgixParams: { w: 2560  }) {
            ...responsiveImageFragment
          }
        }
        applications {
          slug
          title
          thumbnail {
            responsiveImage(imgixParams: { w: 300  }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ... on WidgetTextHeaderRecord {
        __typename
        title
        subtitle
      }
      ... on WidgetHeroCtaRecord {
        __typename
        title
        leadText
        button {
          label
          link {
            slug
          }
        }
        backgroundImage {
          responsiveImage(imgixParams: { w: 2560  }) {
            ...responsiveImageFragment
          }
        }
      }
      ... on WidgetOverlaidImageRecord {
        __typename
        body
        title
        backgroundImage {
          responsiveImage(imgixParams: { w: 2560  }) {
            ...responsiveImageFragment
          }
        }
        foregroundImage {
          responsiveImage(imgixParams: { w: 1500 }) {
            ...responsiveImageFragment
          }
        }
      }
      ... on WidgetFullWidthImageTextRecord {
        __typename
        body
        title
        leadImage {
          responsiveImage(imgixParams: { w: 400  }) {
            ...responsiveImageFragment
          }
        }
        image {
          responsiveImage(imgixParams: { w: 1500 }) {
            ...responsiveImageFragment
          }
        }
      }
      ... on WidgetProductsPreviewRecord {
        __typename
        title
        body
        thumbnail {
          responsiveImage(imgixParams: { w: 400 }) {
            ...responsiveImageFragment
          }
        }
        products {
          id
          title
          shortDescription
          productImage {
            responsiveImage(imgixParams: { w: 1000 }) {
              ...responsiveImageFragment
            }
          }
        }
        cardLink {
          label
          link {
            slug
          }
        }
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`
