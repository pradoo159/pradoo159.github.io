import './SideMenu.scss'

export default function SideMenu({actions}) {


    return (
        <>
            <div id="side-menu">
                <button onClick={actions.accessHome}>Ir para a Home</button>
                <button onClick={actions.accessGeradorFatos}>Ir para o gerador de fatos</button>
                <button onClick={actions.accessAlternative}>Ir para a Página 2</button>
            </div>
        </>
    )

}