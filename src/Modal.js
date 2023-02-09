import React from "react";
import {FaTimes} from 'react-icons/fa'

export default function Modal(){
    return (
        <article className="modal backdrop">
            <FaTimes className="modal-cancel"/>
            <p className="modal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt eleifend turpis id vehicula. Maecenas vitae erat turpis. Aenean consequat dui a tempor tristique. Ut auctor diam ligula, quis sagittis velit egestas a. Pellentesque mi purus, suscipit vel viverra sit amet, maximus nec sem. Duis elit diam, elementum id molestie non, commodo sed nibh. Sed vel bibendum urna, et ullamcorper enim. Pellentesque in condimentum lacus</p>
        </article>
    )
}