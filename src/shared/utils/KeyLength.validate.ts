export const validateKey = (key: string): boolean => {
    if (key.length !== 16 && key.length !== 32) {
        return false;
    }
}