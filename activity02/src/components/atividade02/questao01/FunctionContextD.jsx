import { useContext } from "react"
import ColorTheme from "./MyColorContext"



const FunctionContextD = () => {
    const {bkgD} = useContext(ColorTheme)

    return (
        <div>
            <div>
                <h1 style={{ backgroundColor: bkgD }}>
                    Contexto D
                </h1>
            </div>
        </div>

    )
}

export default FunctionContextD