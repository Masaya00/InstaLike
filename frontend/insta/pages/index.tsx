import { useSelector } from "react-redux"
import Head from "next/head"
import Link from 'next/link'


const Index = () => {

  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
  const user = useSelector((state: any) => state.auth.user)

  return (
    <>
      <Head>
        <title>InstaLike</title>
      </Head>
      <div>
        {isAuthenticated && user ? (
          <div>
            <div>ようこそ、{user.name}さん</div>
            <div>あなたは、無料会員です</div>
            <div className="my-4 border-4 border-dashed border-gray-200 rounded">
              <div className="flex justify-center items-center h-64">こちらは無料コンテンツ！</div>
            </div>
          </div>
        ) : (
          <div>
              <div>
                <div className="mb-4">
                  有料コンテンツを利用するには、有料会員の登録をお願いします。
                </div>
                <Link href="/checkout" className="button-yellow">
                  こちらから
                </Link>
              </div>
          </div>
        )}
        <div className="">
          フルスタックチャンネルの有料会員サイトのチュートリアルです。
        </div>
      </div>
    </>
  )
}

export default Index