import { FC } from "react"
import { usePokemons } from './hook'


const Pokemons: FC = (): JSX.Element => {
    const { list } = usePokemons()
    return (
        <div>
            {
                list.map((item: string, index: number) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    )
}


export default Pokemons