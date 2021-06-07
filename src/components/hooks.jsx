import { useState } from 'react';
import { Button } from '@material-ui/core';

export default function HooksExample() {

    const [age, setAge] = useState(23)
    const [siblingsNum, setSiblingsNum] = useState(2)

    const handleAge = () => setAge(age + 1)
    const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1)
    const decreasAge = () => setAge(age - 1)
    const decreaseSiblings = () => setSiblingsNum(siblingsNum - 1)

    return (
        <div>
            <h2>useState Hook</h2>
            <p>Today I am {age} Years of Age</p>
            <p>I have {siblingsNum} siblings</p>
            <div>
                <Button variant="contained" color="primary" onClick={handleAge}>Get older!</Button>{'     '}
                <Button variant="contained" color="primary" onClick={decreasAge}>Get younger!</Button>
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={handleSiblingsNum}>More siblings!</Button>{'        '}
                <Button variant="contained" color="primary" onClick={decreaseSiblings}>Less siblings!</Button>
            </div>
        </div>
    )
}