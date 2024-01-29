const Contacto = () => {

    return (
        <div className="form-control">
            <h1 className="titulo">Contacto</h1>
            <section id="formulario">
                <form action="?" method="get">
                    <label>Nombre completo</label>
                    <br />
                    <input type="text" placeholder="nombre completo" name="identidad" />
                    <br /><br />
                    <label>Email (*)</label>
                    <br />
                    <input type="email" placeholder="email" required />
                    <br /><br />
                    <label>Telefono</label>
                    <br />
                    <input type="number" placeholder="caracteristica" size="10" />
                    <input type="number" placeholder="telefono" size="30" />
                    <br /><br />
                    <label>Tu mensaje</label>
                    <br />
                    <input type="text" placeholder="escribe tu mensaje (maximo 400 caracteres)" maxlength="400" size="50" />
                    <br /><br />
                    <label>¿Sos mayor de edad?</label>
                    <br />
                    <label>Sí</label>
                    <input type="radio" name="primera-visita" value="si" />
                    <br />
                    <label>No</label>
                    <input type="radio" name="primera-visita" value="no" />
                    <br /><br />
                    <input type="submit" className="enviar" />
                </form>
            </section>
            <section>
                <img src="./src/assets/car-logo.png" alt="Logo Distribuidora" id="imagen-form" />
            </section>
        </div>
    )
}

export default Contacto