import { WorksInfo } from './WorkInfoTemplate';

import github from './images/GitHub.png'
import lineMain from './images/lineMain.png';
import lineImage from './images/lineimage.png'
import linesample from './images/linesample.png'
import portMain from './images/portMain.png'
import portTop from './images/portTop.png'
import portSmall from './images/portSmall.png'



export const line = () => (
    <WorksInfo
        url="line"
        title="LINEを用いたアルバイトのシフト集計サービス"
        image1={lineMain}
        image2={lineImage}
        image3={linesample}
        text={<>
            自身のアルバイト経験からシフト管理の形に課題を感じ、シフト希望を集め処理しやすい形で出力するサービスを作りました。<br />
            現在は、被雇用者がLINEアカウントにシフト希望を送信し、雇用者向けサイトにログインすることでその内容をエクセルファイルでダウンロードすることが出来ます。<br />
            継続的に開発を続けていてシフト調整を最適化問題と考え、入力されたデータを元にシフト案を生成することなどを考えています。<br />
            pythonで開発をしていて、LINEAPIを利用しています。デプロイにはHerokuを使用し、データベースも設けています。その他コードに関するこだわった点などはぜひお聞きください。
        </>}
        link={<a href="https://young-fjord-07670.herokuapp.com/" target="_blank" rel="noopener noreferrer">DEMOサイト</a>}
        githubIcon={github}
        githubLink="https://github.com/userbio/job_app"
    />
)

export const portforio = () => (
    <WorksInfo 
        url="portforio"
        title="ポートフォリオサイト"
        image1={portMain}
        image2={portTop}
        image3={portSmall}
        text={<>
            現在ご覧になっているこのサイトです。自身の学習の成果をまとめる場として作成しました。<br />
            技術的な面からは、Reactを用いてSPAとして開発しました。CSSデザインにも挑戦し、ある程度見栄えのするものになるように学習しました。<br />
            コンポーネントの考え方やCSSなど、フロントエンドの難しい部分もありましたが良い経験になったと感じています。<br />
            トップの背景画像は、大学の写真部の活動で撮影した春の桜並木の写真です。
        </>}
        link={<a href="https://userbio.github.io/portforio_pages/" target="_blank" rel="noopener noreferrer">LINK</a>}
        githubIcon={github}
        githubLink="https://github.com/userbio/portforio_pages"
    />
)

export const IPA = () => (
    <WorksInfo 
        url="IPA"
        title="IPA　応用情報技術者試験　合格"
        text={<>
            自身のITやコンピューター、ネットワークに関する知識を高め、様々な視点から物事を考えるために受験しました。<br />
            初歩的なアルゴリズムやハードウェアの知識やチームでの開発、フロー、マネジメントなど非常に多くのことを学びました。<br />
            個人での開発でも後から見直した際や他人がレビューをする際などの分かりやすさを考えるようになりました。またセキュリティに関しての意識が高まり、データベース、ネットワークをはじめとしたどのような分野でもセキュリティを考えるようになりました。
        </>}
        link={<a href="https://www.jitec.ipa.go.jp/" target="_blank" rel="noopener noreferrer">主催IPA HP</a>}
        githubIcon=""
        githubLink=""
    />
)

export const hardening = () => (
    <WorksInfo 
        url="hardening"
        title="Micro Hardening for Youth 2021 参加"
        text={<>
            ECサイトへのサイバー攻撃を想定し、実際にサーバーを守ることでセキュリティに関する貴重な実践経験を得ることの出来る競技会に参加しました。<br />
            実際に攻撃が仕掛けられ対応を迫られる中で防衛を行うことで、知識だけに留まらない経験を得ることが出来ました。<br />
            またその場で即席のチームを作って参加したため、コミュニケーションやチームワークを意識して活動に参加しました。<br />
            ※画像はイメージです。
        </>}
        link={<a href="https://sc4y.connpass.com/event/223405/#:~:text=Micro%20Hardening%20%E3%81%AF%E3%80%8C%E8%A1%9B%E3%82%8B,%E7%94%9F%E3%81%BE%E3%82%8C%E3%81%9F%E3%82%B5%E3%83%96%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E3%81%99%E3%80%82" target="_blank" rel="noopener noreferrer">MH4Y2021 HP</a>}
        githubIcon=""
        githubLink=""
    />
)

export const defoult = () => (
    <div className="workContentBox"></div>
)

