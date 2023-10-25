import React, { useState, useRef, Ref } from "react";
// import * as React from 'react';
interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    // Adding a question mark means the prop is optional
    ok?: boolean;
    i?: number;
    fn: (bob: string) => string;
    person: Person;
    handleChange: () => void;
}

interface TextNode {
    text: string
}

// FC = Function Componant
export const TextField: React.FC<Props> = ({handleChange}) => {
    // const [count, setCount] = useState<number | null | undefined>(5);
    const [count, setCount] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};