//  ____  _   _ 
// |  _ \| \ | | Pradyun Narkadamilli
// | |_) |  \| | https://pradyungn.tech
// |  __/| |\  | MIT License
// |_|   |_| \_| Copyright 2021 Pradyun Narkadamilli

import dark from '../styles/Dark.module.css'
import light from '../styles/Light.module.css'
import Link from 'next/link'

let styles = {"dark":dark, "light":light}

export default function Header(props) {
    let c = styles[props.mode]


    function Hyperlink(prop) {
        return (
            <div className={c.headerlink}>
                {props.active!=prop.text &&
                    <div className={c.overscore}/>
                }

                {props.active==prop.text &&
                    <div className={c.overspace}/>
                }

                <Link href={prop.link}>{prop.text}</Link>

                {props.active==prop.text &&
                    <div className={c.underscore}/>
                }
            </div>
        )
    }

    return (
        <div className={c.header+" "+(props.active ? c.headnorm:c.headmain)}>
            {props.active &&
                <Hyperlink link="/" text="Home"/> 
            }
            
            <div className={c.headright}>
                <Hyperlink link="/about" text="About"/>
                <Hyperlink link="/blog" text="Blog"/>
                <Hyperlink link="/docs" text="Docs"/>
                <Hyperlink link="/work" text="Work"/>
                <a className={c.sun}
                    href="#"
                    onClick={props.toggle}>
                    <img src="/sun.svg"/>
                </a>
                <a className={c.moon}
                    href="#"
                    onClick={props.toggle}>
                    <img src="/moon.svg"/>
                </a>
            </div>
        </div>
    )
}
