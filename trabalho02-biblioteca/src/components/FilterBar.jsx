import { Button } from "@/components/ul/Button";

export default function FilterBar({ genres, generoAtivo, onGenreChange }) {
    return (
        <nav className="flex flex-wrap gap-2">
            {genres.map((genre) => (
                <Button
                    key={genre}
                    onClick={() => onGenreChange(genre)}
                    variant={generoAtivo === genre ? "default" : "outline"}
                    aria-pressed={generoAtivo === genre}
                >
                    {genre}
                </Button>
            ))}
        </nav>
    );
}