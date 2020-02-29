import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ children, to, type = 'internal' }) => (
    type === 'internal'
        ? <Link to={to}> {children} </Link>
        : <a href={to} target='_blank'> {children} </a>
)

export default Link