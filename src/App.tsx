import './App.css'

interface Contact {
  app: string
  info: string
}

function ContactsList() {
  const contacts: Contact[] = [
    { app: "facebook", info: "View Chonlakarn" },
    { app: "IG", info: "view_vievv" },
  ]
  return <ul>
    {contacts.map((contact) => {
      return <li key={contact.info}>
        [{contact.app}] {contact.info}
      </li>
    })}
  </ul>
}

interface CallMe {
  id: number
  name: string
}

function CallMeList() {
  const names: CallMe[] = [
    { id: 1, name: "view" },
    { id: 2, name: "tiger" },
    { id: 3, name: "(hong)pepp" },
  ]
  return <ul>
    {names.map((n) => {
      return <li key={n.id}>
        {n.name}
      </li>
    })}
  </ul>
}

interface Skill {
  topic: string
  score: string
}

function SkillList() {
  const skills: Skill[] = [
    { topic: "Backend", score: "3/5" },
    { topic: "Frontend", score: "2/5" },
    { topic: "Android", score: "2/5" },
    { topic: "Testing", score: "3/5" },
    { topic: "Showering speed", score: "5/5 👍✨" },
  ]
  return <ul>
    {skills.map((skill) => {
      return <li key={skill.score}>
        {skill.topic} : {skill.score}
      </li>
    })}
  </ul>
}

interface Hobbies {
  id: number
  activity: string
}

function HobbiesList() {
  const hobbies: Hobbies[] = [
    { id: 1, activity: "Playing games" },
    { id: 2, activity: "Listening ghost stories" },
    { id: 3, activity: "Watching cartoons or horror movies" },
  ]
  return <ul>
    {hobbies.map((hobby) => {
      return <li key={hobby.id}>
        - {hobby.activity}
      </li>
    })}
  </ul>
}

function App() {

  return (
    <>
      <div className="header">

        <video autoPlay loop className="back-video" muted playsInline>
          <source src='video/bgvideo.mp4' type='video/mp4'></source>
        </video>

        TG :: Tigerr 🐯

        <div className='Name'>
          <h1>Chonlakarn Chaisawad</h1>
        </div>
        <div className="image">
          <img src="img/profile.jpg" alt="" />
          <div className="color-box"></div>
        </div>
        <div className="imageforfun">
          <img src="img/funny.png" alt="" />
        </div>
        <div className="imagehorror">
          <img src="img/ผีหลอก.png" alt="" />
        </div>
        <div className='contact'>
          <h1>CONTACT</h1>
          {ContactsList()}
        </div>
        <div className='callMe'>
          {CallMeList()}
        </div>
        <div className='content1'>
          hello! I'm a fourth-year student at Silpakorn University in Computer Science. At present, I am a cooperative student working at ODDS Thailand. I am interested in programming and testing.
        </div>
        <div className="content2">
          Here and now, I'm in the team responsible for the new-SUapp.
        </div>
        <div className='skill'>
          <h1>Skills</h1>
          {SkillList()}
        </div>
        <div className='hobby'>
          <h1>Hobbies</h1>
          {HobbiesList()}
        </div>
        
      </div>
    </>
  )
}

export default App
