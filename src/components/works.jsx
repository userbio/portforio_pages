import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-scroll';

import { PageTemplate } from "./PageTemplate.jsx";
import { WorksList } from './WorksListTemplate.jsx';
import { line, portforio, IPA, hardening, defoult } from './workinfo.jsx'
import classes from './stylesheet/works.module.css';

import test from './images/test.png';
import lineMain from './images/lineMain.png';
import portMain from './images/portMain.png'



export const works = () => {
    return (
        <PageTemplate pageTitle="WORKS">
            <BrowserRouter>
            <Link to='workContentBox' smooth={true}>
                <nav className={classes.worksList}>
                    <NavLink exact to='/works/line' className={classes.worksItem}>
                        <WorksList 
                            image={lineMain} 
                            name={<>LINEを用いたアルバイトのシフト < br /> 集計サービス</>}
                            info={<>Python、Flask、LINEAPI</>}
                        />
                    </NavLink>
                    <NavLink exact to='/works/portforio' className={classes.worksItem}>
                        <WorksList 
                            image={portMain}
                            name={<>ポートフォリオサイト</>}
                            info={<>JavaScript、React、CSS<br />SPA,Responsive</>}
                        />
                    </NavLink>
                    <NavLink exact to='/works/IPA' className={classes.worksItem}>
                        <WorksList 
                            image={test}
                            name={<>IPA 応用情報技術者試験　合格</>}
                            info={<>基礎知識、マネジメント</>}
                        />
                    </NavLink>
                    <NavLink exact to='/works/hardening' className={classes.worksItem}>
                        <WorksList 
                            image={test}
                            name={<>Micro Hardening for Youth 2021 参加</>}
                            info={<>セキュリティ、チーム活動</>}
                        />
                    </NavLink>
                    <NavLink exact to='/works' className={classes.worksItem}>
                        <WorksList 
                            image={test}
                            name={<></>}
                            info={<>Coming soon</>}
                        />
                    </NavLink>    
                </nav>
            </Link>
                <Route path="/works" component={defoult}/>
                <Route path="/works/line" component={line} />
                <Route path="/works/portforio" component={portforio} />
                <Route path="/works/IPA" component={IPA} />
                <Route path="/works/hardening" component={hardening} />
            </BrowserRouter>
        </PageTemplate>
    )
};