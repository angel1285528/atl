


export default async function Page(){
    return (
        <>
        <h1>Registrar nuevo usuario</h1>
        <form action="">
            <input type="email" placeholder="email" />
            <hr />
            <input type="password" placeholder="Contraseña"/>
            <hr />
            <input type="password"placeholder="Confirmar contraseña" />
            <hr />
            <select />
             <option value="admin">Administrador</option>
             <option value="socio">Socio</option>
             <option value="entrenador">Entrenador</option>
             <option value="jugador">Jugador</option>
             <option value="comite">Comité</option>

            
            
        </form>
        </>
    )
}