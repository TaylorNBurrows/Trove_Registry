import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

//link from react router only works for internal links to your app, need to use a tag for external

const Link = ({ children, to, type = 'internal' }) => (
    type === 'internal'
        ? <RouterLink to={to}> {children} </RouterLink>
        : <a href={to} target='_blank'>{children} </a>
);

export default Link