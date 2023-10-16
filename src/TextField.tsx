import React, { useState } from "react";

interface Person {
    firstName: string;
    secondName: string;
}

interface Props {
    text: string;
    // Adding a question mark means the prop is optional
    ok?: boolean;
    i?: number;
    fn: (bob: string) => string;
    person: Person;
}

interface TextNode {
    text: string
}

// FC = Function Componant
export const TextField: React.FC<Props> = ({}) => {
    // const [count, setCount] = useState<number | null | undefined>(5);
    const [count, setCount] = useState<{text: string}>({text: 'hello'});
    
    setCount({text})

    return (
        <div>
            <input/>
        </div>
    );
};