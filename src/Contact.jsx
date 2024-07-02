import { ContactForm } from './assets/components/form/ContactForm';
import { ContactData } from './assets/components/form/ContactData';

export const Contact = () => {
  return (
    <>
      <section className='contact flex flex-col md:flex-row bg-gray-700 rounded-lg p-5'>
        <div className='left bg-gray-900 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 flex items-center justify-center'>
          <ContactData />
        </div>

        <div className='right w-full md:w-1/2'>
          <ContactForm />
        </div>
      </section>
    </>
  );
};
