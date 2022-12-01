import React from 'react'

const About = () => {
  return (
    <div>
       {/* about-section */}
      <section id='About' className='text-gray-700 border-t border-gray-200'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20'>
              <h1 className='text-2xl sm:text-3xl font-medium mv-2 text-gray-900'>About Me</h1>
              <div className="border border-purple-300 p-10 mx-40 my-10  lg:px-2 lg:py-10 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
      <div className="mb-2 lg:mb-0 self-center">     
      </div>
      <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
          <img src="/img/lala-azizli-KXKfgAS_yMI-unsplash.jpg" alt="" className="h-48 w-48 rounded-full mb-6"/>
        <p className="mb-2 text-lg">名前:　井澤 駿　(いさわ　しゅん)</p>
        <p className="mb-2 text-lg">職業:　大学生</p>
        <p className="mb-2 text-lg">趣味:　読書です。幅広いジャンルを読みます。</p>
        <p className="mb-2 text-lg">プログラミングを始めたきっかけ:  <br/>大学の授業でデータ分析をExcelで行っている時、先生がPythonやRを使えばもっと楽に高度な分析ができると教えてもらい<br/>それをキッカケにのめり込むようにプログラミングを独学で勉強し始めました。</p>
        <p className="mb-2 text-lg">プログラミングだけでなくビジネス思考を鍛えるために、自分が高校3年間サッカーをしていたこともあり、フットサル大会の企画運営をし、現在はイベント会社設立の為奮闘しています。</p>
        <p className="mb-2 text-lg">プログラミングをする際に意識していること:<br/>
        誰かに教わることなく独学で勉強してきたので、分からないところがあると積極的に本やネット検索を用いて調べました。<br/>また有料のオンラインコミュニティに参加し、kaggleなどのコンペの勉強会に参加したりしました。</p>
    </div>
  </div>
            </div>
            <div>
              <h1 className='text-3xl text-center font-bold py-3'>Portfolio</h1>
            </div>
            {/* カードのdivタグ */}
            <div className='flex flex-wrap'>
              <div className='md:w-1/3 p-4'>
                <div className='bg-gray-100 rounded-lg p-8'>
                  <div className='flex items-center mb-3'>
                    <div className='bg-green-500 text-white rounded-full p-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z" fill="currentColor" /><path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z" fill="currentColor" /><path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-3'>ポケモン図鑑</h2>                 
                  </div>
                  <div>
                  <p>ロボットプログラミング教室の小学生たちのために、どうやったら子供達が喜んでくれるかを考えた結果、子供達が好きなポケモンを表示させれば喜んでくれると思いつくりました。pokeAPIからポケモンのデータを取り出しまし表示させています。<br />React.jsを用いています。</p>
                  <a href="https://desolate-lowlands-67692.herokuapp.com/" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg></a>
                  </div>
                </div>
              </div>
              <div className='md:w-1/3 p-4'>
                <div className='bg-gray-100 rounded-lg p-8'>
                  <div className='flex items-center mb-3'>
                    <div className='bg-green-500 text-white rounded-full p-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z" fill="currentColor" /><path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z" fill="currentColor" /><path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-3'>フットサル大会のWebサイト</h2>                 
                  </div>
                  <div>
                  <p>私は現在フットサル大会を運営しています。そのホームページを作れないかと考え、今人気のNextJsを用いて作っています。</p>
                  <a href="http://passion-website-isawashun.vercel.app" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg></a>
                  </div>
                </div>
              </div>
              <div className='md:w-1/3 p-4'>
                <div className='bg-gray-100 rounded-lg p-8'>
                  <div className='flex items-center mb-3'>
                    <div className='bg-green-500 text-white rounded-full p-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z" fill="currentColor" /><path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z" fill="currentColor" /><path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-3'>Laravel&React　Todo App</h2>                 
                  </div>
                  <div>
                  <p>テックセレクトとというエンジニアイベントにおいて作成したアプリになります。バックエンドをLaravelでフロントエンドをReactで作っています。</p>
                  <a href=" https://ts-user-todo.herokuapp.com/" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
