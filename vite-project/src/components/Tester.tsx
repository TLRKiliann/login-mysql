import {useState} from 'react'

type TestProps = {
    user: string;
    pass: string;
}

const Tester = () => {
    
    const [test, setTest] = useState<TestProps>();

    const handleTester = () => {
        const verifyTest: TestProps = { user: "Edmond", pass: "123"}
        setTest(verifyTest);
    }

    return (
        <>
            <div>
                <p>{test?.user}</p>
                <p>{test?.pass}</p>
                <button type="button" onClick={handleTester}>Click</button>  
            </div>
        </>
    )
}

export default Tester