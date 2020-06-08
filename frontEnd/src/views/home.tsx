import React from 'react'
import style from '../css/home.css'
import Msg from './home/msg.tsx'

class Home extends React.Component {
  renderBanner() { 
    return (
      <React.Fragment>
        <div className={style.contentWrapper}>
          <div className={style.bg1}>所有衣服</div>
          <div className={style.bg2}>所有鞋子</div>
        </div>
        <div className={style.contentWrapper}>
          <div className={style.bg2}>组合套装</div>
          <div className={style.bg1}>本周穿搭</div>
        </div>
      </React.Fragment>
    )
  }
  renderMsg() {
    return (
      <React.Fragment>
        <Msg></Msg>
      </React.Fragment>
    )
  }
  render() {
    return (
      <div>
        <div>
          {this.renderBanner()}
        </div>
        <div>
          <div>资讯</div>
          <div>
            {this.renderMsg()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home