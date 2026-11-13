export default function NavMain() {
    return (
        <nav className="flex justify-between px-3 py-24">
            <a href="/">Home</a>
            <h1 className="uppercase font-sans font-bold tracking-widest">Alpine</h1>
            <div className="flex gap-4">
                <a href="#">Carrinho</a>
                <a href="#">Sobre</a>
            </div>        
        </nav>
    )
}