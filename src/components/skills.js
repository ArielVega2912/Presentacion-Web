const skills = () => {
    return(
        <aside id='contenedor'>
            <article data-aos="fade-right"data-aos-offset="350"
            data-aos-easing="ease-in-sine"className='box-contenedor'>
                <div className="cajas">HTML</div>
                <div className="cajas">CSS</div>
                <div className="cajas">JavaSript</div>
            </article>
            <article data-aos="fade-left"data-aos-offset="300"
            data-aos-easing="ease-in-sine"className='box-contenedor'>
                <div className="cajas">Node.JS</div>
                <div className="cajas">Express</div>
                <div className="cajas">React.JS</div>
            </article>
            <article data-aos="fade-up" data-aos-duration="1000" className='box-contenedor'>
                <div className="cajas">MySQL</div>
                <div className="cajas">MongoDB</div>
            </article>
        </aside>
    )
}

export default skills;