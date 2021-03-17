import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = `https://${process.env.NEXT_PUBLIC_MAILCHIMP_DOMAIN}.${process.env.NEXT_PUBLIC_MAILCHIMP_ZONE}.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_USER_ID}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_LIST}`

export default function Subscribe() {
  return (
    <div className="mailchimp-subscribe">
       <MailchimpSubscribe
          url={url}
          class="mailchimp-subscribe"
          />
    </div>
   
  )
}
