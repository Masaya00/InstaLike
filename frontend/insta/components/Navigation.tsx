import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { useRouter } from "next/router";


const Navigation = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const logoutHandler = async () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      console.log('navigationログアウト通過')
      await dispatch(logout())
    }
  }
  return (
    <div>
      <div className='bg-gray-900'>
        <div className='max-w-7x1 px-8 py-4 mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
            <Link href='/' className='text-white hover:text-gray-50'>
              フルスタックチャンネル
            </Link>
            </div>
            <div className="">
              {isAuthenticated ? (
                <div onClick={logoutHandler} className="cursor-pointer button-nav">
                  ログアウト
                </div>
              ) : (
                <div>
                  <Link href="/login" className="button-nav mr-4">
                    ログイン
                  </Link>
                  <Link href="/register" className="button-nav">
                    アカウント登録
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation