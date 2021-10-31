import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-scroll';

import { PageTemplate } from "./PageTemplate.jsx";
import { WorksList } from './WorksListTemplate.jsx';
import { line, portforio, IPA, hardening, defoult } from './workinfo.jsx'
import classes from './stylesheet/works.module.css';

import lineMain from './images/lineMain.png';
import portMain from './images/portMain.png'
import ipa from './images/IPA.jpg'
import cmd from './images/cmd_img.png'



export const works = () => {
    return (
        <PageTemplate pageTitle="WORKS">
            <BrowserRouter>
            <Link to='workContentBox' smooth={true}>
                <nav className={classes.worksList}>
                    <NavLink exact to='/portforio_pages/works/line' className={classes.worksItem}>
                        <WorksList 
                            image={lineMain} 
                            name={<>LINEAPIを用いたアルバイトのシフト < br /> 集計サービス</>}
                            info={<>Python、Flask、LINEAPI</>}
                        />
                    </NavLink>
                    <NavLink exact to='/portforio_pages/works/portforio' className={classes.worksItem}>
                        <WorksList 
                            image={portMain}
                            name={<>ポートフォリオサイト</>}
                            info={<>JavaScript、React、CSS<br />SPA,Responsive</>}
                        />
                    </NavLink>
                    <NavLink exact to='/portforio_pages/works/IPA' className={classes.worksItem}>
                        <WorksList 
                            image={ipa}
                            name={<>IPA 応用情報技術者試験　合格</>}
                            info={<>基礎知識、マネジメント</>}
                        />
                    </NavLink>
                    <NavLink exact to='/portforio_pages/works/hardening' className={classes.worksItem}>
                        <WorksList 
                            image={cmd}
                            name={<>Micro Hardening for Youth 2021 参加</>}
                            info={<>セキュリティ、チーム活動</>}
                        />
                    </NavLink> 
                </nav>
            </Link>
                <Route path="/portforio_pages/works/line" component={line} />
                <Route path="/portforio_pages/works/portforio" component={portforio} />
                <Route path="/portforio_pages/works/IPA" component={IPA} />
                <Route path="/portforio_pages/works/hardening" component={hardening} />
            </BrowserRouter>
        </PageTemplate>
    )
};