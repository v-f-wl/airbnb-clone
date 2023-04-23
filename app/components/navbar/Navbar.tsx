'use client'
import Container from '../Container'
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { SafeUser } from '@/app/types';

interface NavBarProps{
  currentUser?: SafeUser | null
}

const Navbar:React.FC<NavBarProps> = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4
          border-bottom-[1px]
        "

      >
        <Container>
          <div
            className="
              flex
              flex-row
              item-center
              justify-between
              gap-3
              md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser}/>
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
}

export default Navbar;