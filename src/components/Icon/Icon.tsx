import React from 'react'
import { IconProps } from './IconProps'
import {
    FaJava,
    FaNodeJs,
    FaReact,
    FaUserAlt,
    FaDocker,
} from 'react-icons/fa'
import {
    BiCode,
} from 'react-icons/bi'
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiNestjs,
    SiExpress,
    SiGithub,
    SiMysql,
    SiPostgresql,
    SiOracle,
    SiMongodb,
    SiAmazondynamodb,
    SiAmazonaws,
    SiGraphql,
    SiFirebase,
    SiNativescript,
} from 'react-icons/si'
import {
    AiOutlineConsoleSql
} from 'react-icons/ai'
import {
    DiMsqlServer
} from 'react-icons/di'

const Icon: React.FC<IconProps> = ({ props, iconName }) => {
    switch (iconName) {
        case 'code': return <BiCode {...props} />
        case 'java': return <FaJava {...props} />
        case 'javascript': return <SiJavascript {...props} />
        case 'typescript': return <SiTypescript {...props} />
        case 'nodejs': return <FaNodeJs {...props} />
        case 'react': return <FaReact {...props} />
        case 'nextjs': return <SiNextdotjs {...props} />
        case 'nestjs': return <SiNestjs {...props} />
        case 'express': return <SiExpress {...props} />
        case 'github': return <SiGithub {...props} />
        case 'sql': return <AiOutlineConsoleSql {...props} />
        case 'mysql': return <SiMysql {...props} />
        case 'postgresql': return <SiPostgresql {...props} />
        case 'mssqlserver': return <DiMsqlServer {...props} />
        case 'oracledb': return <SiOracle {...props} />
        case 'mongodb': return <SiMongodb {...props} />
        case 'dynamodb': return <SiAmazondynamodb {...props} />
        case 'aws': return <SiAmazonaws {...props} />        
        case 'docker': return <FaDocker {...props} />
        case 'graphql': return <SiGraphql {...props} />
        case 'firebase': return <SiFirebase {...props} />
        case 'nats': return <SiNativescript {...props} />
        default:
            return <FaUserAlt {...props} />
    }
}

export default Icon