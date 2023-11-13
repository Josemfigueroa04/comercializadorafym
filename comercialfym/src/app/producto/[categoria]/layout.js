import Link from "next/link"




const ProductosLayout = ({children}) => {

    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
                <Link href={"/producto/all"}>Todos</Link>
                <Link href={"/producto/tvs"}>TVs</Link>
                <Link href={"/producto/hornos"}>Hornos</Link>
                <Link href={"/producto/aires"}>Aires</Link>
            </nav>

            {children}
        </div>
    )
}

export default ProductosLayout