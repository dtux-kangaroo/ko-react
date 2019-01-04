import React from 'react';
import ScrollToTop from 'react-scroll-up';
import classnames from 'classnames';
const Url = require('url-parse')
import { i18n } from '../../../src';

import en from '../../../src/locales/lang/en';
import zh from '../../../src/locales/lang/zh-CN';

import locales from '../../locales';
import pages from '../index';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    window.addEventListener("hashchange", () => {
      window.scrollTo(0, 0);

      this.setPage();
    }, false);
  }

  componentDidMount() {
    let suffix='',hash=location.hash;
    let idx=hash.indexOf('?');
    suffix=idx>0?hash.substr(idx):false;
    this.setState({suffix});
    this.setPage(() => {
      if (!this.state.locale) {
        this.setLocale(localStorage.getItem('KO_LANGUAGE') || 'zh-CN');
      }
    });
  }

  componentDidUpdate(props, state) {
    if (state.locale != this.state.locale) {
      switch(this.state.locale) {
        case 'en-US':
          i18n.use(en); break;
        default:
          i18n.use(zh); break;
      }
    }
  }

  getLocale(key) {
    const map = locales[this.state.locale] || {};
    return key.split('.').reduce((a, b) => {
      const parent = map[a];

      if (b) {
        return (parent || {})[b];
      }

      return parent;
    });
  }

  setLocale(locale) {
    window.location.hash = `/${locale}/${this.state.page}`;
  }

  getPage() {

    let  addres=location.hash.replace(/\?.*/g,'');
    const routes = addres.match(/(?:\/(.+))?\/(.+)/);
    if (routes) {
      if (locales.hasOwnProperty(routes[1])) {
        this.setState({ locale: routes[1]}, () => {
          localStorage.setItem('KO_LANGUAGE', this.state.locale);
        });
      }
      return routes[2];
    }
    return 'quick-start';
  }

  setPage(fn) {
    this.setState({ page: this.getPage() }, fn);
  }

  getComponent(page) {
    this.components = this.components || Object.assign(Object.values(pages.components).reduce((a, b) => {
      return Object.assign(a, b);
    }, {}), pages.documents);

    const result = this.components[page];
    //console.log(this.components,'this.components');
    if (result) {
      return React.createElement(result.default, {
        locale: {
          show: this.getLocale('markdown.show'),
          hide: this.getLocale('markdown.hide')
        }
      });
    }
  }

  render() {
   const {suffix}=this.state;
   console.log(suffix,'suffix-pppp');
    return (
      <div className="app">
       {!suffix?<header className="header">
          <div className="container">
            <h1>
              <img src={require('../../assets/imgs/logo_128.png')} />
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <a className="active">{this.getLocale('misc.component')}</a>
              </li>
              <li className="nav-item">
                <a className="">设计</a>
              </li>
              <li className="nav-item">
                <a href={`https://github.com/dtux-kangaroo/ko-resouce`} target="_blank" rel="noopener noreferrer">{this.getLocale('misc.resource')}</a>
              </li>
              <li className="nav-item">
                <span className={classnames('nav-lang', { active: this.state.locale === 'zh-CN'})} onClick={this.setLocale.bind(this, 'zh-CN')}>中文</span>
                <span> / </span>
                <span className={classnames('nav-lang', { active: this.state.locale === 'en-US'})} onClick={this.setLocale.bind(this, 'en-US')}>En</span>
              </li>
            </ul>
            <ul className="nav-right">
                <li className="nav-item"> <a href="https://github.com/dtux-react" target="_blank">github</a></li>
                <li className="nav-item"> <a href="https://zhuanlan.zhihu.com/c_109929958" target="_blank">社区</a></li>
              </ul>
          </div>
        </header>:null}
        <div className="main container">
          <nav className="side-nav">
            <ul>
              <li className="nav-item">
                <a>{this.getLocale('misc.development')}</a>
                <ul className="pure-menu-list sub-nav">
                  {
                    Object.keys(pages.documents).map(page => {
                      return (
                        <li className="nav-item" key={page}>
                          <a href={`#/${this.state.locale}/${page}${suffix ? suffix:''}`} className={page === this.state.page ? 'active' : ''}>{this.getLocale(`page.${page}`)}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li className="nav-item">
                <a>{this.getLocale('misc.components')}</a>
                {
                  Object.keys(pages.components).map(group => {
                    return (
                      <div className="nav-group" key={group}>
                        <div className="nav-group__title">{group}</div>
                        <ul className="pure-menu-list">
                          {
                            Object.keys(pages.components[group]).map(page => {
                              return (
                                <li key={page} className="nav-item">
                                  <a href={`#/${this.state.locale}/${page}${suffix ? suffix:''}`} className={page === this.state.page ? 'active' : ''}>{this.getLocale(`page.${page}`)}</a>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </li>
            </ul>
          </nav>
          <div className="content">
             { this.getComponent(this.state.page) }
            <ScrollToTop showUnder={360}>
              <div className="page-component-up">
                <i className="el-icon-caret-top"></i>
              </div>
            </ScrollToTop>
          </div>
        </div>
        {!suffix?
        <footer className="footer">
          <div className="container">
            <div className="footer-main">
              <p className="footer-main-title">ko</p>
               <a className="footer-main-link" target="_blank" href="https://www.dtstack.com/">袋鼠云--提供技术支持--dtux</a>
            </div>
          </div>
        </footer>:null}
      </div>
    )
  }
}
