export function allFieldsFilled(obj) {
    const values = Object.values(obj);
    if (values.some(field => field === "")) {
        return false
    } else {
        return true
    }
};