import React, { useState } from 'react'
import './Experience.css'
type Props = {
  str_id: string
}
type experienceInfo = {
  str_companyName: string
  d_startTenure: Date
  d_endTenure: Date
  str_descript: string
  arr_works: Array<string>
}

const Experience = ({str_id}: Props) => {
  
  const [experienceInfos, setExperienceInfos] = useState<Array<experienceInfo>>(
    [
      {
        str_companyName : '코코아소프트',
        d_startTenure : new Date(2022,5),
        d_endTenure : new Date(9999,1),
        str_descript : 'UiPath RPA 개발자',
        arr_works : [
          'UiPath 툴을 사용한 RPA 개발',
          '웅진푸드 RPA 도입 프로젝트 개발 참여',
          'Spigen RPA 운영 담당',
          '교육'
        ]
      }
    ]
  )
  const getTenure = (info: any) => {
    let str_sTenure: String;
    let str_sYear: String = String(info.d_startTenure.getFullYear())
    let int_sMonth: number = info.d_startTenure.getMonth()
    let str_sMonth: String;
    if (int_sMonth < 10) {
      str_sMonth = '0' + int_sMonth;
    } else {
      str_sMonth = String(int_sMonth);
    }
    str_sTenure = str_sYear + '.' + str_sMonth;
    let str_eTenure: String;
    if (info.d_endTenure.getFullYear() === 9999) {
      str_eTenure = '';
    } else {
      let str_eYear: String = String(info.d_endTenure.getFullYear())
      let int_eMonth: number = info.d_endTenure.getMonth()
      let str_eMonth: String;
      if (int_eMonth < 10) {
        str_eMonth = '0' + int_eMonth;
      } else {
        str_eMonth = String(int_eMonth);
      }
      str_eTenure = str_eYear + '.' + str_eMonth;
    }
    return str_sTenure + ' ~ ' + str_eTenure
  }

  const renderExperience = () => {
    return (
      <div className="experience-box">
        {
          experienceInfos.map((value) => {
            let str_tenure = getTenure(value);
            return (
              <div className="experience-item">
                <div className="exp-header">
                  <div className="company-name">
                    {value.str_companyName}
                  </div>
                  <div className="tenure">
                    {str_tenure}
                  </div>
                  <div className="descript">
                    {value.str_descript}
                  </div>
                </div>
                <ul className="works">
                  {
                    value.arr_works.map((work) => {
                      return (
                        <li className="work-item">
                          {work}
                        </li>
                        )
                    })
                  }
                </ul>
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
      {renderExperience()}
    </div>
  )
}

export default Experience