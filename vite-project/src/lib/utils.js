import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

// Utility function to combine and merge CSS classes
// Uses clsx for conditional class logic and tailwind-merge for Tailwind CSS optimization
export const cn = (...inputs) => {
    return twMerge(clsx(...inputs))
}