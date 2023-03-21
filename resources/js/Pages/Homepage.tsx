import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';


export default function Homepage(props) {

    console.log(props)
    return (
        <div className="div">
            <Head title= {props.title}/>
            <h1>{props.description}</h1>
        </div>
    )
}