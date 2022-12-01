import React from 'react'

const Skills = () => {
  return (
    <div>
       {/* <!-- JavaScript --> */}
    <h1 id='Skills' className="text-center text-4xl mb-6">My Skills</h1>
    <div className="border border-black mx-40 lg:px-32 lg:py-10 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
      {/* <!-- スキルの説明 --> */}
      <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
        <h3 className="text-3xl font-semibold">JavaScript</h3>
        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
        <div className="badge">webサイト</div>
        <div className="badge">フロントエンド開発</div>
      </div>
        <p className="">ReactとNext.Jsの勉強をしています。</p>
      </div>
    </div>

    {/* <!-- Python --> */}
    <div className="border border-black mt-4 mx-40 lg:px-32 lg:py-10 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-sky-300 transition-all duration-300 cursor-pointer">
      {/* <!-- スキルの説明 --> */}
      <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
        <h3 className="text-3xl font-semibold">Python</h3>
        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
        <div className="badge">データ分析</div>
        <div className="badge">スクレイピング</div>
      </div>
        <p className="">kaggleなどのコンペにも挑戦しています。Djangoを用いたWebアプリも作れます。</p>
      </div>
    </div>

    {/* <!-- HTML・CSS --> */}
    <div className="border border-black mt-4 mx-40 lg:px-32 lg:py-10 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-300 transition-all duration-300 cursor-pointer">
      {/* <!-- スキルの説明 --> */}
      <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
        <h3 className="text-3xl font-semibold">HTML・CSS</h3>
        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
        <div className="badge">webサイト</div>
      </div>
        <p className="">Tailwind CSSなどのフレームワークも使えます。</p>
      </div>
    </div>

    {/* <!-- PHP --> */}
    <div className="border border-black mt-4 mx-40 lg:px-32 lg:py-10 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-purple-300 transition-all duration-300 cursor-pointer">
      {/* <!-- スキルの説明 --> */}
      <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
        <h3 className="text-3xl font-semibold">PHP</h3>
        <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
        <div className="badge">データベース操作など</div>
      </div>
        <p className="">Laravelを用いてWebアプリも作った経験があります。</p>
      </div>
    </div>
    </div>
  )
}

export default Skills
