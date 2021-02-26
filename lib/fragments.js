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
        id
        label
        externalLink
        internalLink
        link {
          slug
          id
        }
      }
    }
  }
  ${footerFragment}
`
export const pageFragment = `
  fragment pageFragment on PageRecord {
    title
    slug
    transparentNavigation
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
    widgets  {
      ... on WidgetTestimonialCarouselRecord {
        __typename
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
            label
            externalLink
            internalLink
            link {
              slug
            }
          }
        }
      }
      ... on WidgetContactFormRecord {
        __typename
        customerSupportLabel
        customerSupportBody
        formLabel
        successMessage
        loadingMessage
        emailRecipient
      }
      ... on WidgetContactLandingFormRecord {
        __typename
        title
        aside
        buttonLabel
        successMessage
        loadingMessage
        emailRecipient
        showSector
        image {
          responsiveImage(imgixParams: { w: 800  }) {
            ...responsiveImageFragment
          }
        }
      }
      ... on WidgetHeroVideoRecord {
        __typename
        button {
          label
          link {
            slug
          }
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
        header
        body
      }
      ... on WidgetFactsStatsSectionRecord {
        __typename
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
          caption
          image {
            responsiveImage(imgixParams: { w: 600  }) {
              ...responsiveImageFragment
            }
          }
        }

      }
      ... on WidgetVideoTabsSectionRecord {
        __typename
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
        backgroundImage {
          responsiveImage(imgixParams: { w: 2400  }) {
            ...responsiveImageFragment
          }
        }
        header
        subheader
        theme
      }
      ... on WidgetTwoColumnVideoCtaRecord {
        __typename
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
            url
          }
        }
      }
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
        body
        alignment
        theme
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
`
