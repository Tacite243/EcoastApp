import Aside from "./aside";
import Right from "./right";


export default function PageStructure({ content, date }) {
    return (
        <div className="container">
            <Aside />
            <main>
                {content}
            </main>
            {/* <Right /> */}
        </div>
    )
}