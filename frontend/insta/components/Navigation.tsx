import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import {
  HomeIcon,
  LogoutIcon,
  LoginIcon,
  PlusCircleIcon,
  UserAddIcon,
  UserIcon,
} from '@heroicons/react/outline'


const Navigation = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const logoutHandler = async () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      await dispatch(logout())
    }
  }
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="border-b py-3">
        <div className="max-w-5xl mx-auto flex justify-between px-4">
          <div className="text-lg font-extrabold">
            <Link href="/">
              InstaLike
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="h-7 w-7">
                <HomeIcon />
            </Link>

            {isAuthenticated ? (
              <div className="flex space-x-4">
                <Link href="/post/new" className="h-7 w-7">
                    <PlusCircleIcon  />
                </Link>
                <Link href="/profile" className="h-7 w-7">
                    <UserIcon />
                </Link>
                <div onClick={logoutHandler} className="cursor-pointer h-7 w-7">
                  <LogoutIcon />
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login"  className="h-7 w-7">
                    <LoginIcon />
                </Link>
                <Link href="/register" className="h-7 w-7">
                    <UserAddIcon />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation