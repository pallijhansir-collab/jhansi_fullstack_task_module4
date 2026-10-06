import StudentProfile from "./components/StudentProfile";
import StudentMarks from "./components/StudentMarks";
import LoginForm from "./components/LoginForm";

function App() {
    return (
        <div>
            <h1>React Hands-On Tasks</h1>

            <StudentProfile
                name="Rahul"
                rollNo="101"
                course="BCA"
                college="ABC College"
            />

            <StudentMarks
                name="Rahul"
                subject="Java"
            />

            <LoginForm />
        </div>
    );
}

export default App;