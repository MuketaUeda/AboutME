import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

// 404 Not Found Page Component - Displays when user navigates to non-existent route
export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-grid text-foreground px-4 text-center">
            <h1 className="text-stamp font-display text-6xl md:text-8xl font-bold text-main">404</h1>
            <p className="text-muted-foreground max-w-md">
                This page doesn't exist — looks like you've drifted off course.
            </p>
            <Button asChild>
                <Link to="/">Back to Home</Link>
            </Button>
        </div>
    )
}
