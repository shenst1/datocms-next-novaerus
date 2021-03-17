
import { Formik, Field, ErrorMessage } from 'formik';
export default function WidgetContactForm({widget: {customerSupportLabel, customerSupportBody, formLabel, successMessage, loadingMessage, emailRecipient}}) {
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-small">
        <div uk-grid="" className="uk-grid-large uk-child-width-1-1">
          <div>
            <div className="nov-card nov-card-border">
              {customerSupportLabel && <h4>{customerSupportLabel}</h4> }
              {customerSupportBody && <div dangerouslySetInnerHTML={{__html: customerSupportBody}} />}
            </div>
          </div>
          <div>
            <div className="nov-card nov-card-border uk-width-xlarge">
              {formLabel && <h4>{formLabel}</h4> }
              <Formik
                initialValues={{ 
                  title: "",
                  description: "",
                  name: "",
                  phone: "",
                  email: "",
                  referral: 'Main contact page',
                  recipient: emailRecipient
                }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                  }
                
                  if (!values.description) {
                    errors.description = 'Required'
                  }
                  if (!values.name) {
                    errors.name = 'Required'
                  }
                  return errors;
                }}
                
                onSubmit={async (values, { setStatus, resetForm }) => {
                  try {
                    await fetch(`/api/tickets`, {
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
                      <label className="uk-form-label">Company name</label>
                      <Field type="text" placeholder="Acme inc" className="uk-input" name="title" />
                    </div>
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
                      <label className="uk-form-label">Phone</label>
                      <Field type="phone" placeholder="555-555-5555" className="uk-input" name="phone" />
                    </div>
                    <div className="uk-margin">
                      <abbr title="required">*</abbr>
                      <label className="uk-form-label">Message</label>
                      <Field as="textarea" rows={5} placeholder="Type your message here" className="uk-textarea" name="description" />
                      <ErrorMessage name="description" component="div" className="uk-text-danger" />
                    </div>
                    <button type="submit" className="btn uk-button uk-button-secondary" disabled={isSubmitting}>
                     { isSubmitting ? (<>{loadingMessage}&nbsp;<div uk-spinner="" /></>) : "Submit" }
                    </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}