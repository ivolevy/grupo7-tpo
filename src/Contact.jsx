import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './assets/css/Contact.css'
import { CustomNav } from './assets/components/Nav';

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

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Telefono" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </div>
    </section>
    </>
  )
}
