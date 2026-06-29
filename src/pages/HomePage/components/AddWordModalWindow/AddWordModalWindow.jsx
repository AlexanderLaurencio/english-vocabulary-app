import AddWordForm from "../AddWordForm/AddWordForm.jsx"

function AddWordModalWindow({ children }) {
    return(
        <dialog 
        id="add_word_modalwindow" 
        className="add_word_modalwindow hidden" 
        data-testid="AddWordModalWindow">
            {children}
        </dialog>
    )
};

export default AddWordModalWindow