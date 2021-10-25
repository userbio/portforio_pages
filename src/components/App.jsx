import { NavLink, BrowserRouter, Route } from 'react-router-dom'

import { Profile } from './profile.jsx';
import { works } from './works.jsx';
import { skillSet } from './skillset.jsx';
import { contact } from './contact.jsx';
import classes from './stylesheet/App.module.css'

import faceIcon from './images/face.svg'



const Top = () => (
  <div className={`${classes.topContainer} ${classes.flexbox}`}>
    <div className={`${classes.topTitleBackground} ${classes.flexbox}`}>
      <div className={classes.topTitle}>Matuda Keitarou's<br />PORTFOLIO</div>
    </div>
  </div>
)

const About = () => (
  <div className={`${classes.aboutContainer} ${classes.flexbox}`}>
    <div className={classes.aboutTitle}>
      <img src={faceIcon} alt="" className={classes.face} /> About this site
    </div>
    <div className={classes.aboutContent}>
      これはIT技術について関心をもって学習している大学3年生のポートフォリオです。<br />
      様々なことに挑戦した中でIT、Tech関係の情報をまとめました。
      すべて独学で学んでおり、<br />物事を形にできる力を意識して学習してきました。
      IT関連の方はもちろん、専門ではない方もどうぞごゆっくりご覧ください。
    </div>
  </div>
)

const Navbar = () => (
  <div className={classes.navContainer}>
    <BrowserRouter>
    <nav className={`${classes.navbarBackground} ${classes.flexbox}`}>
      <NavLink exact to='/' className={classes.headerItem} activeClassName={classes.active}>Profile</NavLink>
      <NavLink exact to='/works' className={classes.headerItem} activeClassName={classes.active}>Works</NavLink>
      <NavLink exact to='/skillSet' className={classes.headerItem} activeClassName={classes.active}>Skill set</NavLink>
      <NavLink exact to='/contact' className={classes.headerItem} activeClassName={classes.active}>Contact</NavLink>
    </nav>
    <Route exact path="/portforio_pages/" component={Profile} />
    <Route exact path="/portforio_pages/works" component={works} />
    <Route exact path="/portforio_pages/skillSet" component={skillSet} />
    <Route exact path="/portforio_pages/contact" component={contact} />
    </BrowserRouter>
  </div>
)

const Footer = () => (
  <div className={`${classes.fotterContainer} ${classes.flexbox}`}>
    Matuda Keitarou
  </div>
)

const Sidebar = () => (
  <div></div>
)

const App = () => {
  return (
    <div className={classes.mainPage}>
      <Top />
      <About />
      <Navbar />
      <div className={classes.leftbarContainer}>
        <Sidebar />
      </div>
      <div className={classes.rightbarContainer}>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App;