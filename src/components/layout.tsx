import {type ReactNode} from 'react'
import {Header} from './header'
import {LeftSidebar} from './left-sidebar'
import {RightSidebar} from './right-sidebar'
import {MainContent} from './main-content'
import {Footer} from './footer'
import {useF6Navigation} from '../hooks/use-f6-navigation'

interface LayoutProps {
  children: ReactNode
  showLeftSidebar?: boolean
  showRightSidebar?: boolean
  showFooter?: boolean
}

export function Layout({
  children,
  showLeftSidebar = false,
  showRightSidebar = false,
  showFooter = false,
}: LayoutProps) {
  useF6Navigation()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex flex-1">
        {showLeftSidebar && <LeftSidebar />}
        <MainContent>{children}</MainContent>
        {showRightSidebar && <RightSidebar />}
      </div>

      {showFooter && <Footer />}
    </div>
  )
}
