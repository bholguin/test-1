import { FC } from "react"
import { useNumbers } from './hook'


const Numbers: FC = (): JSX.Element => {
    const { list } = useNumbers()
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


export default Numbers