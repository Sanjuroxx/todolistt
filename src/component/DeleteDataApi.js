import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {DeleteDataApi} from './DeleteDataApi'

export const DeleteDataApi = () => {
    var id = useparams().id;
    console.log(id)
    const delete1 = () => {
        {
            axios.delete
        }
    }



    return (
        <div>DeleteDataApi</div>
    )
}
