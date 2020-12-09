import React, { useState, useContext } from 'react';
import moment from "moment";
import { Redirect } from 'react-router-dom';
//import {BlogContext} from '../../../Containers/Publications/Publications';

import { publicationService } from '../../../services/publications';

const Form = ({ history }) => {
    let currentDate = moment().format("YYYY-MM-DD");

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    //const {data, setData} = useContext(BlogContext);
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        let obj = {
            title: title,
            description: description, 
            image: null,
            createat: currentDate
        };
        let res = {};

        publicationService.addPublications('', obj).then((response) => {
            res = response.data.data;
            //setData([...data, res]);
            console.log(res)
            history.push('/');

        })
          .catch((err) => {res = null
          console.log('Ha ocurrido un error! => ',err)
        });
        
    }
    const onChangeHandler = (e) => {

        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value)
                break
            case 'description':
                setDescription(e.target.value)
                break

            default:
                return null;

        }

    }

        return (
            <div>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Titulo" name="title" onChange={onChangeHandler} />
                    <textarea placeholder="Ingrese una descripcion" name="description" onChange={onChangeHandler}></textarea>
                    <input type="submit" value="Agregar Publicacion" />
                </form>
            </div>
        )


    
}

export default Form
