import Presentacion from '../presentacion';

const navItems = [
    {
        title: 'Inicio',
        link: '#inicio'
    },
    {
        title: 'Skills',
        link: '#skills'
    },
    {
        title: 'Contacto',
        link: '#contacto'
    }
];

const cabecera = () =>{
    return(
        <>
        <header id='cabecera' className="p-3 px-0 d-flex flex-row justify-content-around fixed-top">
            <div>
                <h1 className='display-1 text-white'>Ariel Vega</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav fs-2 d-flex justify-content-between ">
                            {navItems.map((item,index) => (
                                <li key={index} className="nav-item ">
                                    <a href={item.link} id='links'  className="nav-link px-3 text-white" >{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div >
         <Presentacion/> 
        </div>
        </>
    )
}

export default cabecera;