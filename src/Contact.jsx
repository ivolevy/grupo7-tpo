import './assets/css/Contact.css'
import { CustomNav } from './assets/components/Nav';
import { ContactForm } from './assets/components/form/ContactForm';

export const Contact = () => {
  return (
    <>
    <CustomNav />
    <section className='contact'>
        <div className='left'>
            <h1 className="tittle">Contactanos!</h1>
            <h2 className="subtittle">Lorem ipsum dolor sit.</h2>
            <div className="data">
                <span>apsijas@asjapsj.com</span>
                <span>98918201890990</span>
                <span>aisagspi</span>
            </div>
        </div>

        <div className='right'>
            <ContactForm />
        </div>
    </section>
    </>
  )
}
