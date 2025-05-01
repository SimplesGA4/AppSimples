import React, { useState, useEffect } from 'react';
import { marked } from 'marked'
import '@styles/animes/animes.css'


export default function Animes() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/kaladabrio2020/AProcura/main/README.md")
            .then((res) => res.text())
            .then((text) =>setMarkdown(marked.parse(text)));
    }, []);

    return (
        <div className='divMainAnimes'>
            <div dangerouslySetInnerHTML={{ __html: markdown }} className='divAnimes'/>
        </div>
    )
}