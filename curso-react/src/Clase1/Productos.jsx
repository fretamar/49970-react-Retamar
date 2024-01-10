import BarritasMuecas from './BarritasMuecas'
import PanDulceDonLorenzo from './PanDulceDonLorenzo'
import PanDulceValido from './PanDulceValido'

const Productos=()=>{
 return(
    <div>
        <BarritasMuecas />
        <div style={{paddingBottom:"5px"}}></div>
        <PanDulceDonLorenzo />
        <div style={{paddingBottom:"5px"}}></div>
        <PanDulceValido />
    </div>
 )
}

export default Productos;