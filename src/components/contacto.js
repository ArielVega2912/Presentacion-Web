import emailjs from 'emailjs-com';
import ApiKeys from './emailKeys';



const contacto = () =>{
    const onSubmit = (e) => {
        e.preventDefault () // Evita la actualización predeterminada del navegador
    
        emailjs.sendForm (ApiKeys.ID_servidor, ApiKeys.TEMPLATE_ID, e.target, ApiKeys.USER_ID) 
        .then (result => { 
        alert ('Mensaje enviado, me comunicaré contigo en breve', result.text); 
        } , 
        error => { 
        alert ('Se produjo un error, inténtelo de nuevo', error.text) 
        }) 
    }
    return(
        <form id='formulario' className='col-md-12 col-lg-5' onSubmit = {onSubmit}>
            <legend>Formulario de Contacto</legend> 
            <br/>
            <p>Nombre:</p>
            <input name='nombre' className='form-control' type='text' placeholder='Nombre…'  />
            <p>Mail:</p>
            <input name='mail' type='email' placeholder='Mail…' className='form-control' />
            <p>Telefono:</p>
            <input name='telefono' type='text' placeholder='Telefono…' className='form-control' />
            <p>Motivo de Contacto:</p>
            <textarea name='mensaje' cols="71" rows="7" type='text' placeholder='Mensaje…' className='form-control' ></textarea>
            <br/>
            <button type='submit' className='btn btn-primary' >Enviar</button>
        </form>
    )
}

export default contacto;