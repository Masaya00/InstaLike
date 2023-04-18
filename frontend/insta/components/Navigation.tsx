import Link from 'next/link'

const Navigation = () => {
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
            <div>
              <Link href='/login' className='button-nav mr-4'>
                ログイン
              </Link>
              <Link href='/register' className='button-nav'>
                アカウント登録
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation