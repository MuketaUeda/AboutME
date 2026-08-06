

export const Footer = () => {
    return (
        <footer className="bg-background text-foreground border-t-2 border-border">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Gabriel Rosati. All rights reserved.
                </p>
            </div>
        </footer>
    )
}