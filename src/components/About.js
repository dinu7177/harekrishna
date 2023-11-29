import User from "./User.js"
const About = () => {
    return (
        <div>
              <h1>About</h1>
              <h2>This is Learning Course</h2>
              <User name={"Dinesh"} location={"Hyderabad"}/>     {/* User Component rendered which is written using class based component */}
        </div>
    );
};
export default About;