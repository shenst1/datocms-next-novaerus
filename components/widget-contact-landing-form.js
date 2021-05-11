
import { Formik, Field, ErrorMessage } from 'formik';
import {Image } from "react-datocms"
import { useRouter } from 'next/router'

export default function WidgetContactLandingForm({widget: {
  title, aside, buttonLabel, successMessage, loadingMessage, 
  emailRecipient, showSector, showMessage, image, alignment, 
  showCountry, showJobTitle, showCompanyName, requireSector, disclaimer, formLead,
  requireMessage }}) {
  const router = useRouter()
  const contactForm = () => {
    return (
      <Formik
        initialValues={{ 
          title: "",
          description: showMessage ? "" : "N/A",
          name: "",
          phone: "",
          email: "",
          sector: "",
          country: "",
          job_title: "",
          referral: router.query.slug,
          recipient: emailRecipient
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        
          if (!values.description && showMessage && requireMessage) {
            errors.description = 'Required'
          }
          if (!values.country && showCountry) {
            errors.country = 'Required'
          }
          if (!values.job_title && showJobTitle) {
            errors.job_title = 'Required'
          }
          if (!values.sector && showSector && requireSector) {
            errors.description = 'Required'
          }
          if (!values.phone) {
            errors.phone = 'Required'
          }
          if (!values.title && showCompanyName) {
            errors.title = 'Required'
          }
          if (!values.name) {
            errors.name = 'Required'
          }
          return errors;
        }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          try {
            const response = await fetch(`/api/tickets`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            if (response.ok) {
              resetForm()
              setStatus('success')
            } else {
              setStatus('error')
            }
           
          } catch(error) {
            console.log(error)
            setStatus('error')
          }
        
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          status
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="uk-margin">
              <abbr title="required">*</abbr>
              <label className="uk-form-label">Full name</label>
              <Field type="text" placeholder="Preferred name" className="uk-input" name="name" />
              <ErrorMessage name="name" component="div" className="uk-text-danger" />
            </div>
            <div className="uk-margin">
              <abbr title="required">*</abbr>
              <label className="uk-form-label">Email</label>
              <Field type="email" placeholder="yourname@example.com" className="uk-input" name="email" />
              <ErrorMessage name="email" component="div" className="uk-text-danger" />
            </div>
            <div className="uk-margin">
              <abbr title="required">*</abbr>
              <label className="uk-form-label">Phone</label>
              <Field type="phone" placeholder="555-555-5555" className="uk-input" name="phone" />
              <ErrorMessage name="phone" component="div" className="uk-text-danger" />
            </div>
            {
              showJobTitle && 
                <div className="uk-margin">
                  <abbr title="required">*</abbr>
                  
                  <label className="uk-form-label">Job Title</label>
                  <Field as="select" placeholder="yourname@example.com" className="uk-input" name="job_title" >
                    <option value="">Select one</option>
                    <option value="C-Suite/VP">C-Suite/VP</option>
                    <option value="Director">Director</option>
                    <option value="Manager">Manager</option>
                    <option value="Engineer/Analyst">Engineer/Analyst</option>
                    <option value="Student/Educator">Student/Educator</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="job_title" component="div" className="uk-text-danger" />
                </div>
            }
            {
              showCompanyName && 
                <div className="uk-margin">
                  <abbr title="required">*</abbr>
                  <label className="uk-form-label">Company name</label>
                  <Field type="text" placeholder="Acme inc" className="uk-input" name="title" />
                  <ErrorMessage name="title" component="div" className="uk-text-danger" />
                </div>
            }
            {
              showSector && 
                <div className="uk-margin">
                  {
                    requireSector && <abbr title="required">*</abbr>
                  }
                  <label className="uk-form-label">Sector</label>
                  <Field as="select" placeholder="yourname@example.com" className="uk-input" name="sector" >
                    <option value="">Select one</option>
                    <option value="Dental">Dental</option>
                    <option value="Medical">Medical</option>
                    <option value="Non-Medical">Non-Medical</option>
                  </Field>
                  <ErrorMessage name="sector" component="div" className="uk-text-danger" />
                </div>
            }
            {
              showCountry && 
                <div className="uk-margin">
                  <abbr title="required">*</abbr>
                  <label className="uk-form-label">Country</label>
                  <Field type="text"  className="uk-input" name="country" />
                  <ErrorMessage name="country" component="div" className="uk-text-danger" />
                </div>
            }
            
           
            {
              showMessage && 
                <div className="uk-margin">
                  {
                    requireMessage && <abbr title="required">*</abbr>
                  }
                 
                  <label className="uk-form-label">Message</label>
                  <Field as="textarea" rows={5} placeholder="Type your message here" className="uk-textarea" name="description" />
                  <ErrorMessage name="description" component="div" className="uk-text-danger" />
                </div>
            }
            
            <button type="submit" className="btn uk-button uk-button-secondary" disabled={isSubmitting}>
            { isSubmitting ? (<>{loadingMessage}&nbsp;<div uk-spinner="" /></>) : buttonLabel }
            </button>
            <p class="uk-text-small">
            {disclaimer}
            </p>
            {
              status === "success" && 
                <div className="uk-alert-primary" uk-alert="">
                  <a className="uk-alert-close " uk-close=""></a>
                  <p>{successMessage}</p>
                </div>
            }
            {
              status === "error" && 
                <div className="uk-alert-danger" uk-alert="">
                  <a className="uk-alert-close " uk-close=""></a>
                  <p>Sorry, something went wrong. You can reach us by calling or emailing directly.</p>
                </div>
            }
            
          </form>
        )}
      </Formik>
    )
  }
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-small">
        {
          alignment === "left" ? (
            <div uk-grid="" className="uk-grid-large uk-child-width-1-2@m">
              <div>
                {title && <h2 className="uk-text-primary">{title}</h2>}
                {aside && <aside dangerouslySetInnerHTML={{__html: aside }} className="uk-margin-medium-bottom" />}
                {image && 
                  <div className="uk-flex uk-flex-center">
                    <Image data={{...image.responsiveImage, alt: ''}} style={{maxWidth: "400px"}} />
                  </div>
                }
              </div>
              <div>
                <div className="nov-card">
                  { formLead && <div dangerouslySetInnerHTML={{ __html: formLead }} /> }
                  { contactForm() }
                </div>
              </div>
            </div>
          ) :  (
            <>
              <div className="uk-width-xxlarge uk-margin-auto uk-text-center">
                {title && <h2 className="uk-text-primary">{title}</h2>}
                {aside && <aside dangerouslySetInnerHTML={{__html: aside }} className="uk-margin-medium-bottom uk-text-large" />}
                {image && 
                  <div className="uk-flex uk-flex-center">
                    <Image data={{...image.responsiveImage, alt: ''}} style={{maxWidth: "400px" }} />
                  </div>
                }
              </div>
              <div className="uk-width-large uk-margin-auto">
                <div className="nov-card">
                  { contactForm() }
                </div>
              </div>
            </>
          )
            
        }
        
      </div>
    </div>
  )
}