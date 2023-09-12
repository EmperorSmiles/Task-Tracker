import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h4>Created by Favour Smiles Adejoh</h4>
      <Link to="https://www.linkedin.com/in/favour-smiles-adejoh/">LinkedIn Profile</Link><br />
      <Link to="https://github.com/EmperorSmiles">GitHub</Link><br />
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About