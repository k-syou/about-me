import { Type } from 'typescript';
import './App.css';
import Header from './component/header/Header';
import { useState } from 'react';
import Introduce from './component/main/introduce/Introduce';
import Main from './component/main/Main';
import Skill from './component/main/skill/Skill';
import Experience from './component/main/experience/Experience';
import Project from './component/main/project/Project';
import Education from './component/main/education/Education';
import Certificate from './component/main/certificate/Certificate';
import Footer from './component/footer/Footer';
import TopButton from './component/side/top-button/TopButton';


interface headerMenuInfo {
  menuNames: Array<string>
  mainTags: Array<any>
}

function App() {
  const moveMenu = (id: string) => {
    let top;
    if (id === null) {
      top = 0
    } else {
      const el_target = document.getElementById(id);
      top = Number(el_target?.offsetTop) - 70
    }
    window.scrollTo({
      top: Number(top),
      behavior: 'smooth'
    })
  }
  const [headerMenuInfo, setHeaderMenuInfo] = useState<headerMenuInfo>({
    menuNames: ['introduce', 'skill', 'experience', 'project', 'education', 'certificate'],
    mainTags: [
      <Introduce str_id='introduce'/>,
      <Skill str_id='skill'/>,
      <Experience str_id='experience'/>,
      <Project str_id='project' />,
      <Education str_id='education' />,
      <Certificate str_id='certificate' />
    ]
  })
  const renderHeader = () => {
    const menuNames = headerMenuInfo.menuNames;
    return <Header moveMenu={moveMenu} menuNames={menuNames}/>
  }
  const renderMain = () => {
    const mainTags = headerMenuInfo.mainTags;
    return <Main mainTags={mainTags} />
  }
  return (
    <div className="App">
      <TopButton moveMenu={moveMenu}/>
      {renderHeader()}
      {renderMain()}
      <Footer />
    </div>
  );
}

export default App;
