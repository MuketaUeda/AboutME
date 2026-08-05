import { Link } from "react-router-dom"

// 404 Not Found Page Component - Displays when user navigates to non-existent route
export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground px-4 text-center">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary">404</h1>
            <p className="text-foreground/60 max-w-md">
                This page doesn't exist — looks like you've drifted off course.
            </p>
            <Link to="/" className="cosmic-button">
                Back to Home
            </Link>
        </div>
    )
}
