import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/pages/colors">Colors</Link></li>
                <li><Link href="/pages/container_spacing">Container</Link></li>
                <li><Link href="/pages/typography">Typography</Link></li>
                <li><Link href="/pages/sizing">Sizing</Link></li>
                <li><Link href="/pages/layout_position">Layout Position</Link></li>
                <li><Link href="/pages/background_shadows">Background shadows</Link></li>
                <li><Link href="/pages/borders">Borders</Link></li>
                <li><Link href="/pages/filters">Filters</Link></li>
                <li><Link href="/pages/breakpoints">Breakpoints</Link></li>
                <li><Link href="/pages/flex">Flexbox</Link></li>
                <li><Link href="/pages/grid">Grid</Link></li>
                <li><Link href="/pages/animation">Animation and Transform</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header