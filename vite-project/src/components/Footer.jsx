

export const Footer = () => {
    return (
        <footer className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-sm text-foreground/60">
                    &copy; {new Date().getFullYear()} Gabriel Rosati. All rights reserved.
                </p>
            </div>
        </footer>
    )
}