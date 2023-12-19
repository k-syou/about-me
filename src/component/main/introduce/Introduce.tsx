import React, { useState } from 'react'
import './Introduce.css'
type Props = {
  str_id: string
}

const Introduce = ({str_id}: Props) => {
  const str_img_path:string = '\\어몽어스.png'
  const [obj_info_data, setObj_info_data] = useState({
    iconNames: ['badge','cake','smartphone','alternate_email','github','school'],
    contents: ['김권수','1997.08.19','Please contact me by email','rnjstn819@gmail.com','https://github.com/k-syou','서울문화예술대학교']
  })
  const getInfo = () => {
    let arr_iconNames = obj_info_data.iconNames.slice()
    let arr_contents = obj_info_data.contents.slice()
    return (
      <div className="my-info">
        {
          arr_iconNames.map((icon, idx) => {
            let icon_tag;
            let info_content;
            if (icon === 'github') {
              icon_tag = (<svg className='icon github' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>)
              info_content = <a href={arr_contents[idx]}>{arr_contents[idx]}</a>
            } else {
              icon_tag = (<span className="material-symbols-outlined icon">
                {icon}
              </span>)
              info_content = <span className={icon}>{arr_contents[idx]}</span>
            }

            return (
              <div className="info-row">
                {icon_tag}
                <div className="info-content">
                  {info_content}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
      <div className="content intro-info">
        <img src={str_img_path} className="my-photo" />
        {getInfo()}
      </div>
      <div className="content intro-content">
        <p>&nbsp;&nbsp;<b className='red'>RPA 서비스 개발 및 운영, 교육 담당</b>을 맡으며 다양한 경험을 쌓았습니다.
        대표적인 솔루션으로 UiPath 및 Brity RPA를 다루었으며 개발 프로젝트 및 운영 뿐 아니라 입문 및 중급 코스 교육을 맡아서 진행하였습니다.
        이 외에도 다른 분야로의 확장성 및 개인 기술 성장을 위해서 Node.js, Java, DB, Python, Git, AWS 등
        다양한 분야에 공부를 놓지 않고 있습니다.</p><br></br>
        <p>&nbsp;&nbsp;다양한 기업의 프로젝트에 참여하면서 개발실력 또한 매우 중요하여 놓치지 않도록 노력하는 것은 당연하지만
        무엇보다 서비스를 제공하는 IT 특성상 <b className='red'>커뮤니케이션 능력</b>이 무엇보다 중요하다고 생각합니다. 그래서 능동적이고 적극적인
        모습으로 발전적인 비즈니스를 위해 소통하는 태도로 임하고 있습니다. 이러한 점을 바탕으로 필요한 개발자로서 성장하기위해
        포기하지 않고 학습하고 경험하며 발전하고 있습니다.</p>
      </div>
    </div>
  )
}

export default Introduce
