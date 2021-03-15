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

export const navigationNodeFragment = `
  fragment navigationNodeFragment on NavigationNodeRecord {
    id
    internalLink
    externalLink
    label
    link {
      id
      slug
    }
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
        ...navigationNodeFragment
      }
    }
    socialHeader
    socialLinks {
      id
      name
      icomoonName
      url
    }
    partnerHeader
    lowerNavigation {
      children {
        ...navigationNodeFragment
      }
    }
    partners {
      id
      image {
        responsiveImage(imgixParams: { w: 100  }) {
          ...responsiveImageFragment
        }
      }
    }
    copyright
    disclaimer
  }
  ${responsiveImageFragment}
`


export const layoutFragment = `
  fragment layoutFragment on SettingRecord {
    companyLogo {
      url
    }
    footer {
      ...footerFragment
    }
    mainNavigation {
      children {
        ...navigationNodeFragment
      }
    }
    drawerNavigation {
      children {
        ...navigationNodeFragment
      }
    }
  }
  ${navigationNodeFragment}
  ${footerFragment}
`

export const widgets = `widgets  {
  ... on WidgetTestimonialCardGridRecord {
    __typename
    id
    header
    backgroundImage {
      responsiveImage(imgixParams: { w: 2400  }) {
        ...responsiveImageFragment
      }
    }
    testimonials {
      id
      title
      quote
      excerpt
      image {
        responsiveImage(imgixParams: { w: 800  }) {
          ...responsiveImageFragment
        }
      }
      buttonLabel
      url
    }
  }
  ... on WidgetSixColumnGridRecord {
    __typename
    id
    header
    leftColumn
    rightColumn
    factIcons {
      id
      icon {
        responsiveImage(imgixParams: { w: 300  }) {
          ...responsiveImageFragment
        }
      }
      fact
    }
  }
  ... on WidgetImageTextRecord {
    __typename
    id
    title
    body
    button {
      ...navigationNodeFragment
    }
    image {
      responsiveImage(imgixParams: { w: 800  }) {
        ...responsiveImageFragment
      }
    }
  }
  ... on WidgetSolutionsGridRecord {
    __typename
    id
    header
    subheader
    iconFacts {
      id
      icon {
        responsiveImage(imgixParams: { w: 400  }) {
          ...responsiveImageFragment
        }
      }
      fact
    }
    button {
      ...navigationNodeFragment
    }
  }
  ... on WidgetTestimonialCarouselRecord {
    __typename
    id
    backgroundImage {
      responsiveImage(imgixParams: { w: 2400  }) {
        ...responsiveImageFragment
      }
    }
    testimonials {
      id
      title
      quote
      excerpt
      thumbnail {
        responsiveImage(imgixParams: { w: 60  }) {
          ...responsiveImageFragment
        }
      }
      buttonLabel
      url
    }
  }
  ... on WidgetHeroSlideshowRecord {
    __typename
    id
    hideOnDesktop
    slides {
      title
      subtitle
      image {
        responsiveImage(imgixParams: { w: 2400  }) {
          ...responsiveImageFragment
        }
      }
      button {
        ...navigationNodeFragment
      }
    }
  }
  ... on WidgetContactFormRecord {
    __typename
    id
    customerSupportLabel
    customerSupportBody
    formLabel
    successMessage
    loadingMessage
    emailRecipient
  }
  ... on WidgetContactLandingFormRecord {
    __typename
    id
    title
    aside
    buttonLabel
    successMessage
    loadingMessage
    emailRecipient
    showSector
    alignment
    image {
      responsiveImage(imgixParams: { w: 800  }) {
        ...responsiveImageFragment
      }
    }
  }
  ... on WidgetHeroVideoRecord {
    __typename
    id
    button {
      ...navigationNodeFragment
    }
    slides {
      timing
      textOnly
    }
    videoUrl
    hideOnMobile
  }
  ... on WidgetFindARepresentativeRecord {
    __typename
    id
    title
    description
    backgroundImage {
      responsiveImage(imgixParams: { w: 2400  }) {
        ...responsiveImageFragment
      }
    }
    filterTitle
    filterDefaultLabel
  }
  ... on WidgetSectionRecord {
    __typename
    id
    header
    body
    showBackButton
    width
  }
  ... on WidgetFactsStatsSectionRecord {
    __typename
    id
    header
    description
    columns {
      id
      caption
      image {
        responsiveImage(imgixParams: { w: 600  }) {
          ...responsiveImageFragment
        }
      }
    }
    rows {
      id
      text
      image {
        responsiveImage(imgixParams: { w: 400  }) {
          ...responsiveImageFragment
        }
      }
    }

  }
  ... on WidgetVideoTabsSectionRecord {
    __typename
    id
    prefix
    header
    description
    videoTabs {
      id
      previewThumbnail {
        responsiveImage(imgixParams: { w: 1000  }) {
          ...responsiveImageFragment
        }
      }
      url
      title
      label
    }
  }
  ... on WidgetHeroRecord {
    __typename
    id
    backgroundImage {
      responsiveImage(imgixParams: { w: 2400  }) {
        ...responsiveImageFragment
      }
    }
    header
    subheader
    theme
    showRule
    button {
      ...navigationNodeFragment
    }
    height
  }
  ... on WidgetTwoColumnVideoCtaRecord {
    __typename
    id
    title
    videoCtas {
      id
      image {
        responsiveImage(imgixParams: { w: 600  }) {
          ...responsiveImageFragment
        }
      }
      description
      videoUrl
      buttonLabel
    }
  }
  ... on WidgetProductDetailGridRecord {
    __typename
    id
    products {
      id
      title
      shortDescription
      videoUrl
      productImage {
        responsiveImage(imgixParams: { w: 1000  }) {
          ...responsiveImageFragment
        }
      }
      applications
      features
      fullDescription
      technicalSheet {
        id
        url
      }
    }
  }
  ... on WidgetApplicationGridRecord {
    __typename
    id
    backgroundImage {
      responsiveImage(imgixParams: { w: 2560  }) {
        ...responsiveImageFragment
      }
    }
    applications {
      id
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
    id
    title
    subtitle
  }
  ... on WidgetHeroCtaRecord {
    __typename
    id
    title
    leadText
    body
    alignment
    theme
    button {
      ...navigationNodeFragment
    }
    backgroundImage {
      responsiveImage(imgixParams: { w: 2560  }) {
        ...responsiveImageFragment
      }
    }
  }
  ... on WidgetOverlaidImageRecord {
    __typename
    id
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
    button {
      ...navigationNodeFragment
    }
  }
  ... on WidgetTextImageRecord {
    __typename
    id
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
    button {
      ...navigationNodeFragment
    }
  }
  ... on WidgetProductsPreviewRecord {
    __typename
    id
    title
    body
    thumbnail {
      responsiveImage(imgixParams: { w: 400, auto: format }) {
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
      ...navigationNodeFragment
    }
  }
}`
export const pageFragment = `
  fragment pageFragment on PageRecord {
    title
    slug
    transparentNavigation
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
   ${widgets}
  }
  ${metaTagsFragment}
`
