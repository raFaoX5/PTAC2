export default function Header({emprestimosCount = 0}) {
    return (
        <header className="flex items-center justify-between border-b p-4">
            <div>
                <h1 className="text-2xl font-bold">Biblioteca Digital</h1>    
                <p className="hidden text-sm text-gray-600 sm:block">Explore nosso catálogo de livros</p>
            </div>
            <span className="text-sm font-semibold">
                {`Empréstimos (${emprestimosCount})`}
            </span>
        </header>
    );
}