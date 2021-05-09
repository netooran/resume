/* eslint-disable react/jsx-props-no-spreading */
import './App.css'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import Intro from './intro/Intro'

function App() {
  const user = {
    name: { firstName: 'Sarath', lastName: 'Sasindrakumar' },
    bio:
      'I am a full-stack developer with experience in Java, JavaScript, Android, Ruby on Rails, Clojure, and React. I wish to work more on the front-end in the immediate future. I like to use technology to solve the problems the world face like climate emergency.',
    dpUrl: 'bg.jpg',
    email: 'sarathvss65@gmail.com',
    mobile: '+918547006469',
    social: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/sarath-vs/', icon: FaLinkedin },
      { name: 'Github', url: 'https://www.github.com/netooran/', icon: FaGithub },
      { name: 'Twitter', url: 'https://www.twitter.com/netooraan', icon: FaTwitter },
      { name: 'Instagram', url: 'https://www.instagram.com/netooraan/', icon: FaInstagram },
      { name: 'Facebook', url: 'https://www.facebook.com/netooran/', icon: FaFacebook },
    ],
  }

  return (
    <div className="App">
      <Intro {...user} />
    </div>
  )
}

export default App
