
const Ticket = () => {
    return(
        <div style={{
            width: '57mm',
            backgroundColor: 'rgb(255, 255, 255)',
        }}>{/* ticket-contenedor */}
            <header style={{
                width:'calc(100%-4mm)',
                textAlign:'center',
                fontFamily: 'sans-serif',
                fontSize: '11px',
                backgroundColor:'rgb(255, 255, 255)',
                marginTop:'10px',
            }}>{/* ticket */}
                <img style={{width:'calc(100% - 4mm)', position:'relative',}} src="logo_S0010.jpg" alt="Logo" />{/* logo */}
                <section style={{
                    width:'calc(100%-4mm)',
                    textAlign:'center',
                    fontFamily: 'sans-serif',
                    fontSize: '11px',
                    backgroundColor:'rgb(255, 255, 255)',
                    marginTop:'10px',
                }}>{/* ticket */}
                    <b>Matriz</b>
                    <h1 style={{
                        marginTop: '0px',
                        marginBottom: '0px',
                        fontSize: '17px',
                    }}>ESCUELA KEMPER URGATE</h1>{/* title */}
                    <br />
                    <b>RFC</b>:EKU9003173C9
                    <br />
                    AV. MENDOZA 456 GARITA DE OTAY OTRA COLONIA MUY LARGA 20928 Baja California TIJUANA
                    <br />
                    111233123123 21312312312313
                    <br />
                    <span>
                        <b>Sucursal</b>
                    </span>
                    <br />
                    <b>RFC</b>:EKU9003173C9
                    <br />
                    <b>LUGAR DE EXPEDICIÓN</b>: AV. MENDOZA 456 GARITA DE OTAY OTRA COLONIA MUY LARGA 20928 Baja California TIJUANA
                    <br />
                    <br />
                    111233123123 21312312312313
                    <br />
                </section>
                <b>REGIMEN FISCAL</b>: 601 GENERAL DE LEY PERSONAS MORALES
                <br />
                <b>Folio</b>: NV 90000009
                <br />
                <b>Fecha</b>: 2023-06-01 12:21:03
                <br />
            </header>
            <section style={{
                width:'calc(100%-4mm)',
                textAlign:'center',
                fontFamily: 'sans-serif',
                fontSize: '11px',
                backgroundColor:'rgb(255, 255, 255)',
                marginTop:'10px'
            }}>{/* ticket */}
                <hr />
                <table className="table-bordered" style={{width:'calc(100% - 4mm)', textAlign:'center', fontFamily:'sans-serif', fontSize:'9px', wordBreak:'break-word'}}>{/* tickett */}
                    <tr>
                        <td style={{width:'calc(57mm - 4mm)', textAlign:'center', fontFamily:'sans-serif', fontSize:'9 px', maxWidth:'0px', wordBreak:'break-word', fontWeight:'bold'}}>CANT</td>{/* titulos-cabecera */}
                        <td style={{width:'calc(57mm - 4mm)', textAlign:'center', fontFamily:'sans-serif', fontSize:'9 px', maxWidth:'0px', wordBreak:'break-word', fontWeight:'bold'}}>PRODUCTO</td>{/* titulos-cabecera */}
                        <td style={{width:'calc(57mm - 4mm)', textAlign:'center', fontFamily:'sans-serif', fontSize:'9 px', maxWidth:'0px', wordBreak:'break-word', fontWeight:'bold'}}>PRECIO/U</td>{/* titulos-cabecera */}
                        <td style={{width:'calc(57mm - 4mm)', textAlign:'center', fontFamily:'sans-serif', fontSize:'9 px', maxWidth:'0px', wordBreak:'break-word', fontWeight:'bold'}}>SUBTOTAL</td>{/* titulos-cabecera */}
                    </tr>
                    <tr>
                        <td>1.00</td>
                        <td>MALETINAAAAAAAAAAAAAAAAAAAAAAAAAAA</td>
                        <td>$1,160.00</td>
                        <td>$1,160.00</td>
                    </tr>
                    <tr>
                        <td>1.00</td>
                        <td>MALETIN</td>
                        <td>$1,160.00</td>
                        <td>$1,160.00</td>
                    </tr>
                </table>
                <hr />
                <h5 style={{fontWeight:'bold', textAlign:'right', margin:'0px'}}>Total: $1,060.00MXN</h5>{/* total */}
            </section>
            <footer style={{
                width:'calc(100%-4mm)',
                textAlign:'center',
                fontFamily: 'sans-serif',
                fontSize: '11px',
                backgroundColor:'rgb(255, 255, 255)',
                marginTop:'10px'
            }}>{/* ticket */}
                <h3 style={{fontSize:'14px', textAlign:'center',}}> Cantidad de Productos: 1 </h3>{/* reclamacion */}
                <p  style={{fontSize:'14px', textAlign:'center',}}> PARA CUALQUIER RECLAMACION ES NECESARIO <br /> PRESENTAR SU TICKET DE COMPRA </p>{/* reclamacion */}
                <p  style={{fontSize:'14px', textAlign:'center',}}>{/* reclamacion */}
                <b>TELEFONO</b>: <b>6699259907</b>
                </p>
                <p  style={{fontSize:'14px', textAlign:'center',}}>{/* reclamacion */}
                <strong>¡GRACIAS POR SU COMPRA!</strong>
                </p>
            </footer>
            <script>window.print();</script>
        </div>
    )
}
export default Ticket