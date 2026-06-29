export function resetInputs() {
    document.querySelectorAll(".add_word_input").forEach(input => {
        if (input.id !== "input_word_type") {
            input.value = ""}
    });
};