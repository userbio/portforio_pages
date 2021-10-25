import { PageTemplate } from "./PageTemplate.jsx";
import classes from './stylesheet/profile.module.css'

import logo from './images/logo.png'



export const Profile = () => {
    return (
        <PageTemplate pageTitle="Profile">
            <div className={classes.flexbox}>
                <div><img src={logo} alt="not found" className={classes.logo} /></div>
                はじめまして。大学3年生の松田渓太郎と申します。大学での選考は化学、炭素材料分野ですが、IT技術についてもよく学習、実践しています。<br />
                高校生の頃からIT技術に興味をもち、大学ではプログラミングの実践にも取り組んでいます。主にどのOSにも展開しやすいという点でWeb系技術を学んでいますが、機械学習やAPIなど幅広く学んでおります。<br />
                IT技術に限らず学習のモチベーションは興味、知識欲が大きく、様々なことに対して積極的に学びたいと考えています。また学んだことを形にすることを意識していて何かの形でまとめたり、Worksのタブにあるようにサービスの形として表しています。
            </div>
        </PageTemplate>
    )
};