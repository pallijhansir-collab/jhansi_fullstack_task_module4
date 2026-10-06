import { useState } from "react";

function StudentMarks(props) {

    const [marks, setMarks] = useState(50);

    const increaseMarks = () => {
        setMarks(marks + 5);
    };

    const decreaseMarks = () => {
        setMarks(marks - 5);
    };

    return (
        <div className="card">
            <h2>Student Marks</h2>

            <p><b>Student Name:</b> {props.name}</p>
            <p><b>Subject:</b> {props.subject}</p>

            <p><b>Marks:</b> {marks}</p>

            <button onClick={increaseMarks}>
                Increase Marks
            </button>

            <button onClick={decreaseMarks}>
                Decrease Marks
            </button>
        </div>
    );
}

export default StudentMarks;