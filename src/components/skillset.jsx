import { PageTemplate } from './PageTemplate.jsx';
import { SkillsetTEmplate } from './SkillsetTemplate.jsx'
import classes from './stylesheet/skillset.module.css'

import python from './images/python.svg'
import flask from './images/flask.svg'
import react from './images/React.svg'
import git from './images/Git.png'
import github from './images/GitHub.png'
import apache from './images/apache.svg'



export const skillSet = () => {
    return (
        <PageTemplate pageTitle="SKILL">
            <div className={classes.skillList}>
                <SkillsetTEmplate
                    title="Python"
                    image={<>
                        <img src={python} alt="" className={classes.skillImage} />
                        <img src={flask} alt="" className={classes.skillImage} />
                    </>}
                >
                    FlaskによるWebアプリケーション制作やスクレイビングなどで用いています。最近では機械学習の際にも利用している、最も使用している言語です。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="JavaScript"
                    image={<>
                        <div className={classes.flexbox}>
                            <div className={classes.imageText}>JavaScript</div>
                            <div className={classes.imageText}>Canvas</div>
                            <img src={react} alt="" className={classes.skillImage} />
                        </div>
                    </>}
                >
                    Reactによるフロントエンド開発やSPAの開発や、Canvasでのアニメーション制作などに利用しています。Web技術に必須の利用頻度の高い言語です。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="MySQL PostgreSQL"
                    image={<>
                        
                    </>}
                >
                    サーバーサイド開発に必要なデータベースに用いています。Pythonからのアクセスが多く、機械学習にも必須のスキルです。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="Others"
                    image={<>
                        <img src={github} alt="" className={classes.skillImage} />
                        <img src={git} alt="" className={classes.skillImage} />
                        <img src={apache} alt="" className={classes.skillImage} />
                    </>}
                >
                    Git/Githubは普段の開発の中でバージョン管理、ソースコード共有に利用しています。<br />Linux Aparchはサーバーやセキュリティについての学習である程度の操作が出来ます。<br />C言語については簡単なプログラムやファイル操作などの知識があります。
                </SkillsetTEmplate>
            </div>
        </PageTemplate>
    )
};