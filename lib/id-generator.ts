/**
 * Automated Unique ID Generator for CRM Entities
 *
 * Generates human-readable, sequential IDs like:
 *   LD-0001, CL-0002, PJ-0003, TSK-0004, INV-0005
 */

/**
 * Generate a unique sequential ID with the given prefix.
 *
 * @param prefix  - The entity prefix (e.g. "LD", "CL", "PJ", "TSK", "INV")
 * @param items   - The current array of items (each must have an `id` field)
 * @param padding - Number of digits to pad to (default: 4)
 * @returns A new unique ID string like "LD-0011"
 */
export function generateId(
    prefix: string,
    items: { id: string }[],
    padding: number = 4,
): string {
    let maxNum = 0

    const pattern = new RegExp(`^${prefix}-(\\d+)$`)

    for (const item of items) {
        const match = item.id.match(pattern)
        if (match) {
            const num = parseInt(match[1], 10)
            if (num > maxNum) maxNum = num
        }
    }

    const nextNum = maxNum + 1
    return `${prefix}-${String(nextNum).padStart(padding, "0")}`
}

/**
 * Generate multiple sequential IDs starting from the next available number.
 * Useful for bulk imports.
 *
 * @param prefix  - The entity prefix
 * @param items   - The current array of items
 * @param count   - How many IDs to generate
 * @param padding - Number of digits to pad to (default: 4)
 * @returns An array of new unique ID strings
 */
export function generateBulkIds(
    prefix: string,
    items: { id: string }[],
    count: number,
    padding: number = 4,
): string[] {
    let maxNum = 0

    const pattern = new RegExp(`^${prefix}-(\\d+)$`)

    for (const item of items) {
        const match = item.id.match(pattern)
        if (match) {
            const num = parseInt(match[1], 10)
            if (num > maxNum) maxNum = num
        }
    }

    const ids: string[] = []
    for (let i = 1; i <= count; i++) {
        ids.push(`${prefix}-${String(maxNum + i).padStart(padding, "0")}`)
    }
    return ids
}
