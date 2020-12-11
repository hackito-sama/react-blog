import { React } from "react";

const Form = () => {
    return(
        <div>
            <form>
                <input type="text" name="name" /> <br/>
                <textarea name="comment">
                </textarea><br/>
                <input type="submit" value="Guardar Comentario" />
            </form>
        </div>
    )
}

export default Form;