
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background font-sans">
          <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex flex-col text-center gap-2">
                  <div className="text-5xl text-primary-text font-normal">The <br/> Mapping<br/>Dream
                      Team
                  </div>
                  <div className="text-secondary-text text-xl font-normal">
                     WPI Ghana C&apos;24
                  </div>
              </div>
              <div className="flex flex-row space-x-5 max-w-max">
                  <button
                      className="bg-button-background text-button-text bg-opacity-60 rounded-[10px] px-2 py-2 text-md">Community
                     Map
                  </button>
                  <button
                      className="flex-grow bg-button-background text-button-text
                       bg-opacity-60 rounded-[10px] px-2 py-2 text-md">Official Map
                  </button>
                  <button
                      className="flex-1 bg-button-background text-button-text bg-opacity-60 rounded-[10px] px-2 py-2 text-md whitespace-nowrap ">
                      Project Overview
                  </button>
              </div>
          </div>
      </main>)
}
