import "./font.css";
export default function About() {
  return (
    <div className="relative mx-auto h-[calc(100vh-75px)] overflow-hidden max-w-6xl px-8 py-4 sm:p-8">
      <h1 className="mb-8 font-[Iceberg] text-3xl font-bold sm:mb-10 md:text-4xl">
        About
      </h1>
      <div className="mx-auto flex h-fit w-full flex-col text-lg sm:w-4/5">
        <p className="font-[LXGW]">
          这里是 Tech News, 一个科技新闻网站，也是来自 2024.08
          期项目冲锋队的作品。
        </p>
        <br />
        <ol className="translate-x-4 list-disc font-[LXGW]">
          <li>管理：<a className="text-blue-400 hover:text-blue-700 transition-all duration-300" href="https://space.bilibili.com/282739748">Enoch</a></li>
          <li>前端：<a className="text-blue-400 hover:text-blue-700 transition-all duration-300" href="https://github.com/FallingSakura">Ficon</a></li>
          <li>后端：<a className="text-blue-400 hover:text-blue-700 transition-all duration-300" href="https://github.com/wangsnoopy">Austin</a></li>
          <li>运维：<a className="text-blue-400 hover:text-blue-700 transition-all duration-300" href="https://github.com/YanXiao3020y">Yan</a></li>
        </ol>
        <br />
      </div>
      <p className="absolute text-sm bottom-4 text-gray-600 left-1/2 -translate-x-1/2 font-[LXGW]">Copyright ©️2024 EFAY.</p>
    </div>
  );
}
